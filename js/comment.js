const loadComment = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => res.json())
        .then(data => displayComment(data.slice(0, 20)))
}
const displayComment = comments => {
    const commentContainer = document.getElementById('comment-container');
    console.log(comments);
    comments.forEach(comment => {
        console.log(comment);
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment')
        commentDiv.innerHTML = `
        <div onclick="loadPost(${comment.id})">
            <h3>ID: ${comment.id}</h3>
            <h3>Name:${comment.name}</h3>
            <h4>${comment.email}</h4>
            <p>${comment.body}</p>
        </div>
        `;
        commentContainer.appendChild(commentDiv)
    })

}

const loadPost = (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPost(data))
}
const displayPost = (post) => {
    const postContainer = document.getElementById('post-container');
    postContainer.classList.add('post')
    console.log(post);
    postContainer.innerHTML = `
    <h5>Title: ${post.title}</h5>
    <h6>Post ID: ${post.id}</h6>
    <p>${post.body}</p>
    `;

}

loadComment()