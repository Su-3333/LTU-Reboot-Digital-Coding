function discountForFood (arr){

    let totalPrice = 0;   
    // 2.create a variable inside the function called 'totalprice'

    // 3. loop through each item in the array and add the value of the item to the totalPrice, remembering to account for the quantity.
    for (let index = 0; index < arr.length; index++ ){

        if (arr[index].type === "food") {
            
            let discount = (arr[index].price * 20) /100 ;

            
    // 4. if the item has a type of "food" the total price is 20% less

        totalPrice = totalPrice + ( arr[index].price - discount) * arr[index].quantity;
        }

            else{
                totalPrice = totalPrice +(arr[index].price * arr[index].quantity)
            }
    }

     // 5. return the totalPrice variable
     return totalPrice.toFixed(2);
}
 console.log ("£" +discountForFood(shoppingCart));
    
