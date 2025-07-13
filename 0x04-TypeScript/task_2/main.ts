// Define Director and Teacher interfaces
interface Director {
  workDirectorTasks(): string;
}

interface Teacher {
  workTeacherTasks(): string;
}

// Type predicate function to check if employee is Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

function createEmployee(salary: number): Director | Teacher {
  if (salary < 500) {
    return {
      workTeacherTasks: () => "Getting to work",
    };
  } else {
    return {
      workDirectorTasks: () => "Getting to director tasks",
    };
  }
}

// Example usage
const teacher = createEmployee(200); // Returns Teacher
const director = createEmployee(1000); // Returns Director

console.log(executeWork(teacher)); // Output: "Getting to work"
console.log(executeWork(director)); // Output: "Getting to director tasks"

// String literal type for Subjects
type Subjects = "Math" | "History";

// Function to teach class
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
  // This line is theoretically unreachable due to the type constraint
  throw new Error("Invalid subject");
}

// Example usage
const mathClass: Subjects = "Math";
const historyClass: Subjects = "History";

console.log(teachClass(mathClass)); // Output: "Teaching Math"
console.log(teachClass(historyClass)); // Output: "Teaching History"
