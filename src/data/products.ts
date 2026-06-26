export interface Product {
  id: string;
  image: string;
  title: string;
  url: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "1",
    image: "images/card_img01.png",
    title: "北陸電力送配電 防護管取付サービス",
    url: "https://creation-dev.tokyo/nw_kouji/bougokan.html",
    tags: ["ホワイト", "コーポレート", "インフラ", "Wordpress"],
  },
  {
    id: "2",
    image: "images/card_img01.png",
    title: "北陸電力送配電 防護管取付サービス",
    url: "https://creation-dev.tokyo/nw_kouji/bougokan.html",
    tags: ["ホワイト", "コーポレート", "インフラ", "Wordpress"],
  },
];
