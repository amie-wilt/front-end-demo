var TriangleClassifier = function() {

  this.classify = function(a,b,c) {
    if(a == 0 || b == 0 || c == 0) {
      return "not a real triangle";
    } else if(a == b && b == c) {
      return "equilateral";
    } else if(a == b || b == c || a == c) {
      return "isosceles";
    }
    return "scalene";
  };
};
