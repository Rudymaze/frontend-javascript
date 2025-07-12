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
