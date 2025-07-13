namespace Subjects {
  // Declaration merging to extend Teacher interface
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Subject {
    teacher: any;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (
        this.teacher &&
        this.teacher.experienceTeachingC &&
        this.teacher.experienceTeachingC > 0
      ) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
