var makeVillainDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.prepend($('<img src="./images/joker3.gif" />').height(150).width(150));
  this.$node.mouseover(this.doPower.bind(this));
  this.velocity = 1;
  villains.push(this);
};
makeVillainDancer.prototype = Object.create(makeDancer.prototype);

makeVillainDancer.prototype.step = (function(step) {


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

})(makeVillainDancer.prototype.step);

makeVillainDancer.prototype.doPower = function() {
  // var approxY = villains[this];
  // var approxX = Math.floor(this.left/window.approxFactor);
  // var approx = window.approxPos[approxX][approxY];
  // console.log(approx);
  // var that = this;
  // _.each(approx, function(dancer){
  //   if(dancer.constructor !== makeVillainDancer){
  //     var setX = (dancer.left - that.left) * 10;
  //     var setY = (dancer.top - that.top) * 10;
  //     console.log(setX, setY);
  //     dancer.top += setY;
  //     dancer.left += setX;
  //     dancer.setPosition(dancer.top + setY, dancer.left + setX);
  //   }
  // });
  //shoot some lasers


};

makeVillainDancer.prototype.constructor = makeVillainDancer;


