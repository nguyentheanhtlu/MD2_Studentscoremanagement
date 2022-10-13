// export class Student {
//     name: string;
//     score: number;
//     next: Student | null = null;
//
//     constructor(name, score) {
//         this.name = name;
//         this.score = score;
//
//     }
//
//     readData() {
//         return this.name + " " + this.score;
//     }
//
//
// }

export class Nude{
    name: string;
    mark: number;
    next: Nude | null;
    constructor(name:string,mark: number) {
        this.name= name;
        this.mark = mark;
        this.next = null;
    }

    readStudent(): string{
        return `name: ${this.name},mark: ${this.mark}`
    }
}