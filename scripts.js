// Example of how to dynamically load content
const posts = [
    { title: 'First Blog Post', description: 'This is the first post.', link: 'post.html' },
    { title: 'Second Blog Post', description: 'This is the second post.', link: 'post.html' }
];

const blogSection = document.getElementById('blog-posts');

posts.forEach(post => {
    const article = document.createElement('article');
    article.innerHTML = `
        <h2><a href="${post.link}">${post.title}</a></h2>
        <p>${post.description}</p>
    `;
    blogSection.appendChild(article);
});
