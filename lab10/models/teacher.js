import { Person } from "./person.js";

export class Teacher extends Person {
    constructor(name) {
        super(name);
        this.courses = [];
    }

    addCourse(course) {
        this.courses.push(course);
    }

    getCourses() {
        return this.courses.map(c => c.title).join(", ");
    }
}
