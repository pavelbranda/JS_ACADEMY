// vyrob FCI pozdrav ( )
// uprav FCI pozdrav ( ), tak aby prijimala dva argumenty - jmeno a urazka


// získej jméno přes prompt( )
function greeting(name, insult) {
  console.log('Ahoj ' + name + ', ty ' + insult + '!');
}

// vytvoř FCI plus ( ), která dostane dva argumenty
// pošli do FCE plus ( ) hodnoty získané přes prompt ( )
function plus(a,b) {
  a = Number(a);
  b = Number(b);
  return (a + b);
}
 
// pomocná FCE pro formatovani do czk
function numToSum(no_of_prod, result) {
  result = result.toFixed(2);
  result = result.replace('.', ',');
  result = result + ' Kč';
  
  console.log('Koupil jsi ' + no_of_prod + ' předmětů dohromady za ' + result);
  }

// udělej FCI, která dostane 2 argumenty: počet produktů a cenu jednoho 
function calculation(no_of_prod, price_per_prod) {   
  let total = no_of_prod * price_per_prod;
  return { total: total, no_of_prod: no_of_prod };  // Return both values - by returning an object
}


// vyrobit FCI discount ( ) , která vypočítá slevu
function discount (price, discount) {
  discount = price / 100 * discount;
  let final_price = price - discount;

  price = price + ' Kč';
  discount = discount + ' Kč';
  final_price = final_price + ' Kč';
  
  console.log('Cena je ' + price + ', sleva je ' + discount + ', cena po slevě je ' + final_price + '.');
}


//
// HLAVNÍ PROGRAM
//
let inputName = prompt("Please enter a name of somebody you hate:");
greeting(inputName, "hlupák")

let a = prompt("Please, enter the first number: ");
let b = prompt("Please, enter the second number: ");
// prompty jsem vytáhnul ven z funkce!

console.log(plus(a,b))

numToSum(no_of_prod, result)

// let no_of_prod = 2;
let result = calculation(2, 15);

discount(1250, 30)



