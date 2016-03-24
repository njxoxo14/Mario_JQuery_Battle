// TODO: Change these values to your own images & colors!
var BACKGROUND_IMG = "images/background.jpg";
var HERO_IMG = "images/Megaman.png";
var FINISH_IMG = "images/finish.png";
var TEXT_COLOR = "purple";


// Stores the hero sprite position.
var hero = {
  speed: 50, // Movement speed in pixels per second.
  x: 0,
  y: 0
};

// Stores the finish line sprite position.
var finish = {
  x: 0,
  y: 0,
  width: 32,
  height: 32
};

// Store how many times the hero crossed the finish line.
var wins = 0;



// Resets the hero and finish line positions.
function reset() {
  var width = $("#canvas").width();
  var height = $("#canvas").height();

  // Position the hero in the middle.
  hero.x = width / 2;
  hero.y = height / 2;

  // TODO: Position the finish line somewhere random.
  finish.x = 0;
  finish.y = 0;
};




// Modifies sprite positions and check if hero has crossed the finish.
function update(canvas, duration) {
  if (38 in keysPressed) { // UP ARROW
    hero.y -= hero.speed * duration;
  }
  if (40 in keysPressed) { // DOWN ARROW
    // TODO: Handle down arrow
  }
  if (37 in keysPressed) { // LEFT ARROW
    // TODO: Handle left arrow
  }
  if (39 in keysPressed) { // RIGHT ARROW
    // TODO: Handle right arrow
  }

  // TODO: Is megaman at the finish line? (modify 'false' -- DUH)
  // THINK: is the hero's (x, y) within the finish line's
  // (x, y, x + width, y + height)?
  if (false) {
    wins++;
    canvas.fillText("YOU WON!", 50, 100);
    reset();
  }
};

// Stores which keys are currently pressed.
var keysPressed = {};




// Draws all sprites and text on the canvas.
function render(canvas) {
  if (bgImage != null) {
    canvas.drawImage(bgImage, 0, 0);
  }

  if (heroImage != null) {
    // TODO: Draw the heroImage at hero.x, hero.y.
  }

  if (finishImage != null) {
    // TODO: Draw the finishImage at finish.x, finish.y.
  }

  // TODO: Try a different text color or font.
  canvas.fillStyle = TEXT_COLOR;
  canvas.font = "24px Helvetica";
  canvas.textAlign = "left";
  canvas.textBaseline = "top";
  canvas.fillText("Number of times you've won: " + wins, 32, 32);
};

// Stores the background, hero, and finish line sprite images.
var bgImage = null;
var heroImage = null;
var finishImage = null;



// The animation loop! (DO NOT MODIFY)
function main(canvas, then) {
  var now = Date.now();
  var delta = now - then;

  update(canvas, delta / 1000);
  render(canvas);

  var requestAnimationFrame = window.requestAnimationFrame ||
                              window.webkitRequestAnimationFrame ||
                              window.msRequestAnimationFrame ||
                              window.mozRequestAnimationFrame;
  requestAnimationFrame(function() {
    main(canvas, now);
  });
};



$(document).ready(function() {
  // Set up key event handlers.
  $(document).keydown(function(e) {
    keysPressed[e.keyCode] = true;
  });
  $(document).keyup(function(e) {
    delete keysPressed[e.keyCode];
  });

  // Load sprite images.
  loadImage(BACKGROUND_IMG, function(img) {
    bgImage = img;
  });
  loadImage(HERO_IMG, function(img) {
    heroImage = img;
  });
  loadImage(FINISH_IMG, function(img) {
    finishImage = img;
  });

  // Let's play this game!
  reset();
  var canvasContext = $("#canvas").get(0).getContext("2d");
  main(canvasContext, Date.now());
});



// Load an image and returns it in the given callback.
function loadImage(url, callback) {
  $("<img src='" + url + "'>").load(function() {
    callback($(this).get(0));
  });
}
