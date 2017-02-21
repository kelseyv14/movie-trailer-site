// 1. Make a class called Trailer that extends Movie
class Trailer extends Movie {

    // 2. Inside the class, add a constructor function that takes two arguments, a name and an id
    constructor(movieTitleName, movieID) { 
        // 3. Call the parent constructor function using the super function
         Super(movieTitleName, movieID);
        // 4. Assign a name and id instance property to the incoming name and id arguments
        this.movieTitleName = 'title'
        this.movieID = 'youtube ID'

        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()
    }
}

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument

var hamletTrailer = movieOne (moveTitleName, movieID);
    hamletTrailer.movieTitleName = 'Hamlet 2';
    hamletTrailer.movieID = 'FCQr7x9WtJ0';

var jackieTrailer = movieTwo (movieTitleName, movieID);
    jackieTrailer.movieTitleName = 'Jackie';
    jackieTrailer.movieID = 'g9pW3B8Ycc4';

var masterTrailer = movieThree (movieTitleName, movieID);
    masterTrailer.moveTitleName = 'The Master';
    masterTrailer.movieID = 'DaPYuUpNEAo';

var parisTrailer = movieFour (movieTitleName, movieID);
    parisTrailer.moveTitleName = 'Paris is Burning';
    parisTrailer.movieID = '78TAbjx43rk';    

    

