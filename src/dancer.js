// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.maxofX = $('#floor').width();
  this.maxofY = $('#floor').height();
  this.velocity = 100;
  this.prevApprox = undefined;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.step();
};

makeDancer.prototype.step = function(){


    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    this.move();
    // if(this.prevApprox){
    //   var approxArr = window.approxPos[this.prevApprox[0]][this.prevApprox[1]];
    //   // approxArr.remove(this)
    //   var that = this;
    //   _.remove(approxArr, function(el){
    //     return el === that;
    //   });
    //   // console.log(approxArr)
    //   // console.log(this.prevApprox)
    // }
    // var approxY = Math.floor(this.top/window.approxFactor);
    // var approxX = Math.floor(this.left/window.approxFactor);
    // this.prevApprox = [approxX, approxY];
    // if(!window.approxPos[approxX]){
    //   window.approxPos[approxX] = [];
    // }
    // if(!window.approxPos[approxX][approxY]){
    //   window.approxPos[approxX][approxY] = [];
    // }
    // window.approxPos[approxX][approxY].push(this);
    // if(window.approxPos[approxX][approxY].length > 1){
      // console.log(window.approxPos[approxX][approxY])
    // }
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.animate(styleSettings, 500);
};

makeDancer.prototype.move = function() {
  var randX = Math.floor((Math.random() * (this.velocity * 2)) - this.velocity);
  var randY = Math.floor((Math.random() * (this.velocity * 2)) - this.velocity);
  this.top  += randY;
  this.left += randX;
  this.top = Math.abs(this.top % this.maxofY);
  this.left = Math.abs(this.left % this.maxofX);
  this.setPosition(this.top, this.left);

};

makeDancer.prototype.inBounds = function(x, y) {
  if(x < 0 && x > this.maxofX && y < 0 && y > this.maxofY) {
    console.log(x, this.maxofX, y, this.maxofY);
    return true;
  } else {
    return false;
  }
};

