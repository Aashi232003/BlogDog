window.addEventListener('load', function() {
    const viewBlog = localStorage.getItem('view-blog');
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blog = blogs.find(blog => blog.blogId == viewBlog);
    const userId = JSON.parse(localStorage.getItem('current-user') ?? "{\"uid\": \"0\"}").uid ?? 0
    if (blog) {
        console.log({blog, viewBlog});
        const blogElement = document.getElementById('view-container');
        blogElement.innerHTML = `
            <div class="flex w-full justify-between items-center">
            <h3>By: ${blog.authorName}</h3>
            <a class="btn btn-sm my-2 no-underline" href="../index.html"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400 100 256l144-144M120 256h292"></path></svg>Back</a>
            </div>
            ${userId === blog.authorId ? `<div class="flex flex-row-reverse gap-2">
            <button class="btn btn-sm btn-error text-slate-100" onclick="deleteBlog(${blog.blogId})">Delete</button>
            <button class="btn btn-sm btn-success text-slate-100" onclick="editBlog(${blog.blogId})">Edit</button></div>
            ` : ""}
            <div class="divider"></div>
            <div class="badge badge-primary my-2">${blog.tag}</div>
            <h1>${blog.title}</h1>
            <p>${blog.content}</p>
        `;
    }
})

function deleteBlog(blogID){
    const blogs = JSON.parse(localStorage.blogs ?? "[]");
    localStorage.setItem('blogs',JSON.stringify(blogs.filter(e => e.blogId != blogID)));
    location.pathname = "../index.html";
    console.log(blogID, blogs);
}

function editBlog(blogId){
    localStorage['edit-blog-id'] = blogId;
    location.pathname = 'blog/edit.html';
}