document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bugForm');
    const formStatus = document.getElementById('formStatus');
    const exitButton = document.getElementById('exitButton');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        const idNumber = document.getElementById('idNumber').value.trim();
        const date = document.getElementById('date').value.trim();
        const title = document.getElementById('title').value.trim();
        // Fetch other fields in similar fashion

        if (!idNumber || !date || !title /* check other fields */) {
            formStatus.textContent = 'Please fill in all fields';
            formStatus.style.display = 'block';
            return;
        }

        try {
            const response = await fetch('http://yourbackend.com/api/bugs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idNumber,
                    date,
                    title,
                    // Include other fields
                })
            });

            if (response.ok) {
                formStatus.textContent = 'Bug report submitted successfully!';
                form.reset(); // Clears the form
            } else {
                throw new Error('Failed to submit bug report');
            }
        } catch (error) {
            console.error('Error submitting bug report:', error);
            formStatus.textContent = 'Error submitting bug report';
        }
        formStatus.style.display = 'block';
    });

    exitButton.addEventListener('click', function() {
        form.reset();
        formStatus.style.display = 'none';
        // Optionally, navigate away
        window.location.href = '/index.html'; // Update this if you have a specific route
    });
});
