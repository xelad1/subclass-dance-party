var makeBatmanDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.prepend($('<img src="./images/batman.gif" />').height(150).width(150));
};
makeBatmanDancer.prototype = Object.create(makeHeroDancer.prototype);

makeBatmanDancer.prototype.step = (function(step) {

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
    this.doPower();
  };

})(makeBatmanDancer.prototype.step);

makeBatmanDancer.prototype.doPower = function() {

  //shoot some lasers


};

makeBatmanDancer.prototype.constructor = makeHeroDancer;


