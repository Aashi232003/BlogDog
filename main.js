window.addEventListener("load", function () {
  const target = document.querySelector("#blogs-container");
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  if (blogs.length !== 0) {
    target.innerHTML = ``;
  }
  blogs.forEach((element) => {
    target.innerHTML += `<div class="card w-96 bg-base-100 shadow-xl">
        <figure class="w-96 h-[256px]"><img data-tag="${element.tag}" class="max-h-[256px] h-full object-cover" src="${element.bannerImage}" onerror="imageError(this)" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            ${element.title}
          </h2>
          <div class="badge badge-secondary">${element.tag}</div>
          <p class="text-xl font-medium" >${element.authorName}</p>
        </div>
      </div>`;
  });
});

function imageError(target) {
  target.src = `https://source.unsplash.com/random/?${
    target.dataset.tag ?? "blog"
  }`;
}
