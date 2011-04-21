describe("fizzBuzz", function() {
  
  var sut = fizzBuzz;        
        
  describe("a number divisible by 3", function() {
    
    it("returns the string 'fizz'", function() {
      result = sut(3);
      expect(result).toBe('fizz');
    });
    
  });

  
});