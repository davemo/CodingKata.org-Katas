var TeaParty = {
  welcome: function(lastName, isWoman, isSir) {
    var result;
    isWoman ? result = "Ms." : result = "Mr.";
    return result;
  }
};