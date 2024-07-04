document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('archiveTable');
    const rows = table.getElementsByTagName('tr');
    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');
    const rowsPerPage = 5; // Number of rows to show per page
    let currentPage = 1;

    // Hide all rows except the first 'rowsPerPage' number of rows
    function showPage(page) {
        for (let i = 0; i < rows.length; i++) {
            if (i < page * rowsPerPage && i >= (page - 1) * rowsPerPage) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }

        // Enable or disable backBtn based on currentPage
        backBtn.disabled = (currentPage === 1);
    }

    // Initial page display
    showPage(currentPage);

    // Event listener for the Next button
    nextBtn.addEventListener('click', function() {
        currentPage++;
        showPage(currentPage);

        // Enable backBtn when moving forward
        backBtn.disabled = false;

        // Disable nextBtn if on last page
        if (currentPage * rowsPerPage >= rows.length) {
            nextBtn.disabled = true;
            nextBtn.style.display = 'none'; // Optionally hide button when disabled
        }
    });

    // Event listener for the Back button
    backBtn.addEventListener('click', function() {
        currentPage--;
        showPage(currentPage);

        // Enable nextBtn when moving backward
        nextBtn.disabled = false;

        // Disable backBtn if on first page
        if (currentPage === 1) {
            backBtn.disabled = true;
        }
    });
});
