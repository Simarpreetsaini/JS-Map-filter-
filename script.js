const students = [
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

const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");

function renderStudents(studentList) {
  const cards = studentList.map((student) => {
    return `
      <div class="card">
        <h2>${student.name}</h2>
        <p><strong>Marks:</strong> ${student.marks}</p>
        <p><strong>Class:</strong> ${student.class}</p>
        <p><strong>Address:</strong> ${student.address}</p>
      </div>
    `;
  });
  cardsContainer.innerHTML = cards.join("");
}

function filterStudents() {
  const query = searchInput.value.trim().toLowerCase();

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query),
  );

  renderStudents(filteredStudents);
}

searchInput.addEventListener("input", filterStudents);
document
  .getElementById("searchButton")
  .addEventListener("click", filterStudents);
document.getElementById("loginButton").addEventListener("click", function () {
  alert("Login button clicked");
});

renderStudents(students);
