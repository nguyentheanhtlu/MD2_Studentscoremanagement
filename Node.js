"use strict";
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
exports.__esModule = true;
exports.Nude = void 0;
var Nude = /** @class */ (function () {
    function Nude(name, mark) {
        this.name = name;
        this.mark = mark;
        this.next = null;
    }
    Nude.prototype.readStudent = function () {
        return "name: ".concat(this.name, ",mark: ").concat(this.mark);
    };
    return Nude;
}());
exports.Nude = Nude;
