## React Projects Starter APP

Things to Notice :

RemoveTour is defined in App.js because we have made the tours state 
holidng tours data in App.js. 
To remove the tour , we have a function 
RemoveTours()  -> here our param is the id of the tour we  want to remove.
filter() method creates a new array filled with elements that pass a test provided by a function.

so we filter the ids which are not to be removed and make a new array of tours and pass that to setTours state function.

This is then passed to Tours.js as props.
then to Tour.js as props. 