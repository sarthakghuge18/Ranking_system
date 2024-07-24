document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('studentName').value;
    const score = document.getElementById('studentScore').value;
    const year = document.getElementById('studentYear').value;

    if (name && score && year) {
        addStudent(name, parseInt(score), year);
        displayMessage('Student added successfully!');
    }

    document.getElementById('studentForm').reset();
});

document.getElementById('viewScores').addEventListener('click', function() {
    window.location.href = 'display.html';
});

let students = JSON.parse(localStorage.getItem('students')) || [];

function addStudent(name, score, year) {
    students.push({ name, score, year });
    localStorage.setItem('students', JSON.stringify(students));
}

function displayMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.classList.remove('message-hidden');
    messageElement.classList.add('message-visible');
    setTimeout(() => {
        messageElement.classList.remove('message-visible');
        messageElement.classList.add('message-hidden');
    }, 3000);
}
