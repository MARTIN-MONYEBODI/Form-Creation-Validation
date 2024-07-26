async function fetchUserData() {
    const apiUrl = '(link unavailable)';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        dataContainer.innerHTML = '';

        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);
    } catch {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);
