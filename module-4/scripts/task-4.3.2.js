//1. Reading list

/* Task to do.
    Keep track of what books i have read and ones i have not
    Show the book title and the author of each book
    Depending on whether or not I have read the book, show the following message
    you have already read BOOK TITLE by AUTHOR
    you have not read BOOK TITLE by AUTHOR 

    TITLE = string
    AUTHOR = string
    HAS READ = boolean

*/

/* Pseudocode
    1. Create list of BOOKS - ARRAY of OBJECTS.  Index number starts at 0
    2. Cycle through the list of books FOR LOOP
    3. Show whether or not if i have read the book

*/

let books = [
    {
        title: 'Lord of the rings',
        author: "J.R.R. Tolkien",
        hasRead: false,
    },
    {
        title: 'Harry Potter',
        author: "J.K. Rowling",
        hasRead: true false,
    },

    {
        title: '',
        author: "",
        hasRead: true false,
    },

    {
        title: '',
        author: "",
        hasRead: true false,
    },

];

for (let counter = 0; count< books.length; counter++){

    console.log(books[ counter].title);

}