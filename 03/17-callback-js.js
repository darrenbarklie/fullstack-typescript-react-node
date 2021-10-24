// Asyncronous programming provides faster performance because
// statements can run simultaneously without having to wait for
// each other.

// Callbacks are a core feature of NodeJS

function letMeKnowWhenComplete(size, callback) {
  var reducer = 0;
  for (var i = 1; i < size; i++) {
    reducer = Math.sin(reducer * i);
    console.log(i);
  }
  callback();
}

letMeKnowWhenComplete(1000, function () {
  console.log("We done here.");
});

// => 1
// => 2
// => 3
// => ...
// => 999
// => We done here.

// The function takes two parameters, the second being
// the callback function, executed when the math is complete

// Technically a callback is not actually asynchronous.

// However it does provide capabilities that are effectively
// the same in that secondary work, the callback, is done only
// once the primary is complete without needing to wait or poll.
