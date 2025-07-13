namespace Subjects {
  // Declaration merging to extend Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    teacher: any;
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingReact &&
        this.teacher.experienceTeachingReact > 0
      ) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
