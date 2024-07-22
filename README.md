**Find Book**

Find Book is a web application that encourages reading by allowing users to discover new books based on categories. This project was developed as part of the Start2Impact curriculum to apply JavaScript knowledge in a practical context.
This is a screenshot of the project ![screenshot](https://github.com/riccardogar/bookstart2im/assets/136090142/886744aa-a469-40f2-a129-417f70e7904a)

Instead you can try the application here: https://searchbookstart2impact.netlify.app/

**Project Objective**

The goal of this Start2Impact project was to put JavaScript knowledge into practice by developing an application that encourages book reading through the external Open Library service.

**Technical Requirements**

The application meets the following technical requirements:

It features a simple textbox (Google style) allowing users to search for books in a specific category.
Upon clicking a submit button, the application contacts the Open Library API: https://openlibrary.org/subjects/{category}.json, where {category} is the user input.
After retrieving the book list, the application displays the title and list of authors for each book.
Clicking on a book or a dedicated button reveals the book's description. This functionality is implemented by contacting another Open Library API using the book's key from the previous response.

This is a screenshot ![screenshot](https://github.com/riccardogar/bookstart2im/assets/136090142/886744aa-a469-40f2-a129-417f70e7904a)


**Technologies Used**

HTML5
CSS3
JavaScript (ES6+)
Axios for HTTP requests
Lodash for utility functions

**Features**

Search books by category
Display book titles and authors
View book descriptions
Responsive design for various screen sizes

**How to Use**

Open the application in your web browser.
Enter a book category (e.g., "fantasy", "science", "history") in the search box.
Click the "Submit" button or press Enter.
Browse through the list of books displayed.
Click the "Description" button on any book to view its description.

This is a screenshot ![screenshot](https://github.com/riccardogar/bookstart2im/assets/136090142/886744aa-a469-40f2-a129-417f70e7904a)
