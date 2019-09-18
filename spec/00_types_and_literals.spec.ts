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
    });
});
