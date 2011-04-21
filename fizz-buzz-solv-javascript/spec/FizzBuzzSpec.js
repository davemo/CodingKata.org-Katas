describe("fizzBuzz", function() {
  
  var sut = fizzBuzz;        
        
  describe("a number divisible by 3", function() {
    it("returns the string 'fizz'", function() {
      result = sut(3);
      expect(result).toBe('fizz');
    });
  });
  
  describe("a number divisible by 5", function() {
    it("returns the string 'buzz'", function() {
      result = sut(5);      
      expect(result).toBe('buzz');
    });
  });

  
});