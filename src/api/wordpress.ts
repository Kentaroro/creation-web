export interface WPCategory {
	id: number;
	name: string;
	slug: string;
	parent: number;
	taxonomy: string;
}

export interface WPPost {
	id: number;
	title: { rendered: string };
	acf?: {
		type?: string;
		url?: string;
		screenshot?: {
			pc?: string | { url: string; sizes?: { full?: { url: string } } };
			mobile?: string | { url: string; sizes?: { full?: { url: string } } };
		};
	};
	_categories?: number[];
	_featured_media?: number;
	_embedded?: {
		"wp:featuredmedia"?: Array<{
			source_url?: string;
		}>;
		"wp:term"?: Array<Array<WPCategory>>;
	};
}

export interface Product {
	id: string;
	type: string;
	image: string;
	title: string;
	url: string;
	tags: {
		label: string;
		type: string;
		value: string;
	}[];
	screen: {
		pc: string;
		mobile: string;
	};
}

export async function fetchProducts(): Promise<Product[]> {
	const apiUrl = import.meta.env.VITE_WP_API_URL;

	if (!apiUrl) {
		console.error("VITE_WP_API_URL is not set");
		return [];
	}

	try {
		const response = await fetch(
			`${apiUrl}/posts?_embed=wp:featuredmedia,wp:term&per_page=100`,
		);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const posts: WPPost[] = await response.json();

		const products: Product[] = posts
			.filter((post) => post.acf?.type && post.acf.type !== "")
			.map((post) => {
				const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
				const terms = post._embedded?.["wp:term"]?.flat() || [];
				const categories = terms.filter((term) => term.taxonomy === "category");

				// カテゴリーからtagsを生成
				const tags = categories.map((cat) => {
					const parentCat = categories.find((c) => c.id === cat.parent);
					return {
						label: parentCat?.name || cat.name,
						type: parentCat?.slug || cat.slug,
						value: cat.name,
					};
				});

				// ACFのscreenshotフィールドから画像URLを取得
				let screenPc = "";
				let screenMobile = "";

				if (post.acf?.screenshot?.pc) {
					// 文字列（URL）の場合はそのまま使用
					if (typeof post.acf.screenshot.pc === "string") {
						screenPc = post.acf.screenshot.pc;
					}
					// オブジェクト（画像配列）の場合はフルサイズのURLを使用
					else if (typeof post.acf.screenshot.pc === "object") {
						screenPc =
							post.acf.screenshot.pc.sizes?.full?.url ||
							post.acf.screenshot.pc.url;
					}
					// 数値（ID）の場合はAPIからURLを取得
					else if (typeof post.acf.screenshot.pc === "number") {
						screenPc = `${apiUrl}/media/${post.acf.screenshot.pc}`;
					}
				}

				if (post.acf?.screenshot?.mobile) {
					// 文字列（URL）の場合はそのまま使用
					if (typeof post.acf.screenshot.mobile === "string") {
						screenMobile = post.acf.screenshot.mobile;
					}
					// オブジェクト（画像配列）の場合はフルサイズのURLを使用
					else if (typeof post.acf.screenshot.mobile === "object") {
						screenMobile =
							post.acf.screenshot.mobile.sizes?.full?.url ||
							post.acf.screenshot.mobile.url;
					}
					// 数値（ID）の場合はAPIからURLを取得
					else if (typeof post.acf.screenshot.mobile === "number") {
						screenMobile = `${apiUrl}/media/${post.acf.screenshot.mobile}`;
					}
				}

				return {
					id: post.id.toString(),
					type: post.acf?.type || "landingpage",
					image: featuredMedia?.source_url || "",
					title: post.title.rendered,
					url: post.acf?.url || `/?p=${post.id}`,
					tags,
					screen: {
						pc: screenPc,
						mobile: screenMobile,
					},
				};
			});

		return products;
	} catch (error) {
		console.error("Error fetching products from WordPress:", error);
		return [];
	}
}
