const tournaments = [
  {
    name: "Solo Clash Cup",
    entry: "₹50",
    prize: "₹1,000",
    time: "Today • 8:00 PM",
    status: "Upcoming"
  },
  {
    name: "Duo Knockout",
    entry: "FREE",
    prize: "₹500",
    time: "Tomorrow • 6:00 PM",
    status: "Upcoming"
  },
  {
    name: "Pro Squad League",
    entry: "₹100",
    prize: "₹5,000",
    time: "Sunday • 9:00 PM",
    status: "Upcoming"
  }
];

const list = document.getElementById("tournamentList");

tournaments.forEach(t => {
  list.innerHTML += `
    <div class="card">
      <div class="card-header">
        <h3>${t.name}</h3>
        <div class="status">${t.status}</div>
      </div>

      <div class="card-info">
        <div class="badge">🕒 ${t.time}</div>
        <div class="badge">🎟 Entry: ${t.entry}</div>
        <div class="badge">🏆 Prize: ${t.prize}</div>
      </div>

      <button class="join-btn">View Tournament</button>
    </div>
  `;
});
