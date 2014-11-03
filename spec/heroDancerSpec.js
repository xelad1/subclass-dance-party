describe("heroDancer", function() {

  var heroDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    heroDancer = new makeHeroDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(heroDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(heroDancer, "step");
      expect(heroDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(heroDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(heroDancer.step.callCount).to.be.equal(2);
    });
  });
});
