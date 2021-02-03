let disabledLink = document.querySelector('a.disabled');

disabledLink.addEventListener( 'click', function(event) {

event.preventDefault(); // prevents going to bbc page,
console.log('clicked');  // just to see that its been clicked

})