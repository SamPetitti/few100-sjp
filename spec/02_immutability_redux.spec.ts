describe('immutability', () => {
    /*
    The idea of these tests are to show that you don't modify things like arrays or objects in ts or angular,
    but rather you make a whole new one. This way you don't have to "watch" all of the props or things in these
    arrays/objects
    */

    it('with arrays...', () => {
        const numbers = [2, 3, 4, 5];

        const newNumbers = [1, ...numbers, 6, 7, 8];
        expect(numbers).toEqual([2, 3, 4, 5]);
        expect(newNumbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
    it('removing an item from an array', () => {
        const numbers = [2, 3, 4, 5];
        const newNumbers = numbers.filter(x => x !== 4);
        expect(numbers).toEqual([2, 3, 4, 5]);
        expect(newNumbers).toEqual([2, 3, 5]);
    });
    it('do some stuff with objects', () => {

        interface Employee {
            id: string;
            firstName: string;
            lastName: string;
            department: string;
        }

        const bob: Employee = {
            id: '11',
            firstName: 'Robert',
            lastName: 'Smith',
            department: 'Guitar, And Crying'
        };

        // SPREAD OPERATOR ON OBJECTS WHOA
        const newBob = { ...bob, department: 'DEV' };

        expect(newBob).toEqual({
            id: '11',
            firstName: 'Robert',
            lastName: 'Smith',
            department: 'DEV'
        });


    });
});
