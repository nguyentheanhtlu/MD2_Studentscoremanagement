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

// let studentList = new StudentLinkedList();
// studentList.insertStudent('A', 12);
// studentList.insertStudent('B', 15);
// console.log(studentList.showList())





import {Nude} from "./Node";

export class LinkedList {
    head: Nude | null;
    tail: Nude | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirstNode(name: string, mark: number): void {
        let node = new Nude(name, mark);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node
        }
        this.size++;
    }

    insertLastNode(name: string, mark: number): void {
        if (!this.head) {
            this.insertFirstNode(name, mark);
        } else {
            let node = new Nude(name, mark);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

    showList(): void {
        let currNode = this.head;
        while (currNode != null) {
            console.log({name: currNode.name, mark: currNode.mark});
            currNode = currNode.next;
        }
    }

    totalStudentsFail(): number {
        let count: number = 0;
        let currNode = this.head;
        while (currNode.next != null) {
            if (currNode.mark < 5) {
                count++
            }
            currNode = currNode.next;
        }

        return count;
    }

    find(name: string): object {
        let currentNode = this.head;
        while (currentNode != null) {
            if (currentNode.name == name) {
                return {name: currentNode.name, mark: currentNode.mark};
            }
            currentNode = currentNode.next;
        }
    }

    listStudentMaxScore() {
        let currNode = this.head.next;
        let max = this.head.mark;
        while (currNode != null){
            if (max < currNode.mark){
                max = currNode.mark;
            }
            currNode = currNode.next
        }
        return max;

    }


}
