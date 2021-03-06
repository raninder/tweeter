# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

## Features:
1. Tweet form dynamically update a number of characters in entered text. By default, the maximum number of chars is 140.
2. If a number of entered characters is not between 1 and 140 an error message will be displayed when trying to submit a tweet.
3. After each tweet submission a new tweet will apper on top of existing tweets.
4. Web-site is responsive and will change layout if screen width is below treshold.

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance


## Final Product

- Main page that displays user, a tweet form and past tweets 
!["Main"](docs/main.png)

- User can create new tweet of upto 140 characters.
!["New-Tweet"](docs/new-tweet.png)

- Displays error if user does not enter text or input>140 characters
!["Error"](docs/error.png)

- Provides view on mobile device.
!["Mobile"](docs/mobile.png)


