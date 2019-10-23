describe('someCoolFeatures', () => {
   it('has Variables and types', () => {
      let name : string =  'Sam';
      
      expect(name).toBe('Sam');

      const city: string = 'Cleveland Heights';
const militaryTime: number = 1130;
const tooEarly: boolean = true;

let time: any;

time = 1130;
time = '11:30';

type letterGrade = 'A' | 'B' | 'C' | 'D' | 'F';

function gradeOnlyAProjects(grade: letterGrade): string {
    return grade;
}

const message: string = 'hello world';
console.log(message);

const num1: number = 2;
const num2: number = 4;

function add(aNum: number, anotherNum: number): number {
    return aNum + anotherNum;
}
console.log(add(num1, num2));

interface Guitarist {
    name: string;
    guitar: string;
}

const Sam = { name: 'Sammy P', guitar: 'Gibson 335' };


// function returnGuitar(guitarPlayer: Guitarist): string {
//     return guitarPlayer.name;
// }

const returnGuitar = (guitarPlayer: Guitarist): string => {
    return guitarPlayer.name;
}




console.log(returnGuitar(Sam));
      
   });
});