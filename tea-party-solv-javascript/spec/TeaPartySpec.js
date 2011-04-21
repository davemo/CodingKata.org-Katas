describe("TeaParty", function() {
  
  var sut, result;
  sut = TeaParty.welcome;
  
  describe("welcoming a woman", function() {
    it("should include the 'Ms.' prefix", function() {
        result = sut("Austen", true, false);
        expect(result).toContain("Ms.");
    });
  });
  
  describe("welcoming a man", function() {
    it("should include the 'Mr.' prefix", function() {
      result = sut("Baldwin", false, false);
      expect(result).toContain("Mr.");
    });
  });
  
  describe("welcoming someone who has been knighted", function() {
    it("should include the 'Sir' prefix", function() {
      result = sut("Newton", false, true);
      expect(result).toContain("Sir");
    });
  });
  
});