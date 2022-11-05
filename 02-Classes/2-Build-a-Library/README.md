### Build a Library

In this project I have created a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

##### Book
<ul>
    <li>Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty). </li>
    <li>Getters: all properties have a getter</li>
    <li>Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating() </li>
</ul>

##### Movie
<ul>
    <li>Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty) </li>
    <li>Getters: all properties have a getter</li>
    <li>Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating() </li>
</ul>

##### CD
<ul>
    <li>Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)</li>
    <li>Getters: all properties have a getter</li>
    <li>Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()</li>
</ul>
