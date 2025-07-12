interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ebob",
  lastName: "Claudine",
  age: 30,
  location: "Mamfe",
};

const student2: Student = {
  firstName: "Njock",
  lastName: "Rudiger",
  age: 33,
  location: "Buea",
};

const studentsList: Student[] = [student1, student2];

const renderTable = (students: Student[]): void => {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["First Name", "Location"];

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  students.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
};

renderTable(studentsList);
