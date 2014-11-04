var makeBatmanDancer = function(top, left, timeBetweenSteps){
  makeHeroDancer.apply(this, arguments);
  this.$node.prepend($('<img src="./images/batman.gif" />').height(150).width(150));
  var that;
  this.sound = $('#nanana');
  this.$node.mouseover(function(){
      that.doPower.call(that);
      that.sound.play();
    }
  );
};
makeBatmanDancer.prototype = Object.create(makeHeroDancer.prototype);

makeBatmanDancer.prototype.step = (function(step) {

  return function(){
    step.call(this);
    if(Math.random() < 0.15){
      this.doPower();
    }
  };

})(makeBatmanDancer.prototype.step);

makeBatmanDancer.prototype.doPower = function() {
  var velocity = 2;
  var randDegree = Math.floor(Math.random()* 360);
  var xVelocity = velocity * Math.cos(randDegree);
  var yVelocity = velocity * Math.sin(randDegree);
  var newProj = new makeProjectile(this.top, this.left, xVelocity, yVelocity, './images/bat.gif');
  this.projectiles.push(newProj);

  //shoot some lasers


};

makeBatmanDancer.prototype.constructor = makeHeroDancer;


