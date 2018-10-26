function individualStudent(studentInfo) {
  return `<div style="width: 150px; height: 60px; border: 1px solid gray;
          margin-bottom: 10px; text-align: center; ${presentColor(studentInfo.isPresent)}">
            <div style="font-size: 140%">${studentInfo.name}</div>
            <div><strong>${present(studentInfo.isPresent)}</strong></div>
          </div>`
}

function renderStudents(students) {
    var heading = `<h1>Roll Call!</h1>`
    return heading + students.map(individualStudent).join('');
}

function presentColor(studentPresent) {
  if (studentPresent === true) {
    return `background-color: #abe519`
  }
  else {
    return `background-color: #f24b46`
  }
}

function present(studentPresent) {
  if (studentPresent === true) {
    return `Present`
  }
  else {
    return `Absent`
  }
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}
