import { Cpp } from "./Cpp";
import { Java } from "./Java";
import { React } from "./React";

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create and export teacher object
export const cTeacher: Subjects.Teacher = {
  experienceTeachingC: 10,
};

// Cpp Subject
console.log("C++");
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java Subject
console.log("\nJava");
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React Subject
console.log("\nReact");
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
