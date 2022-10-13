"use strict";
// import {FStudent} from "./FStudent";
// import {Student} from "./Node";
//
// class StudentLinkedList implements FStudent{
//     get size(): 0 {
//         return this._size;
//     }
//
//     set size(value: 0) {
//         this._size = value;
//     }
//
//     head: Student | null;
//     private _size: 0;
//
//     constructor() {
//         this.head = null;
//
//     }
//
//     insertStudent(name, score): void {
//         let node = new Student(name, score);
//         node.next = this.head;
//         this.head = node;
//         this._size++;
//     }
//
//     // @ts-ignore
//     showList(){
//         let listData = [];
//         let currentNode = this.head;
//
//         while (currentNode !== null) {
//             listData.push(currentNode.readData());
//             currentNode = currentNode.next
//         }
//         return listData;
//     }
//     totalStudentsFail(name, score){
//         let listData = [];
//         let currentNode = this.head;
//
//         while (currentNode !== null) {
//             listData.push(currentNode.readData());
//             currentNode = currentNode.next
//             if ( currentNode <= 5){
//
//             }
//         }
//
//     }
//
// }
exports.__esModule = true;
exports.LinkedList = void 0;
// let studentList = new StudentLinkedList();
// studentList.insertStudent('A', 12);
// studentList.insertStudent('B', 15);
// console.log(studentList.showList())
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirstNode = function (name, mark) {
        var node = new Node_1.Nude(name, mark);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertLastNode = function (name, mark) {
        if (!this.head) {
            this.insertFirstNode(name, mark);
        }
        else {
            var node = new Node_1.Nude(name, mark);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    LinkedList.prototype.showList = function () {
        var currNode = this.head;
        while (currNode != null) {
            console.log({ name: currNode.name, mark: currNode.mark });
            currNode = currNode.next;
        }
    };
    LinkedList.prototype.totalStudentsFail = function () {
        var count = 0;
        var currNode = this.head;
        while (currNode.next != null) {
            if (currNode.mark < 5) {
                count++;
            }
            currNode = currNode.next;
        }
        return count;
    };
    LinkedList.prototype.find = function (name) {
        var currentNode = this.head;
        while (currentNode != null) {
            if (currentNode.name == name) {
                return { name: currentNode.name, mark: currentNode.mark };
            }
            currentNode = currentNode.next;
        }
    };
    LinkedList.prototype.listStudentMaxScore = function () {
        var currNode = this.head.next;
        var max = this.head.mark;
        while (currNode != null) {
            if (max < currNode.mark) {
                max = currNode.mark;
            }
            currNode = currNode.next;
        }
        return max;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
