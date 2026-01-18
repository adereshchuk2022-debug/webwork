export class Course {
    constructor(title) {
        this.title = title;
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    getStudents() {
        return this.students.map(s => s.name).join(", ");
    }
}
