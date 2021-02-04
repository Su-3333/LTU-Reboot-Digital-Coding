const buttons = document.querySelectorAll('button.selection');

const allimages = document.querySelectorAll('main .image-selections .images');
 // toggle images selection


 // attribute = name, value = filter
let filterSearch = document.querySelector( 'input[name="filter"]');

let filterButton = document.querySelector('button.filter-button');




function toggleImages( dataClass ) {

        if(dataClass === 'allglutenfree' ) {

            allimages.forEach(function(image) {

                image.style.display = 'flex';
            });
        } else {

            allimages.forEach( function( image ) {

                if( image.dataset.class === dataClass ){

                    image.style.display = 'flex';

                } else {
                    image.style.display ='none';
                }
            });

        }  // end of if/else statement
} //end of toggleimages function

//toggleActiveClass
function toggleActiveClass (active){

    buttons.forEach(function(button ) {

        button.classList.remove('active');
        

    }); 
    active.classList.add('active');

} // end of toggleActiveClass


// filter button

filterButton.addEventListener('click', function ( ){

            let inputValue = filterSearch.value;
            
            let searchTerm = inputValue.toLowerCase();

            toggleImages( searchTerm ); 

             buttons.forEach(function( button ){

                let dataClass = button.getAttribute('data-class');

                    if( dataClass === searchTerm){
                        button.classList.add('active');

                    } else {

                        button.classList.remove ('active');

                    } // end of if/else statement

            }); // end of forEach loop

             // empties out filter box ready for next search   
            filterSearch.value = '';
   // test using console.log below
   //  console.log(inputValue.toLowerCase()); 
});

buttons.forEach(function(button){

    button.addEventListener('click', function() {


        toggleImages(button.dataset.class);

        toggleActiveClass(button);
    });

});  // End of forEach statement