describe('square', function() {
    describe('core functionality', function() {
        it('should be a defined function', function() {
            expect(typeof square).toBe('function');
        });
        it('should return a number when passed a number', function() {
            expect(typeof square(2)).toBe('number');
        });
        it('should return 4 when passed 2', function() {
            expect(square(2)).toBe(4);
        });
        it('should return .25 when passed .5', function() {
            expect(square(.5)).toBe(.25);
        });
        it('should return ' + (randomPositiveNumber * randomPositiveNumber) + ' when passed ' + randomPositiveNumber, function() {
            expect(square(randomPositiveNumber)).toBe(randomPositiveNumber * randomPositiveNumber);
        });
        it('should return 1 when passed 1', function() {
            expect(square(1)).toBe(1);
        });
        it('should return 1 when passed -1', function() {
            expect(square(-1)).toBe(1);
        });
        it('should return 0 when passed 0', function() {
            expect(square(0)).toBe(0);
        });
        it('should return false when passed null', function() {
            expect(square(null)).toBe(false);
        });
        it('should return false when passed a non-numeric string', function() {
            expect(square("Bob")).toBe(false);
        });
        it('should return false when passed a boolean', function() {
            expect(square(true)).toBe(false);
        });
        it('should return false when passed an array', function() {
            expect(square(exampleArray)).toBe(false);
        });
        it('should return false when passed an object', function() {
            expect(square(exampleObject)).toBe(false);
        });
        it('should return false when called with no arguments', function() {
            expect(square()).toBe(false);
        });
    });
});