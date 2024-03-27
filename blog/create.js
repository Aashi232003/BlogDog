window.addEventListener('load', function(){
    const user = JSON.parse(localStorage.getItem('current-user'));
    if(!user){
        window.location.pathname = '../login.html';
        return;
    }
}, {once: true})

function handleBlogCreate(){
    if(!('editor' in window)){
        console.error('editor is not defined');
        return;
    };

    const user = JSON.parse(localStorage.getItem('current-user'));
    if(!user){
        console.error('user is not defined');
        return;
    }

    const title = document.getElementById('title').value;
    const tag = document.getElementById('tag').value;
    const bannerImage = document.getElementById('banner-image').value;
    const content = editor.getData();
    const blogData = {
        title,
        tag,
        bannerImage,
        content,
        authorId: user.uid,
        authorName: user.fullname,
    }
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs.push(blogData);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    window.location.pathname = '../index.html';
}