/*--- Step 1 - Defining global variables; object and functions---*/

var questions = [
    //Question 1
    {
        questionText: 'When did the predessor to the modern guitar first appear?',
        questionChoices: ['The 11th Century', 'The 16th Century', 'The 19th Century'],
        questionCorrectChoice: 1,
        correctDetails: 'The baroque guitar, the predessor most closely related to the modern guitar appeared in the middle of the 16th centrury.'
    },

    //Question 2
    {
        questionText: 'What is the smallest guitar in the world?',
        questionChoices: ['Nanoguitar', 'Erlwine Laser', 'PalmGuitar'],
        questionCorrectChoice: 0,
        correctDetails: 'The smallest guitar is 10 micrometers long and constructed out of silicon in a Cornell University labratory.'
    },

    //Question 3
    {
        questionText: 'How long is the world\'s largest playable guitar in the world?',
        questionChoices: ['4 feet', '26 feet', "43+ feet"],
        questionCorrectChoice: 2,
        correctDetails: 'The world\' s largest playable guitar weighs over 2255 pounds and is 43.5 feet long!'
    },

    //Question 4
    {
        questionText: 'What is the highest recorded price paid for a guitar?',
        questionChoices: ['$900,000.00', '$1,560,000.00', '$2,700,000.00'],
        questionCorrectChoice: 2,
        correctDetails: 'The guitar that fetched the highest price was auctioned off to raise money for the 2004 Asia Tsunami relief charity.'
    },

    //Question 5
    {
        questionText: 'What year was the electric guitar introduced?',
        questionChoices: ['1897', '1925', '1931'],
        questionCorrectChoice: 2,
        correctDetails: 'The first electrically amplified guitar was designed in 1931 by George Beauchamp, the general manager of the National Guitar Corporation, with Paul Barth, who was vice president.'
    },

    //Question 6
    {
        questionText: 'What is the highest string count on a playable guitar?',
        questionChoices: ['12', '42', '88'],
        questionCorrectChoice: 1,
        correctDetails: 'Pikasso is a custom instrumentwith 42 strings that was created for Pat Metheny in 1984'
    },

    //Question 7
    {
        questionText: 'How large is the biggest guitar collection?',
        questionChoices: ['672', '1400', '3000'],
        questionCorrectChoice: 2,
        correctDetails: 'Keith Richards of the Rolling Stones owns more than 3000 guitars.'
    },

    //Question 8
    {
        questionText: 'What is the longest known guitar solo ever played?',
        questionChoices: ['16+ hours', '24+ hours', "43+ hours"],
        questionCorrectChoice: 1,
        correctDetails: 'David DiDonato shredded for a cartilage-melting 24 hours and 55 minutes on stage in 2012.'
    },

    //Question 9
    {
        questionText: 'What is the longest known guitar playing performance?',
        questionChoices: ['24+ hours', '43+ hours', '114+ hours'],
        questionCorrectChoice: 2,
        correctDetails: 'In 2011, David Browne played for 114 hours and six minutes, playing 1374 songs back to back.'
    },

    //Question 10
    {
        questionText: 'What is the record for most guitar strings changed in an hour?',
        questionChoices: ['62', '156', '183'],
        questionCorrectChoice: 2,
        correctDetails: 'Glenn Haworth changed 183 individual strings in just 60 minutes. '
    }
];




/*--- Variables ---*/
var questionNum = 0;
var questionTotal = questions.length;
var correctTotal = 0;


//functions
function displayQuestion() {
    /*--- Display Questions ---*/
    $('#prompt').text(questions[questionNum].questionText);

    /*--- Display Answers ---*/
    $('.answers').empty();
    var totalNumberOfChoices = questions[questionNum].questionChoices.length;
    for (var i = 0; i < totalNumberOfChoices; i++) {
        var buildAnswers = "<input type='radio' class='option' name='option' value=" + i + ">" + questions[questionNum].questionChoices[i] + "<br>";
        $('.answers').append(buildAnswers);
    }

    /*--- Display Question Number out of total --- */
    $('.count').text(questionNum + 1);
    $('.totalCount').text(questionTotal);

};

//STEP 2 - Use functions and triggers
/*--- Hide quiz and result section on load ---*/
$(document).ready(function () {

    $('.quiz-section').hide();
    $('.results-section').hide();

    /*--- On start quiz ---*/

    $('.startButton').click(function () { //start the quiz and show the first question
        $('.results-section').hide();
        $('.intro-section').hide();
        $('.quiz-section').show();
        displayQuestion();
    });

    /*--- After the questions was answered --- */

    $('.quiz-section').on('click', '.option', function () {
        var userAnswer = $("input[class='option']:checked").val();
        var correctAnswer = questions[questionNum].questionCorrectChoice;
        if (userAnswer == correctAnswer) {
            correctTotal++;
        }
        $('#result_msg').append("<h3>Q: " + questions[questionNum].questionText + "</h3>");
        $('#result_msg').append("<h4>A: " + questions[questionNum].correctDetails + "</h4>");

        if ((questionNum + 1) == questionTotal) {
            $('.correctAnswer').text(correctTotal + " out of " + questionTotal);

            $('.quiz-section').hide();
            $('.intro-section').hide();
            $('.results-section').show();
        } else {
            questionNum++;
            displayQuestion();
        }
    });



    /*--- Load the start section from the result section ---*/
    $('.results-section').on('click', '.retryButton', function () {
        $('.intro-section').show();
        $('.quiz-section').hide();
        $('.results-section').hide();
        //reset variables to start quiz again
        currentQuestionNumber = 0;
        totalNumberOfCorrectAnswers = 0;
    });


    //    questionNum++;



    /*--- Display results ---*/

});
