// Interface for Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Class implementation
class TeacherImpl implements Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    options: { yearsOfExperience?: number; [key: string]: any } = {}
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;

    // Set optional yearsOfExperience if provided
    if (options.yearsOfExperience !== undefined) {
      this.yearsOfExperience = options.yearsOfExperience;
    }

    // Add any additional dynamic attributes
    for (const key in options) {
      if (key !== "yearsOfExperience") {
        this[key] = options[key];
      }
    }
  }
  workFromHome(): string {
    throw new Error("Method not implemented.");
  }
  getCoffeeBreak(): string {
    throw new Error("Method not implemented.");
  }
  workTeacherTasks(): string {
    throw new Error("Method not implemented.");
  }
}

// Example usage:
const teacher1 = new TeacherImpl("Njock", "Rudiger", true, "Mamfe", {
  yearsOfExperience: 5,
  contract: true,
  specialty: "Mathematics",
});

const teacher2 = new TeacherImpl("Ebob", "Claudine", false, "Buea", {
  contract: false,
});

console.log(teacher1);
console.log(teacher2);

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage:
const director: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
  yearsOfExperience: 10,
  department: "Engineering",
  workFromHome: function (): string {
    throw new Error("Function not implemented.");
  },
  getCoffeeBreak: function (): string {
    throw new Error("Function not implemented.");
  },
  workTeacherTasks: function (): string {
    throw new Error("Function not implemented.");
  },
};

// These will show proper type checking:
console.log(director);

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  return `${firstInitial}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("alice", "smith")); // Output: A. smith

// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class instance
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working

// Director Interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher Interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create employee
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Example usage
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director
