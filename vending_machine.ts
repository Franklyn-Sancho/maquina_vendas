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

    return this.coins.some((val) => val.value === coin);
  }

  addCoins(value: string): void {
    console.log("Aceitamos moedas de: 0.01, 0.05, 0.10, 0.50 and 1.00");

    let coin = parseFloat(value);

    if (this.isCoin(value)) {
      this.totalCoins += coin;
      console.log(`Você inseriu ${value} e seu saldo é: ${this.totalCoins}`);
    } else {
      console.log("vefirique o valor inserido");
      return;
    }
  }

  isProduto(product: string): boolean {
    return this.products.some((val) => val.name == product);
  }

  buyProduct(product: string): void {
    const item = this.products.find(
      (val) => val.name == product && val.price <= this.totalCoins
    );

    if (item) {
      const charge = this.totalCoins - item.price;
      this.totalCoins = charge;
      console.log(`Obrigado pela preferência, seu troco é: ${charge}`);
    } else {
      console.log("Produto inexistente/dinheiro insuficiente");
    }
  }
}
