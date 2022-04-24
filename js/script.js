// this api is from jsonplaceholder website
const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data))
}
const displayComment = comments => {
    const commentElement = document.getElementById('comment');
    for (const comment of comments) {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <p> body: ${comment.name}</p>  
        <p> email: ${comment.email}</p>     
                        `
        commentElement.appendChild(div)
    }
}
