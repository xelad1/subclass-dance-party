$(document).ready(function(){
  window.dancers = [];
  window.villains = [];
  window.approxFactor = 100;
  var linedUp = false;
  $('.lineupButton').on('click', function(e){
    if(!linedUp) {
        lineUp();
        linedUp = true;
    } else {
        revertLineUp();
        linedUp = false;
    }
  });
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    console.log(dancerMakerFunctionName)
    console.log(dancerMakerFunction)
    // make a dancer with a random position
    var height = $("#floor").height() * Math.random();
    var width = $("#floor").width() * Math.random();
    var timeInterval = Math.random() * 1000 + 500;
    console.log(height, width, timeInterval);
    var dancer = new dancerMakerFunction(height, width, timeInterval);
    $('#floor').append(dancer.$node);
    dancers.push(dancer);
  });
});

