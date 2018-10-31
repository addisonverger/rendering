
function renderTweets(tweets) {
    return `<div style="display= flex; flex-direction: column">` +
    tweets.map(tweetCard).join('') + `</div>`;
}

function tweetCard(tweetData) {
  return `
    <div style="padding: 20px">
      <div style="display: flex; flewx-direction: row">
        <img src="${tweetData.user.profilePic}" style="width: 50px; height: 50px; margin-right: 10px"/>
        <div style="display: flex; flex-direction: column">
          <div style="display: flex; flex-direction: row; margin: 0">
            <p style="font-weight: bold; margin: 0">${tweetData.user.username}</p>
            ${verified(tweetData.user.isVerified)}
          </div>
          <p style="margin: 0; font-size: 80%; color: #868889">${tweetData.user.handle}</p>
        </div>
      </div>
      <p style="margin-top: 10px; font-size: 150%">${tweetData.text}</p>
      <hr />
      <div style="display: flex; flex-direction: row; font-size: 80%">
        <div>Replies</div>
        <div style="margin-left: 5px; margin-right: 10px">${tweetData.replies}</div>
        <div>Retweets</div>
        <div style="margin-left: 5px; margin-right: 10px">${tweetData.retweets}</div>
        <div>Likes</div>
        <div style="margin-left: 5px; margin-right: 10px">${tweetData.likes}</div>
        <div>E-mail</div>
      </div>
    </div>
  `
}

function verified(isVerified) {
  if (isVerified === true) {
    return `<img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg" style="width: 15px; height: 15px; margin: 5px"/>`
  }
  else {
    return '';
  }
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}
