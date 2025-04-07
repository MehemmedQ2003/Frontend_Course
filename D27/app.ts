class Student {
    studentID: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    enrollmentDate: Date;

    constructor(_studentID: number, _firstName: string, _lastName: string, _dateOfBirth: Date, _enrollmentDate: Date) {
        this.studentID = _studentID;
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.dateOfBirth = _dateOfBirth;
        this.enrollmentDate = _enrollmentDate;
    }
}

class Teacher {
    teacherID: number;
    firstName: string;
    lastName: string;
    subject: string;
    email: string;

    constructor(_teacherID: number, _firstName: string, _lastName: string, _subject: string, _email: string) {
        this.teacherID = _teacherID;
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.subject = _subject;
        this.email = _email;
    }
}

class Lesson {
    lessonID: number;
    title: string;
    description: string;
    startTime: Date;
    endTime: Date;
    classroom: string;

    constructor(_lessonID: number, _title: string, _description: string, _startTime: Date, _endTime: Date, _classroom: string) {
        this.lessonID = _lessonID;
        this.title = _title;
        this.description = _description;
        this.startTime = _startTime;
        this.endTime = _endTime;
        this.classroom = _classroom;
    }
}

let student1 = new Student(1, "John", "Doe", new Date("2000-01-01"), new Date("2020-09-01"));
let student2 = new Student(2, "Jane", "Doe", new Date("2001-02-02"), new Date("2021-09-01"));
let student3 = new Student(3, "Alice", "Johnson", new Date("2002-03-03"), new Date("2022-09-01"));

let students: Student[] = [student1, student2, student3];



let teacher1 = new Teacher(1, "Emily", "Smith", "Math", "emily.smith@example.com");
let teacher2 = new Teacher(2, "David", "Jones", "Science", "david.jones@example.com");

let teachers: Teacher[] = [teacher1, teacher2];



let lesson1 = new Lesson(1, "Math Lesson 1", "Introduction to Algebra", new Date("2024-09-01T08:00:00"), new Date("2024-09-01T09:30:00"), "Room 101");
let lesson2 = new Lesson(2, "Science Lesson 1", "Introduction to Biology", new Date("2024-09-01T10:00:00"), new Date("2024-09-01T11:30:00"), "Room 102");

let lessons: Lesson[] = [lesson1, lesson2];


console.log(students);
console.log(teachers);
console.log(lessons);