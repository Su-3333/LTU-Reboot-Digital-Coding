function discountProductType (arr, discountAmount, type){

    let totalPrice = 0

    for(index = 0; index < arr.length; index++) {
        if (arr[index].type === type) {
            
            let discount = (arr[index].price * discountAmount) /100 ;
            totalPrice = totalPrice + ( arr[index].price - discount) * arr[index].quantity;
        }

            else if (type === "any") {
                let discount = (arr[index].price * discountAmount) /100 ;
                totalPrice = totalPrice + ( arr[index].price - discount) * arr[index].quantity;
            }
            else{
                totalPrice = totalPrice +(arr[index].price * arr[index].quantity)
            }


    }
    return totalPrice.toFixed(2);

      
}
// version 1
console.log("£" + discountProductType( shoppingCart, 20, "home"));
// above is a return, will not print.  need console.log 
// concatination


// version 2
var discountHome = discountProductType( shoppingCart, 20, "home");
    console.log(`£ ${discountHome}`  );
// template literal

//my version.
 console.log ("£" + discountProductType(shoppingCart));
    

 document.write( '<div class="alert alert-success" role="alert">All products have 20% Discount : £ ' + discountProductType( shoppingCart, 20, 'any' ) + '</div>');
 document.write( '<div class="alert alert-warning" role="alert">All products with type of food have 25% Discount : £ ' + discountProductType( shoppingCart, 25, 'food' ) + '</div>');
 document.write( '<div class="alert alert-primary" role="alert">All products with type of alcohol have 20% Discount : £ ' + discountProductType( shoppingCart, 20, 'alcohol' ) + '</div>');
 document.write( '<div class="alert alert-danger" role="alert">All products with type of home have 20% Discount : £ ' + discountProductType( shoppingCart, 20, 'home' ) + '</div>');