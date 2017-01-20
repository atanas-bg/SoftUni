/**
 * Created by User on 16.10.2016 г..
 */
// input :[
// 'Sofia -> Laptops HP -> 200 : 2000',
// 'Sofia -> Raspberry -> 200000 : 1500',
// 'Sofia -> Audi Q7 -> 200 : 100000',
// 'Montana -> Portokals -> 200000 : 1',
// 'Montana -> Qgodas -> 20000 : 0.2',
// 'Montana -> Chereshas -> 1000 : 0.3'
]
// output : 
// 'Town - Sofia',
// '$$$Laptops HP : 400000',
// '$$$Raspberry : 300000000',
// '$$$Audi Q7 : 20000000',
// 'Town - Montana',
// '$$$Portokals : 200000',
// '$$$Qgodas : 4000',
// '$$$Chereshas : 300'

function cityMarkets(sales) {
    let townsWithProducts = new Map();
    for (let sale of sales) {
        let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
        let [quantity, price] = quantityPrice.split(/\s*:\s*/);
        if (!townsWithProducts.has(town))
            townsWithProducts.set(town, new Map());
        let income = quantity * price;
        let oldIncome = townsWithProducts.get(town).get(product);
        if (oldIncome) income += oldIncome;
        townsWithProducts.get(town).set(product, income);
    }
    // TODO: print the incomes by towns and products
}


cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);