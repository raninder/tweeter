
//load tweets from specified url

const loadTweets = function() {
	const url = "/tweets";
	$.ajax({
					url: url,
					method: 'GET',

			})
			.then((results) => {
					renderTweets(results);
			})
}

//function to create a new tweet and add it to tweets container

const renderTweets = function(tweets) {

	// making tweets container empty before adding a new tweet so that when we load tweets, there is single copy of tweets
	$('.tweetContainer').empty();

	for (user of tweets) {
			let $tweetData = createTweetElement(user);
			$('.tweetContainer').prepend($tweetData);
	}

}

const createTweetElement = function(tweetData) {

	//time when tweet was created (e.g.10 days ago)
	const time = timeago.format(tweetData.created_at);

	//escaping text input for any script tag in tweet
	const safeHTML = `${escape(tweetData.content.text)}`;

	//render tweets data
	const $tweet = $(`<article class="art-tweet">

							<header>
									<i class="far fa-user"></i>
									<span> ${tweetData.user.name}</span>
									<span id="at-rate"> ${tweetData.user.handle}</span>
							</header>
							<div>
									<p>${safeHTML}</p>
							</div>
							<footer>
							${time};
									<span id="icons">
				<i class="far fa-flag"></i>
				<i class="fas fa-retweet"></i>
				<i class="far fa-heart"></i>
			</span>
							</footer>
					</article>`);

	return $tweet;
}

module.exports= {loadTweets};