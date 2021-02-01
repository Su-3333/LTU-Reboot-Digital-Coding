function shoppingCartTotalPrice ( arr ){   // arr can be any name.

    let totalPrice = 0; 

    for( let index = 0; index < arr.length; index++ ) {
        // console.log (arr[ index ]);   list out everything
        // console.log (arr[ index ].price);   list out price only
        // console.log (arr[ index ].quantity);  list out quantity only
        

        totalPrice = totalPrice + arr[ index].price * arr [index].quantity;
    }

    return totalPrice.toFixed (2);

}

 //    shoppingCartTotalPrice (shoppingCart);  // refers to variable shoppingCart (the table in the tax next door)
 console.log ("£" + shoppingCartTotalPrice (shoppingCart));





