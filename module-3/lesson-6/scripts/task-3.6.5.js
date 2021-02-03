let fullName = document.querySelector('input[name="full-name"]');

let submitButton = document.querySelector('input[type="submit"]');
// make variables at the top, then use them later

submitButton.addEventListener('click', function( event ){

    event.preventDefault();
    console.log (fullName.value);
});