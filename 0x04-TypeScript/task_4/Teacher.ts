namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }
}

export class Teacher {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Additional methods can be added here
}
