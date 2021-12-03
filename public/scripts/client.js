$(document).ready(function() {
    loadTweets();

    //eventlistener for submit(tweet) button
    $("#tweetform").submit(function(event) {

        // prevent from submitting a form
        event.preventDefault();

        //create a URL encoded text string for transmitting like hello%20user
        const str = $(this).serialize();

        //length of input text in tweet text area
        const currentLength = $('#textarea').val().length;

        //error message initially hidden
        $("#error").hide();

        
        //ajax request for submitting and loading tweets
        const url = "/tweets";
        if (currentLength>0 && currentLength <= 140) {
        $.ajax({
                url: url,
                method: 'POST',
                data: str

            })
            .then((results) => {
                loadTweets();

                //clear text area once tweet submitted
                $('#textarea').val('');
                $('#counter').val(140);
            })
        }
        else if(currentLength <= 0) {
            $("#error").show().html("No Input");
        }
        else {
            $("#error").show().html(" Characters limit Exceeded");
        }

        });
    });




