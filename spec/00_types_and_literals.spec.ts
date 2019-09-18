describe('declaring variables', () => {
    describe('using let', () => {
        it('declaring a variable with let', () => {
            let name;

            name = 'Sam';

            expect(name).toBe('Sam');
            expect(typeof (name)).toBe('string');

            name = 13453;

            expect(name).toBe(13453);
            expect(typeof (name)).toBe('number');
        });

        it('explicitly typing', () => {
            let name: string | number; // this is a "union" type
            name = 'Jeff';
            name = 123;
        });
        it('implicitly typed varialbes', () => {
            let name = 'Sam'; // because this is inititialized to a string value, it is a considered a string type
            name = 'Samuel';
            // name = 1144;
        });
    });

    describe('constants', () => {
        it('has them and prefers them', () => {
            const pi = 3.1415;
            // pi = 4; this won't work

            const friends = ['Bridget', 'Sam', 'Beej'];

            friends[2] = 'Benedict';

            const movie = { title: 'The Godfather', director: 'Scorcese' };

            movie.director = 'Coppola';

            expect(movie.director).toBe('Coppola');
            expect(friends[2]).toBe('Benedict');

            const name = 'Pete';
        });
    });
    describe('var and why it is evil and you should not use it.', () => {

        it('does not have block scope!', () => {

            const age = 22;

            if (age > 21) {
                // tslint:disable-next-line: no-var-keyword
                var message;
                message = 'Old Enough';
            }

            expect(message).toBe('Old Enough');
        });
    });

    describe('literals', () => {
        it('has a bunch of numeric literals', () => {
            const n1 = 123;
            const n2 = 3.14;
            const bigNumber = 12_123_520;

            const hexNumber = 0xff;
            const binaryNumber = 0b1010101;
            const octalNumber = 0o567;

            let x: number;
            x = octalNumber;

            // converting num to string

            const pay = parseInt('333.33', 10);
            expect(pay).toBe(333);

            const pay2 = parseFloat('333.33');
            expect(pay2).toBe(333.33);
        });
        it('string literals', () => {
            const title = 'Jones';
            expect(title).toBe('Jones');
        });
        it('template strings', () => {
            const s1 = `Tacos`;
            expect(typeof (s1)).toBe('string');

            const story =
                `My Life Story.

            It was dark and stormy night

            I taught programming

            The End. `;

            const name = 'Bob';
            const age = 45;

            const message = `The name of the person was ${name} and he was age ${age}`;

            console.log(message);

        });

        it('has array literals', () => {
            const luckyNumbers = [9, 20, 133];
            expect(luckyNumbers[0]).toBe(9);
            luckyNumbers[999] = 50;

            expect(luckyNumbers[100]).toBeUndefined();

            let friends: string[];
            friends = ['Bill', 'Beth'];

            let someArray: (string | number)[];
            someArray = [99, 'dog', 'cat', 444];

            let someArray2: Array<string | number>;
        });
        it('intro to tuples', () => {
            type SettingOption = 'log' | 'warn' | 'trace'; // this is v. similar to enumerated constants in C# (enums are rarely used)
            type Setting = [boolean, SettingOption, SettingOption, SettingOption];
            let setting: Setting;

            setting = [true, 'log', 'warn', 'trace'];
            // setting = ['dog', false] //wont compile

            const isSet = setting[0];
            const allowLog = setting[1];
        });
    });

    describe('function literals', () => {
        it('three different ways to declare a function - plus methods in a class we will do later', () => {
            // Named function
            function add(a: number, b: number): number {
                return a + b;
            }
            // Anonymous Function

            const subtract = function (a: number, b: number): number {
                return a - b;
            };

            const multiply = (a: number, b: number): number => a * b;

            expect(add(10, 2)).toBe(12);
            expect(subtract(10, 2)).toBe(8);
            expect(multiply(10, 2)).toBe(20);

            // you can move named functions around - doesn't matter whether they are called before or after function definition

            const divide = (a: number, b: number): number => {
                if (b === 0) {
                    throw new Error('Are you trying to open a black hole');
                } else {
                    return a / b;
                }
            };
        });
    });
    describe('object literals', () => {
        it('has them', () => {

            type MPAARating = 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';
            interface Movie {
                title: string;
                director: string;
                yearReleased: number;
                MPAARating?: MPAARating; // the ? makes the prop optional
                [key: string]: any; // this allows you to add anything
            }
            const movie: Movie = {
                title: 'Thor Ragnorak',
                director: 'Taika Waititi',
                yearReleased: 2016
            };

            expect(movie.title).toBe('Thor Ragnorak');
            expect(movie.title).toBe('Thor Ragnorak');

            // movie.MPAARating = 'PG13'; // you can do this in JS, but not TS. This allows you to not add mis-spelled properties

            movie.MPAARating = 'PG-13';
            movie.cast = ['Chris Hemsworth', 'Mark Ruffalo']; // because of the [key:string]: any
            movie.Watched = true; // because of the [key:string]: any
        });

        it('is interfaces with objects', () => {
            interface Vehicle {
                vin: string;
                make: string;
                model: string;
                year: number;
            }

            interface Dictionary<T> {
                [key: string]: T;
            }



            const myVehicles: Dictionary<Vehicle> = {
                '83989sjioe': {
                    vin: '83989sjioe',
                    make: 'Chevy',
                    model: 'Bolt',
                    year: 2018
                },
                xyzpdq: {
                    vin: 'xyzpdq',
                    make: 'Honda',
                    model: 'Pilot',
                    year: 2019
                }

            };

            expect(myVehicles['83989sjioe'].make).toBe('Chevy');
        });

        it('duck typing', () => {
            interface ThingWithMessage {
                message: string;
            }
            function doSomething(thing: ThingWithMessage) {
                console.log(thing.message);
            }

            doSomething({ message: 'Call Your Mom' });

            const phoneCall = {
                from: 'Sue',
                time: 'AM',
                message: 'Call Me Back'
            };

            doSomething(phoneCall);
        });
    });
});
