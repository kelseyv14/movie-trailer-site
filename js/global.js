// 1. Make a class called Trailer that extends Movie
class Trailer extends Movie {

    // 2. Inside the class, add a constructor function that takes two arguments, a name and an id
    constructor(movieTitleName, movieID) { 
        // 3. Call the parent constructor function using the super function
         super(movieTitleName, movieID);
        // 4. Assign a name and id instance property to the incoming name and id arguments
        this.name = movieTitleName;
        this.id = movieID;

        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()
    }
}

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument

var hamletTrailer = new Trailer ('Hamlet 2', 'FCQr7x9WtJ0' );
    // hamletTrailer.movieTitleName = 'Hamlet 2';
    // hamletTrailer.movieID = 'FCQr7x9WtJ0';

var jackieTrailer = new Trailer ('Jackie', 'g9pW3B8Ycc4');
    // jackieTrailer.movieTitleName = 'Jackie';
    // jackieTrailer.movieID = 'g9pW3B8Ycc4';

var masterTrailer = new Trailer ('The Master', 'DaPYuUpNEAo');
    // masterTrailer.moveTitleName = 'The Master';
    // masterTrailer.movieID = 'DaPYuUpNEAo';

var parisTrailer = new Trailer ('Paris is Burning', '78TAbjx43rk');
    // parisTrailer.moveTitleName = 'Paris is Burning';
    // parisTrailer.movieID = '78TAbjx43rk';    



