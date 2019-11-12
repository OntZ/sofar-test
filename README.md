# Sofar frontend tech test

## Setup and running

To install dependencies and start please run the following commands

`npm install -g yarn` if you don't have it

`yarn install`

`yarn start`

The app will run on localhost:3000

## Alternatively [see it working here](https://ontz.github.io)
Please could you allow origin * on your staging API (CORS) for a while if you want to see it live. Otherwise it should just work from localhost. Please feel free to get in touch for any clarifications.


## what could still be added
* change page title to something relevant, not React App
* nicer imports (no ../../...)
* maybe make `.flex-center-content` class in index.css a reusable styled component agnostic of tag type (not sure if possible, didn't have time to check)
* learn styled-components properly and use nice inheritance models
* type autocomplete `selected` param of valueChanged function more nicely (I reused the code for the autocompletes from something else I worked on in the past to save time... at runtime `selected` actually an array, not a string)
* figure out how to make the autocompletes rerender when the filters are reset without the nasty key hack
* add "renders without crashing" tests everywhere
* mock test API calls
* test rendering result snapshots maybe, it's not particularly a practice of mine
* dockerize the app

I must mention it's my first time using hooks and styled-components so I'm unaware of popular best practices. I've never had commercial experience with them so I've taken the opportunity to learn a bit.