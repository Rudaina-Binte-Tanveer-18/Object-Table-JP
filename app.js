let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let age = document.getElementById("age")
let education = document.getElementById("education")
let rollNo = document.getElementById("id")
let tBody = document.getElementById("tbody")

let studentList = []

function render() {
    tBody.innerHTML = ""
    for (let i = 0; i < studentList.length; i++) {
        tBody.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${studentList[i].first}</td>
            <td>${studentList[i].last}</td>
            <td>${studentList[i].ageStd}</td>
            <td>${studentList[i].educationStd}</td>
            <td>${studentList[i].rollNoStd}</td>
            <td><button id="delOne" onclick="deleteStd(${i})">&#10006;</button>&emsp;
            <button id="edit" onclick="edit(${i})">✏️</button></td>
        </tr>
        `
    }
}

function addStudent() {
    let a = firstName.value
    let b = lastName.value
    let c = age.value
    let d = education.value
    let e = rollNo.value
    let student = {
        first: a,
        last: b,
        ageStd: c,
        educationStd: d,
        rollNoStd: e,
    }
    studentList.push(student)
    firstName.value = ""
    lastName.value = ""
    age.value = ""
    education.value = ""
    rollNo.value = ""
    render()
}

function deleteStd(index) {
    studentList.splice(index, 1)
    render()
}

function deleteAll() {
    studentList = []
    tBody.innerHTML = ""
}

function edit(index) {
    let editedFN = prompt("Enter new first name")
    let editedLN = prompt("Enter new last name")
    let editedA = prompt("Enter new age")
    let editedE = prompt("Enter new qualification")
    let editedRN = prompt("Enter new roll no")
    if (editedFN !== null && editedLN !== null && editedA !== null && editedE !== null && editedRN !== null) {
        studentList[index].first = editedFN
        studentList[index].last = editedLN
        studentList[index].ageStd = parseInt(editedA)
        studentList[index].educationStd = editedE
        studentList[index].rollNoStd = parseInt(editedRN)
        render()
    }
}