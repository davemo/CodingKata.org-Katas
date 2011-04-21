describe("TeaParty", function() {
  
  var sut, result;
  sut = TeaParty.welcome;
  
  describe("welcoming a woman", function() {
    
    it("should include the 'Ms.' prefix", function() {
        result = sut("Austen", true, false);
        expect(result).toContain("Ms.");
    });

  });
  
});