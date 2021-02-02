
// what are we attaching it to.
let div = document.querySelectorAll('div')[0];

// new paragraph in limbo
let newParagraph = document.createElement ('p');
// new text
let newTextNode = document.createTextNode('This is the new text Node');

// attach new textnode to new paragraph
newParagraph.appendChild( newTextNode );

// added new paragraph to div.
div.appendChild (newParagraph);