import { isEven } from './utils';

describe('functions', () => {
    describe('parameters to functions', () => {
        it('overloading in JS', () => {
            function formatName(first: string, last: string, mi?: string): string {
                let fullName = `${last}, ${first}`;
                if (mi) {
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }

            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });
        describe('returning stuff', () => {
            it('returning multiple things OOP style', () => {
                function formatName(first: string, last: string, mi?: string): { fullName: string, characters: number } {
                    // return anonymous interface
                    let fullName = `${last}, ${first}`;
                    if (mi) {
                        fullName += ` ${mi}.`;
                    }
                    return {
                        fullName, // if the prop of variable and name of variable are same, you don't need to repeat yourself
                        characters: fullName.length
                    };
                }

                const result = formatName('Han', 'Solo');
                expect(result.fullName).toBe('Solo, Han');
                expect(result.characters).toBe(9);

                // object destructuring

                const { fullName } = formatName('Luke', 'Skywalker');
                expect(fullName).toBe('Skywalker, Luke');

                const { fullName: fn } = formatName('Luke', 'Skywalker');
                expect(fn).toBe('Skywalker, Luke');

            });
            it('returning multiple things functional style', () => {
                function formatName(first: string, last: string, mi?: string): [string, number] {
                    let fullName = `${last}, ${first}`;
                    if (mi) {
                        fullName += ` ${mi}.`;
                    }
                    return [fullName, fullName.length];
                }

                const result = formatName('Han', 'Solo');
                expect(result[0]).toBe('Solo, Han');
                expect(result[1]).toBe(9);
                // Array destructuring
                const [fn, jesse] = formatName('Luke', 'Skywalker');
                expect(fn).toBe('Skywalker, Luke');
                expect(jesse).toBe(15);

            });

            it('fun with array descturing', () => {
                const numbers = [1, 2, 3, 4, 5];

                const [first, , tacos] = numbers;

                expect(first).toBe(1);
                expect(tacos).toBe(3);

                const [head, ...tail] = numbers;
                expect(head).toBe(1);
                expect(tail).toEqual([2, 3, 4, 5]);
            });

            it('fun with object descturing', () => {
                const employee = {
                    firstName: 'Sue',
                    lastName: 'Smith',
                    job: 'DEV',
                    lastPayChecks: [23_500, 22_800, 18_123]
                };

                // Your one line of code goes here:
                const { job, lastName: last } = employee;

                expect(last).toBe('Smith');
                expect(job).toBe('DEV');
            });

            it('adding some numbers', () => {

                function add(a: number = 20, b: number = 10, ...sam: number[]) {
                    // sam is a "rest operator" - put rest of this stuff in this box
                    const firstTwo = a + b;
                    return sam.reduce((s, n) => s + n, firstTwo);
                }

                expect(add(2, 2)).toBe(4);
                expect(add(2)).toBe(12);
                expect(add()).toBe(30);
                expect(add(undefined, 5)).toBe(25);
                expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
            });
        });
    });
});

describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('basic example', () => {
        numbers.forEach((n) => console.log(n));

        const newNums = numbers.map((x) => x * 2);

        newNums.forEach((x) => console.log(x));
    });

    it('you can create a new array using filter', () => {
        const evens = numbers.filter(n => n % 2 === 0);

        expect(evens).toEqual([2, 4, 6, 8]);

        // alternative

        const evens2 = numbers.filter(isEven);
        expect(evens).toEqual([2, 4, 6, 8]);

    });

    it('create an array of mutated elements', () => {

        const doubled = numbers.map((x) => x * 2);

        expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
    });

    it('your test - make this work', () => {
        const doubledEvens = numbers.filter(isEven).map((x) => x * 2);

        expect(doubledEvens).toEqual([4, 8, 12, 16]);
    });

    it('return a single value', () => {
        const allEven = numbers.every(isEven);
        expect(allEven).toBe(false);

        const someEven = numbers.some(isEven);
        expect(someEven).toBe(true);
    });

    it('boiling an array down to a single value', () => {

        const isAdded = numbers.reduce((a, b) => { console.log({ a, b }); return a + b; });

        expect(isAdded).toBe(45);

        const isAddedPlusAdditional = numbers.reduce((a, b) => a + b, 100); // 100 is the additional

        expect(isAddedPlusAdditional).toBe(145);

        const isMultipled = numbers.reduce((a, b) => a * b);
        expect(isMultipled).toBe(362880);

    });
});
