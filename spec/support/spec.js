describe('subtract', function () {

    describe("Core Functionality", function () {

        const firstInt = getRandomIntInclusive(30, 40)
        const secondInt = getRandomIntInclusive(1, 20)

        const thirdInt = getRandomIntInclusive(30, 40)
        const forthInt = getRandomIntInclusive(1, 20)

        it('should be a declared function', function () {
            expect(subtract).toBeDefined();
        });
        it(`should return ${firstInt - secondInt} when passed the arguments (${firstInt},${secondInt})`, function () {
            expect(subtract(firstInt,secondInt)).toBe(firstInt - secondInt);
        });
        it(`should return ${firstInt - forthInt} when passed the arguments ("${firstInt}",${forthInt})`, function () {
            expect(subtract(firstInt.toString(),forthInt)).toBe(firstInt - forthInt);
        });
        it(`should return ${-thirdInt - secondInt} when passed the arguments (${-thirdInt},"${secondInt}")`, function () {
            expect(subtract((-thirdInt),secondInt.toString())).toBe(-thirdInt - secondInt);
        });

    });

    describe("Validation", function () {

        it(`should return false when called without passing an argument`, function () {
            expect(subtract()).toBeFalse()
        });
        it('should return false when a non numeric string is passed as an argument', function () {
            expect(subtract(randomPositiveEvenNumber(),randomName)).toBeFalse()
        });
        it(`should return false when undefined is passed as an argument`, function () {
            expect(subtract(randomPositiveNumber,undefined)).toBeFalse()
        });
        it(`should return false when null is passed as an argument`, function () {
            expect(subtract(null,randomPositiveNumericString)).toBeFalse()
        });
        it(`should return false when the boolean true is passed as an argument`, function () {
            expect(subtract(true,randomPositiveNumber)).toBeFalse()
        });
        it(`should return false when the boolean false is passed as an argument`, function () {
            expect(subtract(randomPositiveNumber,false)).toBeFalse()
        });
        it(`should return false when an object is passed as an argument`, function () {
            expect(subtract(exampleObject,randomPositiveNumericString)).toBeFalse()
        });
        it(`should return false when an array is passed as an argument`, function () {
            expect(subtract(randomPositiveNumericString,exampleArray)).toBeFalse()
        });

    });

});