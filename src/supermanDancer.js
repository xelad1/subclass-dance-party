var makeSupermanDancer = function(top, left, timeBetweenSteps){
  makeHeroDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.prepend($('<img src="./images/superman.gif" />').height(150).width(150));
  this.$node.mouseover(this.doPower.bind(this));

};
makeSupermanDancer.prototype = Object.create(makeHeroDancer.prototype);

makeSupermanDancer.prototype.step = (function(step) {

  return function(){
    // call the old version of step at the beginning of any call to this new version of step
    step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    if(typeof this.$node === 'undefined'){
      // debugger;
    }
    // console.log(this.$node)
    // console.log(this.$node.toggle);
    if(Math.random() < 0.10){
      this.doPower();
    }
  };

})(makeSupermanDancer.prototype.step);

makeSupermanDancer.prototype.doPower = function() {
  var velocity = 2;
  var randDegree = Math.floor(Math.random()* 360);
  var xVelocity = velocity * Math.cos(randDegree);
  var yVelocity = velocity * Math.sin(randDegree);
  var newProj = new makeProjectile(this.top, this.left, xVelocity, yVelocity, './images/laser.gif', 40, 10);
  this.projectiles.push(newProj);


};

makeSupermanDancer.prototype.constructor = makeHeroDancer;


