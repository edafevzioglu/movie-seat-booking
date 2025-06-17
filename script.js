document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat:not(.seat-sold)'); // Select all available seats

    // Add click event to each seat
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            seat.classList.toggle('seat-selected');
        });
    });
});
