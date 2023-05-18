export interface Coin {
  name: string;
  value: number;
}

export interface Product {
  name: string;
  price: number;
}

export class VendingMachine {
  private totalCoins = 0;
  private coins: Coin[];
  private products: Product[];

  constructor(coins: Coin[], products: Product[]) {
    this.coins = coins;
    this.products = products;
  }

  isCoin(value: string): boolean {
    let coin = parseFloat(value);

    var index = this.coins.findIndex((val) => val.value == coin);

    return index >= 0;
  }

  addCoins(value: string): void {
    console.log("Aceitamos moedas de: 0.01, 0.05, 0.10, 0.50 and 1.00");

    let coin = parseFloat(value);

    let index = this.coins.findIndex((val) => val.value == coin);

    if (index >= 0) {
      this.totalCoins += coin;
      console.log(`Você inseriu ${value} e seu saldo é: ${this.totalCoins}`);
    } else {
      console.log("vefirique o valor inserido");
      return;
    }
  }

  isProduto(product: string): boolean {
    let index = this.products.findIndex((val) => val.name == product);

    return index >= 0;
  }

  buyProduct(product: string): void {
    let index = this.products.findIndex(
      (val) => val.name == product && val.price <= this.totalCoins
    );

    if (index >= 0) {
      let charge = this.products
        .filter((item) => {
          return item.name == product;
        })
        .map((item) => {
          this.totalCoins -= item.price;
          return this.totalCoins;
        });
      console.log(`Obrigado pela preferência, seu troco é: ${charge}`);
    } else {
      console.log("Produto inexistente/dinheiro insuficiente");
    }
  }
}
