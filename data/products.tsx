export interface IProduct {
  id: number;
  name: string;
  type: string;
  images: string[];
  longDescription: string;
  specs?: ISpecs;
}
export interface ISpecs {
  colour: string;
  pieces: number;
  sizes: string[];
  price: number;
}
export class Collection {
  items: IProduct[] = [
    {
      id: 1,
      name: "Cute Dress",
      type: "Women's Clothing",
      images: [
        "https://post.healthline.com/wp-content/uploads/2020/09/fruit-still-life-732x549-thumbnail-732x549.jpg",
        "https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2018/03/How-To-Make-Fruit-Salad-1-680x1020.jpg",
      ],
      longDescription: "...",
      specs: {
        colour: "Blue",
        pieces: 32,
        sizes: ["XS", "S", "M", "L"],
        price: 17000,
      },
    },
    {
      id: 2,
      name: "Nice Dress",
      type: "Women's Clothing",
      images: [
        "https://post.healthline.com/wp-content/uploads/2020/09/fruit-still-life-732x549-thumbnail-732x549.jpg",
        "https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2018/03/How-To-Make-Fruit-Salad-1-680x1020.jpg",
      ],
      longDescription: "...",
      specs: {
        colour: "Grey",
        pieces: 32,
        sizes: ["XS", "S", "M", "L"],
        price: 13600,
      },
    },
    {
      id: 3,
      name: "Beautiful Dress",
      type: "Women's Clothing",
      images: [
        "https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2018/03/How-To-Make-Fruit-Salad-1-680x1020.jpg",
        "https://post.healthline.com/wp-content/uploads/2020/09/fruit-still-life-732x549-thumbnail-732x549.jpg",
      ],
      longDescription: "...",
      specs: {
        colour: "Yellow",
        pieces: 32,
        sizes: ["XS", "S", "M", "L"],
        price: 16000,
      },
    },
    {
      id: 4,
      name: "Lovely Dress",
      type: "Women's Clothing",
      images: [
        "https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2018/03/How-To-Make-Fruit-Salad-1-680x1020.jpg",
        "https://post.healthline.com/wp-content/uploads/2020/09/fruit-still-life-732x549-thumbnail-732x549.jpg",
      ],
      longDescription: "...",
      specs: {
        colour: "Indigo",
        pieces: 32,
        sizes: ["XS", "S", "M", "L"],
        price: 18000,
      },
    },
  ];
  handleItemClicked(id: number) {}
}
