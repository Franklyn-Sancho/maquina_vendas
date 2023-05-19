import * as readline from "readline";
import { VendingMachine } from "./vending_machine";
import { coins, products } from "./model";


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

  const vendingMachine = new VendingMachine(coins, products);

  let option: string

  do {
    option = (await question("Insert coins or buy product: ")) as string
    option = option.toLowerCase()
    if (vendingMachine.isCoin(option)) {
      vendingMachine.addCoins(option);
    }
    if (vendingMachine.isProduto(option)) {
      vendingMachine.buyProduct(option);
      break;
    }
  } while (!vendingMachine.isProduto(option))
}

main();

