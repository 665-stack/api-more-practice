// this api is from jsonplaceholder website
const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data))
}
const displayComment = comments => {
    const commentElement = document.getElementById('comment');
    for (const comment of comments) {
        console.log(comment)
        const p = document.createElement('p');
        p.innerText = `body: ${comment.name}
                       email: ${comment.email}`;
        commentElement.appendChild(p)
    }

}