Micro Movie Management System

You have to make a micro movie management system with the details listed below. Note that UI is not important but the functionality must be completely implemented. Must use Redux, React-hooks & React-Router. Remember not to use a storage mechanism like local storage for permanent storing data. Make your code reusable, clean and readable. Performance optimization should be done.
Host this code in your github account and provide the repository link.


Screen 1: Movie list with year filter:

In this screen you will have to fetch a movie list using the API
http://www.omdbapi.com/?apikey=32395055&type=movie&s=bad
In the response of this API there will be a key named Response which will be true if there are results. If it comes false, then you will have to print the Error keys’s value on the screen
You will have to provide filter option of year which will be a dropdown from the year 2000 - 2020 and you will have to pass extra parameter y like this in the API
http://www.omdbapi.com/?apikey=32395055&type=movie&s=bad&y=2000
You have to display Title, Year and Poster keys on this screen for an individual movie.
Each movie will have a checkbox 
It will contain a button named Add to my list which when clicked, the checked movies will be added to my list.
It will also contain a button named Add to my watched list which when clicked, the selected movies will be added to my list with the watched state marked.

Screen 2: My List:

This will contain the list of the movies which have been added to my list from screen 1 with watched state unmarked.
Each movie will have a checkbox
It will also contain a button called Remove from my list which will remove the checked movies from my list.
It will also contain a button named Add to my watched list which when clicked, the selected movies will be added to my list with the watched state marked.
The screen will have a toggle which when toggled, you can switch view to movies of my list with the watched state marked.
In the watched list, the button Add to my watched list will not be there as it is already watched list view.
When the view is changed to the watched list, it will contain a button called Remove from my watched list which will change the watched state of the movies from my list.