describe("villainDancer", function() {

  var villainDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    villainDancer = new makeVillainDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(villainDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(villainDancer, "step");
      expect(villainDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(villainDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(villainDancer.step.callCount).to.be.equal(2);
    });
  });
});
