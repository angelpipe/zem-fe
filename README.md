# Zemoga FE Challenge

## Folder Structure
  .
  ├── api                   # Folder to expose the /api route on the server, used for json
  ├── bin                   # Folder that stores app executable
  ├── data                  # Folder to store JSON data which is server through the app as an API
  ├── public                # HTML and compiled sources
  ├── src                   # CSS and js source code, HERE'S THE PLACE TO LOOK AT
  ├── package.json
  └── README.md

## How to run

* In a terminal, go to the project folder
* Run `npm i`
* Run `npm start`
* Visit <http://localhost:3000/>

If you want to compile sources, you just need to run `npm run fe-compile`.
Everything was implemented using node scripts.

## Observations

* Pretty basic and vanilla js was intended. First because i think it was
the objective of the test, and second because it was not possible to me
to write more javascript as the comp looks to be wrong (I will explain
later).

* It made no sense to me to create blank pages, so all links were directed
to anchors.

* Sass and js processing were used. Node hooks were implemented for scaffolding.
If you want to compile sources, you just need to run `npm run fe-compile`.

* Even if it was said on the exercise to use a desktop first approach, i decided
to use a mobile first approach. It is the common way to do.

* I'm not a designer so I excuse myself if breakpoints are not pretty.

* CSS properties chosen order is alphabetic.

* Project was structured as a real life example, even if at some points length of
code does not justify that.

## About the problems with comp

I decided not to do most of the js tasks the exercise mentions. Mainly because
comp does not correspond to them. I will list them here:

* The user can select either thumb up or thumb down button on each of the boxes (when the button is selected, a white
border is displayed as featured in the comp)

There are no thumbs up/down buttons in the middle boxes nor white border. The only reference to up/down in the boxes
on the comp are the percentage bars and a little marker which i guess indicates the vote the user already gave. It looks
like the module was intended to show closed votings and wasn't intended to actually vote so it is really confusing.

* Once the user clicks on the "Vote now” button, a message is displayed saying “Thank you for voting!” as well as a vote
again button to vote again.

There's no "Vote now" button on the comp.

* Percentage bars change depending on the up/or downs votes. Think on a way to persist the current votes so if the page is
refreshed the data is not lost. (could be local in the browser or server side if you have those skills)

Without voting i cannot change the var, so i left static values on the JSON

I really looked deeply on the PSD comp, but i wasn't able to find the components the test mentions,
if that's not the right comp and you have an updated one that would be great. The long work is already done
and the voting thing sounds fun. Thank you so much.
