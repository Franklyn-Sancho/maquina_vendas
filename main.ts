import * as readline from "readline";
import { Coin, Product, VendingMachine } from "./vending_machine";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(theQuestion: string) {
  return new Promise((resolve) =>
    rl.question(theQuestion, (answ) => resolve(answ))
  );
}

async function main() {
  const coins: Coin[] = [
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

  const products: Product[] = [
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

  const vendingMachine = new VendingMachine(coins, products);

  while (true) {
    let option: any = await question("Insert coins or buy products: ");
    if (vendingMachine.isCoin(option)) {
      vendingMachine.addCoins(option);
    }
    if (vendingMachine.isProduto(option)) {
      vendingMachine.buyProduct(option);
      break;
    }
  }
}

main();

let coins = [];

let products = [];
