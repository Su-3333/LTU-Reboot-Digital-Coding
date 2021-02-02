let div = document.querySelectorAll('div')[0];
let newParagraph = document.createElement ('p');
let newTextNode = document.createTextNode('This is the new text Node');

newParagraph.appendChild( newTextNode );
div.appendChild (newParagraph);