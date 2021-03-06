var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  console.log(arguments);
  makeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.step = (function(step) {

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
    this.$node.toggle();
  };

})(makeBlinkyDancer.prototype.step);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


