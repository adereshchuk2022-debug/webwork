function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
};
function Course(title) {
    this.title = title;
    this.students = [];
}
Course.prototype.addStudent = function (student) {
    this.students.push(student);
    student.courses.push(this.title);
};
Course.prototype.getStudents = function () {
    return this.students.map(s => s.name);
};
function Teacher(name) {
    Person.call(this, name);
    this.courses = [];}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.addCourse = function (course) {
    this.courses.push(course.title);
};

Teacher.prototype.getCourses = function () {
    return this.courses;
};
function Student(name) {
    Person.call(this, name);
    this.courses = [];
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.viewCourses = function () {
    console.log(`Курси студента ${this.name}:`, this.courses);
};
const jsCourse = new Course("JavaScript");
const htmlCourse = new Course("HTML & CSS");
const teacher = new Teacher("Ігор Тупичак");
teacher.addCourse(jsCourse);
teacher.addCourse(htmlCourse);
const student1 = new Student("Максим");
const student2 = new Student("Андрій");
jsCourse.addStudent(student1);
jsCourse.addStudent(student2);
htmlCourse.addStudent(student1);

console.log("Викладач:", teacher.getName());
console.log("Курси викладача:", teacher.getCourses());

console.log("Студенти курсу JavaScript:", jsCourse.getStudents());

student1.viewCourses();
student2.viewCourses();
