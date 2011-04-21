var TeaParty = {
  welcome: function(lastName, isWoman, isSir) {
    var result = "Hello ";
    isWoman ? result += "Ms. " : isSir ? result += "Sir " : result += "Mr. ";
    return result += lastName;
  }
};