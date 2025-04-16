// Number of assignments/tiles
const NUM_ASSIGNMENTS = 44;

// Generate assignment due dates (for demo: each 1 day apart from now)
//const assignments = [];
//const now = new Date();
//for (let i = 0; i < NUM_ASSIGNMENTS; i++) {
  // Each assignment is due i days from now at 23:59:59
//  const dueDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i + 1, 23, 59, 59);
//  assignments.push({
//    title: `Assignment ${i + 1}`,
//    due: dueDate
//  });
//}
const assignments = [
    { title: "APM1513 Asign-1", due: new Date(2025, 5, 6, 11, 0, 0) },
    { title: "APM1513 Asign-2", due: new Date(2025, 6, 6, 11, 0, 0) },
    { title: "APM1513 Asign-3", due: new Date(2025, 7, 4, 11, 0, 0) },
    { title: "APM1513 Asign-4", due: new Date(2025, 8, 8, 11, 0, 0) },
    { title: "APM1514 Asign-1", due: new Date(2025, 5, 8, 11, 0, 0) },
    { title: "APM1514 Asign-2", due: new Date(2025, 5, 22, 11, 0, 0) },
    { title: "APM1514 Asign-3", due: new Date(2025, 6, 11, 11, 0, 0) },
    { title: "APM1514 Asign-4", due: new Date(2025, 6, 30, 11, 0, 0) },
    { title: "APM1514 Asign-5", due: new Date(2025, 7, 15, 11, 0, 0) },
    { title: "APM1514 Asign-6", due: new Date(2025, 7, 29, 11, 0, 0) },
    { title: "APM1514 Asign-7", due: new Date(2025, 8, 15, 11, 0, 0) },
    { title: "APM1514 Asign-8", due: new Date(2025, 8, 21, 11, 0, 0) },
    { title: "APM1514 Asign-9", due: new Date(2025, 8, 26, 11, 0, 0) },
    { title: "COS1501 Asign-1", due: new Date(2025, 5, 13, 11, 0, 0) },
    { title: "COS1501 Asign-2", due: new Date(2025, 6, 23, 11, 0, 0) },
    { title: "COS1501 Asign-3", due: new Date(2025, 7, 25, 11, 0, 0) },
    { title: "COS1501 Asign-4", due: new Date(2025, 9, 9, 9, 0, 0) },
    { title: "COS1511 Asign-1", due: new Date(2025, 4, 16, 15, 0, 0) },
    { title: "COS1511 Asign-2", due: new Date(2025, 6, 2, 11, 59, 0) },
    { title: "COS1511 Asign-3", due: new Date(2025, 8, 4, 9, 0, 0) },
    { title: "COS1512 Asign-1", due: new Date(2025, 5, 20, 11, 0, 0) },
    { title: "COS1512 Asign-2", due: new Date(2025, 8, 26, 11, 0, 0) },
    { title: "COS1512 Asign-3", due: new Date(2025, 9, 9, 11, 0, 0) },
    { title: "COS1512 Asign-4", due: new Date(2025, 9, 23, 11, 0, 0) },
    { title: "COS1521 Asign-1", due: new Date(2025, 5, 27, 11, 0, 0) },
    { title: "COS1521 Asign-2", due: new Date(2025, 6, 17, 11, 0, 0) },
    { title: "COS1521 Asign-3", due: new Date(2025, 7, 22, 11, 0, 0) },
    { title: "COS1521 Asign-4", due: new Date(2025, 8, 12, 11, 0, 0) },
    { title: "COS1521 Asign-5", due: new Date(2025, 9, 2, 11, 0, 0) },
    { title: "MAT1503 Asign-1", due: new Date(2025, 5, 22, 11, 0, 0) },
    { title: "MAT1503 Asign-2", due: new Date(2025, 6, 27, 11, 0, 0) },
    { title: "MAT1503 Asign-3", due: new Date(2025, 7, 31, 11, 0, 0) },
    { title: "MAT1503 Asign-4", due: new Date(2025, 8, 29, 11, 0, 0) },
    { title: "MAT1503 Asign-5", due: new Date(2025, 9, 30, 11, 0, 0) },
    { title: "MAT1512 Asign-1", due: new Date(2025, 5, 16, 11, 0, 0) },
    { title: "MAT1512 Asign-2", due: new Date(2025, 5, 29, 11, 0, 0) },
    { title: "MAT1512 Asign-3", due: new Date(2025, 6, 13, 11, 0, 0) },
    { title: "MAT1512 Asign-4", due: new Date(2025, 6, 30, 11, 0, 0) },
    { title: "MAT1512 Asign-5", due: new Date(2025, 7, 18, 11, 0, 0) },
    { title: "MAT1512 Asign-6", due: new Date(2025, 7, 31, 11, 0, 0) },
    { title: "MAT1613 Asign-1", due: new Date(2025, 5, 2, 11, 0, 0) },
    { title: "MAT1613 Asign-2", due: new Date(2025, 6, 27, 11, 0, 0) },
    { title: "MAT1613 Asign-3", due: new Date(2025, 8, 8, 11, 0, 0) },
    { title: "MAT1613 Asign-4", due: new Date(2025, 9, 26, 11, 0, 0) },
    
    // you can add as many titles as you want as long as you change the variable "const NUM_ASSIGNMENTS = 30;"
  ];
  

  // Sort assignments by due date (earliest first)
assignments.sort((a, b) => a.due - b.due);

// Create tiles in the DOM
const container = document.getElementById('tilesContainer');
assignments.forEach((assignment, idx) => {
  const tile = document.createElement('div');
  tile.className = 'tile';
  tile.innerHTML = `
    <div class="assignment-title">${assignment.title}</div>
    <div class="countdown" id="countdown${idx}">Loading...</div>
    <div class="due-date">Due: ${assignment.due.toLocaleString()}</div>
  `;
  container.appendChild(tile);
});

function updateCountdowns() {
    assignments.forEach((assignment, idx) => {
      const now = new Date();
      const distance = assignment.due - now;
      const countdownElem = document.getElementById(`countdown${idx}`);
  
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);
  
        countdownElem.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
        // Change color to red if 7 days or less left, else default color
        if (days <= 7) {
          countdownElem.style.color = "#d7263d"; // red
        } else {
          countdownElem.style.color = "#2d7dd2"; // default blue
        }
      } else {
        countdownElem.textContent = "Time's up!";
        countdownElem.style.color = "#d7263d"; // red
      }
    });
  }
  

// Start the countdown timer
updateCountdowns();
setInterval(updateCountdowns, 1000);

