function discountProductType (arr, discountAmount, type){

    let totalPrice = 0

    for(index = 0; index < arr.length; index++) {
        if (arr[index].type === type) {
            
            let discount = (arr[index].price * "discountAmount") /100 ;
            totalPrice = totalPrice + ( arr[index].price - discount) * arr[index].quantity;
        }

            else if (type === "any") {
                let discount = (arr[index].price * "discountAmount") /100 ;
                totalPrice = totalPrice + ( arr[index].price - discount) * arr[index].quantity;
            }
            else{
                totalPrice = totalPrice +(arr[index].price * arr[index].quantity)
            }


    }
    return totalPrice.toFixed(2);

      
}

discountProductType( shoppingCart, 20, "home"); 

 console.log ("£" +discountProductType(shoppingCart));
    
