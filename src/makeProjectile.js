
var makeProjectile = function(top, left, velocityX, velocityY, imgURL, sizeX, sizeY){
  this.$node = $('<img class="projectile" src="' + imgURL + '"/>');
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.maxofX = $('#floor').width();
  this.maxofY = $('#floor').height();
  this.velocityX = velocityX;
  this.velocityY = velocityY;
  if(sizeX){
    this.$node.width(sizeX);
  }
  if(sizeY){
    this.$node.width(sizeY);
  }
  $('#floor').prepend(this.$node);
  this.step();
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
  this.top  += this.velocityY;
  this.left += this.velocityX;
  this.setPosition(this.top, this.left);
};

makeProjectile.prototype.remove = function() {
  this.$node.remove();
};


