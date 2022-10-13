"use strict";
// export interface FStudent{
//     insertFirst() : void ;
//     insertLast() : void ;
//     showList() : number ;
//     totalStudentsFail() : number ;
//     listStudentMaxScore() : number;
//     findByName() :string;
// }
exports.__esModule = true;
var Student_1 = require("./Student");
var linked1 = new Student_1.LinkedList();
// let stu1 = new Nude("trung", 7);
// let stu2 = new Nude("tru", 2);
// let stu3 = new Nude("tng", 5);
linked1.insertFirstNode("trung", 7);
linked1.insertFirstNode("trg", 2);
linked1.insertFirstNode("gia", 8);
linked1.showList();
console.log(linked1.find('trung'));
console.log(linked1.listStudentMaxScore());
