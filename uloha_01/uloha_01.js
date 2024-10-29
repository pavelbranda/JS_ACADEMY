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

// udělej FCI, která dostane 2 argumenty: počet produktů a cenu jednoho 
function calculateTotalPrice(no_of_prod, price_per_prod, currency = "czk") {
  let totalPrice = no_of_prod * price_per_prod;
  let formattedPrice = formatPrice(totalPrice, currency);   
  return 'Koupil jsi ' + no_of_prod + ' předmětů dohromady za ' + formattedPrice;
}

// pomocná FCE pro formatovani do czk
function formatPrice(price, currency="czk") {
  if (currency === "czk") {
    return price.toLocaleString("cs-CZ", {
      style: "currency",
      currency: "CZK",
    });
  } else if (currency === "usd") {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  } else if (currency === "eur") {
    return price.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR"
    });
  }
};

// vyrobit FCI discount ( ) , která vypočítá slevu
function discount (price, discount) {
  discount = price / 100 * discount;
  let finalPrice = price - discount;

  price = price.toLocaleString("cs-CZ", {style: "currency", currency: "CZK"});
  discount = discount.toLocaleString("cs-CZ", {style: "currency", currency: "CZK"});
  finalPrice = finalPrice.toLocaleString("cs-CZ", {style: "currency", currency: "CZK"});

  // price = price + ' Kč';
  // discount = discount + ' Kč';
  // final_price = final_price + ' Kč';
  
  console.log('Cena je ' + price + ', sleva je ' + discount + ', cena po slevě je ' + finalPrice + '.');
}


//
// HLAVNÍ PROGRAM
//

// greeting()
let inputName = prompt("Please enter a name of somebody you hate:");
greeting(inputName, "hlupák")

// plus(a,b)
let a = prompt("Please, enter the first number: ");
let b = prompt("Please, enter the second number: ");
// prompty jsem vytáhnul ven z funkce!
console.log(plus(a,b))

// calculateTotalPrice() & FormatPrice
console.log (calculateTotalPrice(2, 800, "eur"));

// discount()
discount(1250, 30)


// TO-DO:
// 1.Testing (e.g. plus(10,5), plus(2.5, 8.3), plus(400,200);
