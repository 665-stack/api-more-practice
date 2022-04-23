function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
loadPost()

function displayUsers(users) {
    const userContainer = document.getElementById('users');
    for (const user of users) {
        console.log(user)
        const div = document.createElement('div');
        div.classList.add('user')
        div.innerHTML = `
        <h4>Name: ${user.name}</h4>   
        <p>Email: ${user.email} || Phone: ${user.phone} || Company: ${user.company.name}</p>      
        `;
        userContainer.appendChild(div)
    }
}