# Haiku checker and generator

##### By _Molly Donegan, David Jandron and Asia Kaplanyan_

#### _Description_

_A web application that checks if your poem is a Haiku and generates one for you._

## Technologies Used

* JavaScript
* HTML
* Webpack

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Install all Node packages and dependencies with the command ``npm install``_
* _Build the project using webpack with ``npm run build``_
* _Update the "name" of your project in ``package.json``_
* _Package and open the project in your browser using ``npm run start``_
* _Lint JS files in the ``src`` folder with ``npm run lint``_
* _Run tests with Jest using ``npm run test``_

## Known Bugs

* doesn't recognize "-es" and "-ed": counts traines and trained as 2 syllables 
* doesn't work for compound words, when the first word ends with "e": counts something as 3 syllables

## License

* _MIT_

Copyright (c) _2023_ _Molly Donegan, David Jandron and Asia Kaplanyan_
