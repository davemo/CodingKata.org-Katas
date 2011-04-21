describe("TeaParty", function() {
  
  var sut, result;
  sut = TeaParty.welcome;
  
  describe("welcoming a woman", function() {
    it("should include the 'Ms.' prefix", function() {
        result = sut("Austen", true, false);
        expect(result).toBe("Hello Ms. Austen");
    });
  });
  
  describe("welcoming a man", function() {
    it("should include the 'Mr.' prefix", function() {
      result = sut("Baldwin", false, false);
      expect(result).toBe("Hello Mr. Baldwin");
    });
  });
  
  describe("welcoming someone who has been knighted", function() {
    it("should include the 'Sir' prefix", function() {
      result = sut("Newton", false, true);
      expect(result).toBe("Hello Sir Newton");
    });
  });
  
});