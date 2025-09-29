// Countdown Timer
const countdownElement = document.getElementById('countdown');
const eventDate = new Date('2025-11-08T17:00:00'); // 

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdownElement.innerHTML = "🎉 The party has started!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const mins = Math.floor(diff / (1000 * 60)) % 60;
  const secs = Math.floor(diff / 1000) % 60;

  countdownElement.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s until the party!`;
}

setInterval(updateCountdown, 1000);




