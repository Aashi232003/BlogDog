window.addEventListener('load', function(){
    const user = JSON.parse(localStorage.getItem('current-user'));
    if(!user){
        window.location.pathname = '../login.html';
        return;
    }

    const editBlogId = localStorage['edit-blog-id'] ?? 0;
    const editBlog = JSON.parse(localStorage['blogs'] ?? "[]").find(e => e.blogId == editBlogId);
    if(!editBlog){
        location.pathname = '../index.html';
        return;
    }
    
    if(user.uid != editBlog.authorId){
        location.pathname = '../index.html';
        return;
    }

    document.getElementById('title').value = editBlog.title;
    document.getElementById('tag').value = editBlog.tag;
    document.getElementById('banner-image').value = editBlog.bannerImage;
    editor && editor.setData(editBlog.content)
    

}, {once: true})

function handleDiscard(){
    location.pathname = "../index.html";
}

function handleBlogUpdate(){
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
    const editBlogId = localStorage['edit-blog-id'] ?? 0;
    const blogData = {
        title,
        tag,
        bannerImage,
        content,
        blogId: editBlogId,
        authorId: user.uid,
        authorName: user.fullname,
    }
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blogIndex = blogs.findIndex(e => e.blogId == editBlogId);
    blogs[blogIndex] = blogData;
    localStorage.setItem('blogs', JSON.stringify(blogs));
    delete localStorage['edit-blog-id'];
    window.location.pathname = '../index.html';
}