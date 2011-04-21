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
  
  describe("a number divisible by both 3 and 5", function() {
    it("returns the string 'fizzbuzz'", function() {
      result = sut(15);
      expect(result).toBe('fizzbuzz');
    });
  });
  
  describe("a number not divisible by 3 or 5", function() {
    it("returns the number", function() {
      result = sut(4);
      expect(result).toBe(4);
    });
  });

  
});