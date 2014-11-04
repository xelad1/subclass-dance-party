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
      // console.log(element.left, element.top, !that.inBounds(element.left, element.top))
      if(!that.inBounds(element.left, element.top)) {
        element.remove();
      }
    });
    _.each(villains, function(villain){
      var distance = Math.sqrt(Math.pow(villain.top - that.top, 2) + Math.pow(villain.left - that.left, 2));
      if(distance < 100){
        var topDelta = that.top + 10*(that.top-villain.top);
        var leftDelta = that.left + 10*(that.left - villain.left);
        that.top = topDelta;
        that.left = leftDelta;
        that.setPosition(topDelta, leftDelta);
      }
    });
  };

})(makeHeroDancer.prototype.step);

makeHeroDancer.prototype.doPower = function() {

  //shoot some lasers


};



makeHeroDancer.prototype.constructor = makeHeroDancer;


