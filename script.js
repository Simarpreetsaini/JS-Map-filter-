let students = [
  {
    name: "John Doe",
    marks: 85,
    class: "10th Grade",
    address: "123 Main St, New York",
  },
  {
    name: "Jane Smith",
    marks: 92,
    class: "12th Grade",
    address: "456 Oak Ave, California",
  },
  {
    name: "Alex Johnson",
    marks: 78,
    class: "11th Grade",
    address: "789 Pine Rd, Texas",
  },
  {
    name: "Emily Davis",
    marks: 95,
    class: "10th Grade",
    address: "321 Elm St, Florida",
  },
  {
    name: "Michael Brown",
    marks: 64,
    class: "12th Grade",
    address: "654 Maple Dr, Ohio",
  },
];

let cardsContainer = document.getElementById("cardsContainer");
let searchInput = document.getElementById("searchInput");

function renderStudents(studentList) {
  cardsContainer.innerHTML = "";

  for (let i = 0; i < studentList.length; i++) {
    let student = studentList[i];
    {
      let card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
            <h2>${student.name}</h2>
            <p><strong>Marks:</strong> ${student.marks}</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>Address:</strong> ${student.address}</p>
        `;

      cardsContainer.appendChild(card);
    }
  }
}

function filterStudents() {
  let query = searchInput.value.toLowerCase();
  let filtered = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].name.toLowerCase().includes(query)) {
      filtered.push(students[i]);
    }
  }
  renderStudents(filtered);
}

searchInput.addEventListener("input", filterStudents);

renderStudents(students);
