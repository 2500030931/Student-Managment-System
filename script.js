let students = [];

function registerStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (!name || !roll) {
        alert("Enter student details");
        return;
    }

    students.push({ name: name, roll: roll, marks: "Not Added" });
    displayRecords();
    alert("Student Registered");
}

function addResult() {
    let roll = document.getElementById("resultRoll").value;
    let marks = document.getElementById("marks").value;

    let student = students.find(s => s.roll === roll);

    if (student && marks !== "" &&
        Number(marks) >= 0 && Number(marks) <= 100) {
        student.marks = marks;
        displayRecords();
        alert("Result Added");
    } else {
        alert("Invalid roll number or marks");
    }
}

function displayRecords() {
    document.getElementById("records").innerHTML =
        students.map(s =>
            `<p>${s.name} | ${s.roll} | Marks: ${s.marks}</p>`
        ).join("");
}
