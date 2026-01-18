import { Person } from "./person.js";

export class Student extends Person {
    constructor(name) {
        super(name);
        this.courses = [];
    }

    addCourse(course) {
        this.courses.push(course);
    }

    viewCourses() {
        return this.courses.map(c => c.title).join(", ");
    }
}
