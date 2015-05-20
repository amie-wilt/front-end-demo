/**********************************
 * Magic School Bus reminder
 * Classifications:
 *  scalene: all three sides are different
 *  isosceles: two of its sides are equal
 *  equilateral:  all three sides are equal
 *
 * A Valid Triangle exists when:
 *  a + b > c
 *  a + c > b
 *  b + c > a
 **********************************/


describe('TriangleClassifier', function () {
    it('exists', function () {
        expect(TriangleClassifier).toBeDefined();
    });

    it('classifies as scalene 4,3,2', function () {
        var result = new TriangleClassifier().classify(4, 3, 2);
        expect(result).toEqual('scalene');
    });

    it('classifies as equilateral, 2, 2, 2', function () {
        var result = new TriangleClassifier().classify(2, 2, 2);
        expect(result).toEqual('equilateral');
    });

    it('classifies as isosceles, 2, 2, 3', function () {
        var result = new TriangleClassifier().classify(2, 2, 3);
        expect(result).toEqual('isosceles');
    });

    // What happens when a side is 0?

    it('not a real triangle, 2, 0, 1', function() {
        var result = new TriangleClassifier().classify(2, 0, 1);
        expect(result).toEqual('not a real triangle')
    });
    // What about a negative side?

    it('')
});

