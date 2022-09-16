const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(theQuestion) {
    return new Promise(resolve => rl.question(theQuestion, answ => resolve(answ)))
} 

let coins = [
    {
        name: "5¢",
        value: 0.05
    },
    {
        name: "10¢",
        value: 0.10
    },
    {
        name: "25¢",
        value: 0.25
    },
    {
        name: "50¢",
        value: 0.50
    },
    {
        name: "$1",
        value: 1.00
    }
]


let products = [
    {
        name: "chocolate",
        price: 2.00
    },
    {
        name: "coke",
        price: 1.50
    },
    {
        name: "pipoca",
        price: 5.00
    }
]

let totalCoins = 0;



function isCoin(value) {

    var index = coins.findIndex(val => val.value == value)

    let result = (index >= 0) ? true : false; return result
}

function addCoins(value, totalCoins) {

    console.log('Aceitamos moedas de: 0.01, 0.05, 0.10, 0.50 and 1.00')

    let coin = parseFloat(value)

    let index = coins.findIndex(val => val.value == coin)

    if (index >= 0) {
        totalCoins += coin
        console.log(`Você inseriu ${value} e seu saldo é: ${totalCoins}`)
        return totalCoins
    }
    else {
        console.log("vefirique o valor inserido")
        return
    }
}

function isProduto(product) {

    let index = products.findIndex((val) => val.name == product)

    let result = (index >= 0) ? true : false; return result 

}

function buyProduct(product, totalCoins) {


    let index = products.findIndex((val) => val.name == product && val.price <= totalCoins)

    if (index >= 0) {

        let charge = products.filter((item) => {
            return item.name == product
        }).map((item) => {
            totalCoins -= item.price
            return totalCoins
        })
        console.log(`Obrigado pela preferência, seu troco é: ${charge}`)

    }
    else {
        console.log("Produto inexistente/dinheiro insuficiente")
    }

}

async function main() {

    while (true) {

        let option = await question("Insert coins or buy products: ")
        if (isCoin(option)) {
            totalCoins = addCoins(option, totalCoins)
        }
        if (isProduto(option)) {
            buyProduct(option, totalCoins)
            break
        }
    }
}

main()
