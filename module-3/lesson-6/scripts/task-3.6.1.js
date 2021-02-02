// identify and select the img
let logo = document.querySelector('img');
// change the image
    logo.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg/440px-07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg');

let secondParagraph = document.querySelectorAll('p')[1];
// [1] is the second paragraph.  [0] is the first paragraph
    secondParagraph.style.border = '4px solid goldenrod';
    secondParagraph.style.marginTop = '50px';
    secondParagraph.style.padding = '50px';
    
let firstParagraph = document.querySelectorAll('p')[0];
    firstParagraph.style.border = "6px dotted blue";
    firstParagraph.style.marginTop = '90px';
    firstParagraph.style.padding = '20px';
