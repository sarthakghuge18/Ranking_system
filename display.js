document.getElementById('goBack').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('clearData').addEventListener('click', function() {
    if (confirm('Are you sure you want to clear all student data?')) {
        localStorage.removeItem('students');
        displayStudents([]); // Clear the list on the page
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    displayStudents(students);
});

function displayStudents(students) {
    students.sort((a, b) => b.score - a.score);

    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="rank">Rank ${index + 1}:</span> <span class="name">${student.name}</span> <span class="score">Score: ${student.score}</span> <span class="year">Year: ${student.year}</span>`;
        studentList.appendChild(li);
    });
}
