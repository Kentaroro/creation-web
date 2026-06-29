import TagOutlineIcon from "@iconify-react/mdi/tag-outline";
import ArrowTopRightBoldBoxOutline from "@iconify-react/mdi/arrow-top-right-bold-box-outline";
import useFancybox from "../hooks/useFancybox";

interface ProductCardProps {
	id: string;
	image: string;
	title: string;
	url: string;
	tags: string[];
	screen: {
		pc: string;
		mobile: string;
	};
}

export default function ProductCard({
	id,
	image,
	title,
	url,
	tags,
	screen,
}: ProductCardProps) {
	const [setFancyboxRoot] = useFancybox({});
	return (
		<div
			id={id}
			ref={setFancyboxRoot}
			className="bg-white shadow-sm rounded-sm overflow-hidden flex flex-col"
		>
			<figure className="bg-primary-light p-4">
				<img src={image} alt={title} className="w-full h-full object-contain" />
			</figure>
			<div className="p-4 h-full flex flex-col gap-4">
				<h3 className="text-lg font-medium">{title}</h3>
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-primary hover:underline block"
				>
					{url}
				</a>
				<div className="flex flex-wrap gap-2 mb-6">
					{tags.map((tag) => (
						<div
							key={tag}
							className="flex items-center gap-1 px-3 py-1 text-xs text-primary-light rounded-sm border border-primary-light"
						>
							<TagOutlineIcon className="size-4 mt-0.5" />
							<span className="flex-1">{tag}</span>
						</div>
					))}
				</div>
				<div className="grid grid-cols-2 gap-3 mt-auto">
					<a
						href={screen.pc}
						data-fancybox="gallery"
						data-caption={`${title} - Desktop`}
						className="px-4 py-2 bg-primary text-white rounded-sm hover:opacity-80 transition-opacity flex justify-center items-center gap-2 [&_img]:w-full"
					>
						DESKTOP
						<ArrowTopRightBoldBoxOutline className="size-5 mt-0.5" />
					</a>
					<a
						href={screen.mobile}
						data-fancybox="gallery"
						data-caption={`${title} - Mobile`}
						className="px-4 py-2 bg-primary-light text-white rounded-sm hover:opacity-80 transition-opacity flex justify-center items-center gap-2"
					>
						MOBILE
						<ArrowTopRightBoldBoxOutline className="size-5 mt-0.5" />
					</a>
				</div>
			</div>
		</div>
	);
}
