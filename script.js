// Countdown Timer
const countdownElement = document.getElementById('countdown');
const eventDate = new Date('2025-10-10T17:00:00'); // Set your birthday event date/time

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

// Play Song
document.getElementById('playSong').addEventListener('click', () => {
  const audio = document.getElementById('birthdayAudio');
  audio.play();
});

// Fake submit for song suggestion (can later be hooked into something like Firebase or Google Sheets)
document.getElementById('songSuggestionForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("🎵 Thank you for your suggestion!");
  e.target.reset();
});
