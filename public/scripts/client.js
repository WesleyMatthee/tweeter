//This readies jQuery for client.js 
$(document).ready(function() {
  // Fake data taken from initial-tweets.json
  const tweets = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];




  const createTweetElement = function(tweetData) {
    let $tweet = $(` 
    <article class="tweet">
        <header class="user">
          <div class="avatar-img">
            <img src="${tweetData.user.avatars}">
            <p><b>${tweetData.user.name}</b></p>
          </div>
            <p><b>${tweetData.user.handle}</b></p>
        </header>
        <p>${tweetData.content.text}</p>
        <hr/>
        <footer >
          <div>${tweetData.created_at}</div>
          <div class="icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
      `);
    return $tweet;
  };

 
  // takes return value and appends it to the tweets container
  const renderTweets = function(tweets) {
    // loops through tweets
    for (let tweet of tweets) {
      $('#tweets-container').append(createTweetElement(tweet));
      // calls createTweetElement for each tweet
    }
  };



  renderTweets(tweets);

});
//Keep all code wrapped inside.