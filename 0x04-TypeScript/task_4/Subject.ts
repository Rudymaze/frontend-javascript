import { Teacher } from "./Teacher";
import { Subject } from "./Subject";

namespace Subjects {
  export class Subject {
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

export class Subject {
  // Declaration merging to extend Teacher interface
  export interface Teacher {
    experienceTeachingPython?: number;
  }
