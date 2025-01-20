import { StaticImageData } from "next/image";
import Apple from "../assets/apple.jpg";
import Banana from "../assets/banana.jpg";
import Cherry from "../assets/cherry.jpg";
import Watermelon from "../assets/watermelon.jpg";
import Pineapple from "../assets/pineapple.jpg";

export enum ProductStatus {
  ACTIVATED,
  SUSPENDED,
  DEACTIVATED
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  date: string;
  status: ProductStatus;
  picture: StaticImageData;
}

export const mockedProducts: Product[] = [
  {
    id: 1,
    name: "Apple",
    price: 1.25,
    description: "A fruit that keeps the doctor away. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis, augue ut lobortis bibendum, arcu magna congue nulla, eget condimentum dolor odio a odio. Proin dui nunc, ",
    date: "2021-10-01",
    status: ProductStatus.ACTIVATED,
    picture: Apple
  },
  {
    id: 2,
    name: "Banana",
    price: 0.75,
    description: "A fruit that monkeys love. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis, augue ut lobortis bibendum, arcu magna congue nulla, eget condimentum dolor odio a odio. Proin dui nunc, ",
    date: "2021-10-02",
    status: ProductStatus.SUSPENDED,
    picture: Banana
  },
  {
    id: 3,
    name: "Cherry",
    price: 2.55,
    description: "A fruit that is red and sweet",
    date: "2021-10-03",
    status: ProductStatus.DEACTIVATED,
    picture: Cherry
  },
  {
    id: 4,
    name: "Watermelon",
    price: 5,
    description: "A fruit that is big and juicy",
    date: "2021-10-04",
    status: ProductStatus.ACTIVATED,
    picture: Watermelon
  },
  {
    id: 5,
    name: "Pineapple",
    price: 3,
    description: "A fruit that is spiky and sweet",
    date: "2021-10-05",
    status: ProductStatus.SUSPENDED,
    picture: Pineapple
  }
];
