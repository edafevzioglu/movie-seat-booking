document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.seat:not(.seat-sold)').forEach(seat => {
    seat.addEventListener('click', () => seat.classList.toggle('seat-selected'));
  });
});
