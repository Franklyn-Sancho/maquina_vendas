import { Coin, Product } from "./vending_machine";


export const coins: Coin[] = [
  {
    name: "5¢",
    value: 0.05,
  },
  {
    name: "10¢",
    value: 0.1,
  },
  {
    name: "25¢",
    value: 0.25,
  },
  {
    name: "50¢",
    value: 0.5,
  },
  {
    name: "$1",
    value: 1.0,
  },
];

export const products: Product[] = [
  {
    name: "chocolate",
    price: 2.0,
  },
  {
    name: "coke",
    price: 1.5,
  },
  {
    name: "pipoca",
    price: 5.0,
  },
];
