var mealpricePreTip = 19.88;
var tipPercentage = 20;
var tipAmount = (mealpricePreTip * tipPercentage) / 100;
var receipt = 'Your Total bill with tip is : ' + '£' + ( mealpricePreTip + tipAmount ) + '<br>';

document.write (receipt);

var totalPrice = mealpricePreTip + tipAmount;

document.write ( "Your tip amount was: " + "£" + tipAmount.toFixed (2) + '<br>' + totalPrice.toFixed(2));
