document.addEventListener('DOMContentLoaded', function() {
    const issues = [
        { id: 1, name: '1', title: 'IAP', module: 'Autozone', status: 'Pending', priority: 'Low' },
        { id: 2, name: '2', title: 'Other Interface', module: 'WorldPac', status: 'Pending', priority: 'High' },
        { id: 3, name: '3', title: 'WorldPac', module: 'WorldPac', status: 'Pending', priority: 'High' },
    ];
    let filteredIssues = issues.slice();
    const tableBody = document.getElementById('tableBody');

    function renderIssues(issues) {
        tableBody.innerHTML = '';
        if (issues.length > 0) {
            issues.forEach(issue => {
                const row = tableBody.insertRow();
                row.insertCell(0).innerText = issue.name;
                row.insertCell(1).innerText = issue.title;
                row.insertCell(2).innerText = issue.module;
                row.insertCell(3).innerText = issue.status;
                row.insertCell(4).innerText = issue.priority;
                const actionCell = row.insertCell(5);
                const updateButton = document.createElement('button');
                updateButton.className = 'btn btn-primary';
                updateButton.innerText = 'Update';
                updateButton.onclick = () => console.log('Update:', issue.id);
                actionCell.appendChild(updateButton);
                const deleteButton = document.createElement('button');
                deleteButton.className = 'btn btn-danger';
                deleteButton.style.marginLeft = '10px';
                deleteButton.innerText = 'Delete';
                deleteButton.onclick = () => console.log('Delete:', issue.id);
                actionCell.appendChild(deleteButton);
            });
        } else {
            const row = tableBody.insertRow();
            const cell = row.insertCell(0);
            cell.colSpan = 6;
            cell.className = 'text-center';
            cell.innerText = 'No issues to display';
        }
    }

    document.getElementById('filterForm').onsubmit = function(event) {
        event.preventDefault();
        const filter = document.getElementById('filterInput').value.trim().toLowerCase();
        filteredIssues = issues.filter(issue => 
            issue.title.toLowerCase().includes(filter) ||
            issue.module.toLowerCase().includes(filter) ||
            issue.status.toLowerCase().includes(filter) ||
            issue.priority.toLowerCase().includes(filter)
        );
        renderIssues(filteredIssues);
    };

    document.getElementById('clearButton').onclick = function() {
        document.getElementById('filterInput').value = '';
        filteredIssues = issues.slice();
        renderIssues(filteredIssues);
    };

    document.getElementById('createButton').onclick = function() {
        window.location.href = '/newissue.html'; 
    };

    renderIssues(filteredIssues);
});
