var lineUp = function(){
  var dancers = window.dancers;
  var interval = $('#floor').height() / dancers.length;
  console.log(interval, dancers.length);
  dancers = _.shuffle(dancers);
  _.each(dancers, function(dancer, ind){
    dancer.velocity = 0;
    dancer.left = 100;
    dancer.top = ind * interval;
  });

};

var revertLineUp = function(){
  _.each(dancers, function(dancer, ind){
    dancer.velocity = 100;
    dancer.top = $("#floor").height() * Math.random();
    dancer.left = $("#floor").width() * Math.random();
  });
}
