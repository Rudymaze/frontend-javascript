import { Teacher } from "./Teacher";
namespace Subjects {
  export class BaseSubject {
    private _teacher: Teacher;

    constructor(teacher: Teacher) {
      this._teacher = teacher;
    }

    // Setter for teacher
    set teacher(teacher: Teacher) {
      this._teacher = teacher;
    }

    // Getter for teacher (optional but useful)
    get teacher(): Teacher {
      return this._teacher;
    }
  }
}
