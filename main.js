var student1 = {
    firstName: "Ebob",
    lastName: "Claudine",
    age: 30,
    location: "Mamfe",
};
var student2 = {
    firstName: "Njock",
    lastName: "Rudiger",
    age: 33,
    location: "Buea",
};
var studentsList = [student1, student2];
var renderTable = function (students) {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");
    var headers = ["First Name", "Location"];
    headers.forEach(function (headerText) {
        var th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    students.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        var locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
};
renderTable(studentsList);
