
var makeProjectile = function(top, left, velocity, imgURL){
  this.$node = $('<img src="' + imgUrl + '"/>');

  this.step();
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.maxofX = $('#floor').width();
  this.maxofY = $('#floor').height();
  this.velocity = 50;
};

makeProjectile.prototype.step = function(){
    this.move();
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


makeProjectile.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
};

makeProjectile.prototype.move = function() {
  var randX = Math.floor((Math.random() * (this.velocity * 2)) - this.velocity);
  var randY = Math.floor((Math.random() * (this.velocity * 2)) - this.velocity);
  this.top  += randY;
  this.left += randX;
  this.top = Math.abs(this.top % this.maxofY);
  this.left = Math.abs(this.left % this.maxofX);
  this.setPosition(this.top, this.left);

}

