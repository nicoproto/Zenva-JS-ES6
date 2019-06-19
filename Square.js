// The 'extends' makes Square inheritate GeometricShape properties
class Square extends GeometricShape {
  constructor(edges) {
    // 'super' calls the method from the GeometricShape
    super(edges);
  }

  area () {
    // calculate shape area
  }
}
