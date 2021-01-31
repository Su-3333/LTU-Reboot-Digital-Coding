function drinkOrder(size,drink) {
    
    switch(drink){

        case 'mint tea':
            console.log('You have ordered a ' + size + " "+ drink);
            break;

        case 'english tea':
            console.log ('You have ordered a ' + size + " " + drink);
            break;

        case 'sparkling water':
            console.log ('You have ordered a ' + size + " " + drink);
            break;

        default:
            console.log ("We don't have that drink");

}    
}
drinkOrder('small','mint tea');
