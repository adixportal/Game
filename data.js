const tournaments = [
  {
    name: "Solo Clash Cup",
    entry: "₹50",
    prize: "₹1000",
    date: "Today • 8:00 PM",
    type: "Upcoming"
  },
  {
    name: "Duo Knockout",
    entry: "Free",
    prize: "₹500",
    date: "Tomorrow • 6:00 PM",
    type: "Upcoming"
  },
  {
    name: "Pro Squad League",
    entry: "₹100",
    prize: "₹5000",
    date: "Sunday • 9:00 PM",
    type: "Upcoming"
  }
];

const list = document.getElementById("tournamentList");

tournaments.forEach(t => {
  list.innerHTML += `
    <div class="card">
      <h3>${t.name}</h3>
      <div class="info">${t.date}</div>
      <div class="badges">
        <div class="badge">Entry: ${t.entry}</div>
        <div class="badge">Prize: ${t.prize}</div>
      </div>
      <button class="join-btn">View Details</button>
    </div>
  `;
});