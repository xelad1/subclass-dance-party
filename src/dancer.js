// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.maxofX = $('#floor').width();
  this.maxofY = $('#floor').height();
  this.velocity = 50;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
};

makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    this.move();
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
    this.$node.css(styleSettings);
};

makeDancer.prototype.move = function() {
  var randX = Math.floor((Math.random() * (this.velocity * 2)) - this.velocity);
  var randY = Math.floor((Math.random() * (this.velocity * 2)) - this.velocity);
  this.top  += randY;
  this.left += randX;
  this.top = Math.abs(this.top % this.maxofY);
  this.left = Math.abs(this.left % this.maxofX);
  this.setPosition(this.top, this.left);

}

