var makeHeroDancer = function(top, left, timeBetweenSteps){
  this.projectiles = [];
  makeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
makeHeroDancer.prototype = Object.create(makeDancer.prototype);

makeHeroDancer.prototype.step = (function(step) {

  return function(){
    // call the old version of step at the beginning of any call to this new version of step
    step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    if(typeof this.$node === 'undefined'){
      // debugger;
    }
    var that = this;
    _.each(this.projectiles, function(element) {
      if(!that.inBounds(element.left, element.top)) {
        element.remove();
      }
    });
    // console.log(this.$node)
    // console.log(this.$node.toggle);
    this.doPower();
  };

})(makeHeroDancer.prototype.step);

makeHeroDancer.prototype.doPower = function() {

  //shoot some lasers


};



makeHeroDancer.prototype.constructor = makeHeroDancer;


