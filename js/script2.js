const loadPost = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
loadPost()

const displayUsers = users => {
    const userContainer = document.getElementById('users');
    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
        <h4>Name: ${user.name}</h4>   
        <p>Email: ${user.email} || Phone: ${user.phone} || Company: ${user.company.name}</p> 
        <button id= "fuck"> more </button>     
        `;
        document.getElementById('users').addEventListener('click', function () {
            div.innerHTML = `users zipcode: ${user.address.zipcode}`;
        })
        userContainer.appendChild(div)
    });

}
