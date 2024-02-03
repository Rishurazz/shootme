 ### BubbleGame

This is a simple bubble popping game built using HTML, CSS, and JavaScript. The game features a panel with four elements: Hit, Timer, Score, and Reset. The objective of the game is to pop as many bubbles as possible within the time limit.

#### Prerequisites

To run this game, you will need the following:

* A modern web browser
* A text editor (e.g., Visual Studio Code)
* Basic knowledge of HTML, CSS, and JavaScript

#### Setup

1. Clone the repository to your local machine.
2. Open the `index.html` file in your text editor.
3. Save the file.

#### Code Overview

The `index.html` file contains the HTML markup for the game. The `style.css` file contains the CSS styles for the game. The `script.js` file contains the JavaScript code for the game.

#### HTML Markup

The HTML markup for the game is relatively simple. The main element is the `#main` div, which contains the game panel. The game panel is divided into two sections: the top section (`#ptop`) and the bottom section (`#pbtm`).

The top section of the game panel contains four elements:

* **Hit:** This element displays the number of bubbles that have been popped.
* **Timer:** This element displays the remaining time in seconds.
* **Score:** This element displays the player's score.
* **Reset:** This element resets the game.

The bottom section of the game panel is where the bubbles will be displayed.

#### CSS Styles

The CSS styles for the game are also relatively simple. The main styles are used to position the elements on the game panel and to give them their appearance.

#### JavaScript Code

The JavaScript code for the game is responsible for the game logic. The main functions in the JavaScript code are:

* **`createBubbles()`:** This function creates the bubbles and adds them to the game panel.
* **`startTimer()`:** This function starts the timer.
* **`updateTimer()`:** This function updates the timer display.
* **`checkCollisions()`:** This function checks for collisions between the bubbles and the player's cursor.
* **`popBubble()`:** This function pops a bubble when it is clicked.
* **`resetGame()`:** This function resets the game.

#### How to Play

// how to play
To start playing, simply click on an bubble within the game panel with same number value as in hit section. Hit number will change after every correct click and your score will improve. After timer stop it will show your current score and highscore.