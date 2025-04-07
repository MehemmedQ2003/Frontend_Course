var Student = /** @class */ (function () {
    function Student(_studentID, _firstName, _lastName, _dateOfBirth, _enrollmentDate) {
        this.studentID = _studentID;
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.dateOfBirth = _dateOfBirth;
        this.enrollmentDate = _enrollmentDate;
    }
    return Student;
}());
var Teacher = /** @class */ (function () {
    function Teacher(_teacherID, _firstName, _lastName, _subject, _email) {
        this.teacherID = _teacherID;
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.subject = _subject;
        this.email = _email;
    }
    return Teacher;
}());
var Lesson = /** @class */ (function () {
    function Lesson(_lessonID, _title, _description, _startTime, _endTime, _classroom) {
        this.lessonID = _lessonID;
        this.title = _title;
        this.description = _description;
        this.startTime = _startTime;
        this.endTime = _endTime;
        this.classroom = _classroom;
    }
    return Lesson;
}());
var Schools = /** @class */ (function () {
    function Schools(_lessonID, _title, _description, _startTime, _endTime, _classroom) {
        this.lessonID = _lessonID;
        this.title = _title;
        this.description = _description;
        this.startTime = _startTime;
        this.endTime = _endTime;
        this.classroom = _classroom;
    }
    return Schools;
}());
var student1 = new Student(1, "John", "Doe", new Date("2000-01-01"), new Date("2020-09-01"));
var student2 = new Student(2, "Jane", "Doe", new Date("2001-02-02"), new Date("2021-09-01"));
var student3 = new Student(3, "Alice", "Johnson", new Date("2002-03-03"), new Date("2022-09-01"));
var students = [student1, student2, student3];
var teacher1 = new Teacher(1, "Emily", "Smith", "Math", "emily.smith@example.com");
var teacher2 = new Teacher(2, "David", "Jones", "Science", "david.jones@example.com");
var teachers = [teacher1, teacher2];
var lesson1 = new Lesson(1, "Math Lesson 1", "Introduction to Algebra", new Date("2024-09-01T08:00:00"), new Date("2024-09-01T09:30:00"), "Room 101");
var lesson2 = new Lesson(2, "Science Lesson 1", "Introduction to Biology", new Date("2024-09-01T10:00:00"), new Date("2024-09-01T11:30:00"), "Room 102");
var lessons = [lesson1, lesson2];
var schools1 = new Schools(1, "Math Lesson 1", "Introduction to Algebra", new Date("2024-09-01T08:00:00"), new Date("2024-09-01T09:30:00"), "Room 101");
var schools2 = new Schools(2, "Science Lesson 1", "Introduction to Biology", new Date("2024-09-01T10:00:00"), new Date("2024-09-01T11:30:00"), "Room 102");
var schools = [lesson1, lesson2];
console.log(students);
console.log(teachers);
console.log(lessons);
console.log(schools);
