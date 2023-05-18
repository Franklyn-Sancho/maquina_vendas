"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
var VendingMachine = /** @class */ (function () {
    function VendingMachine(coins, products) {
        this.totalCoins = 0;
        this.coins = coins;
        this.products = products;
    }
    VendingMachine.prototype.isCoin = function (value) {
        var coin = parseFloat(value);
        var index = this.coins.findIndex(function (val) { return val.value == coin; });
        return index >= 0;
    };
    VendingMachine.prototype.addCoins = function (value) {
        console.log("Aceitamos moedas de: 0.01, 0.05, 0.10, 0.50 and 1.00");
        var coin = parseFloat(value);
        var index = this.coins.findIndex(function (val) { return val.value == coin; });
        if (index >= 0) {
            this.totalCoins += coin;
            console.log("Voc\u00EA inseriu ".concat(value, " e seu saldo \u00E9: ").concat(this.totalCoins));
        }
        else {
            console.log("vefirique o valor inserido");
            return;
        }
    };
    VendingMachine.prototype.isProduto = function (product) {
        var index = this.products.findIndex(function (val) { return val.name == product; });
        return index >= 0;
    };
    VendingMachine.prototype.buyProduct = function (product) {
        var _this = this;
        var index = this.products.findIndex(function (val) { return val.name == product && val.price <= _this.totalCoins; });
        if (index >= 0) {
            var charge = this.products
                .filter(function (item) {
                return item.name == product;
            })
                .map(function (item) {
                _this.totalCoins -= item.price;
                return _this.totalCoins;
            });
            console.log("Obrigado pela prefer\u00EAncia, seu troco \u00E9: ".concat(charge));
        }
        else {
            console.log("Produto inexistente/dinheiro insuficiente");
        }
    };
    return VendingMachine;
}());
exports.VendingMachine = VendingMachine;
