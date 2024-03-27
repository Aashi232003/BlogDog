const onloadFN = (e) => {
  console.log("loaded");
  const target = document.querySelector("body > header");
  if (
    location.pathname.includes("login") ||
    location.pathname.includes("signup")
  ) {
    target.innerHTML = `<div class="navbar bg-base-100">
    <div class="navbar-start">
      <img src="assets/images/logo.png" alt="logo" class="w-12 h-12 me-2" />
<a class="font-bold text-2xl">Blog Dog</a>
    </div>

    <div class="navbar-end flex gap-2">
      <a class="btn btn-outline" href="index.html">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 576 512"
          class="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
          ></path></svg
        >Home</a
      >
    </div>
  </div>`;
    return;
  }

  if (location.pathname.includes("index") || location.pathname === "/") {
    const user = JSON.parse(localStorage.getItem("current-user")) || null;
    console.log(user);
    target.innerHTML = ` <div class="navbar bg-base-100">
    <div class="navbar-start">
    
      <img src="assets/images/logo.png" alt="logo" class="w-12 h-12 me-2" />
<a class="font-bold text-2xl">Blog Dog</a>
    </div>
    
    <div class="navbar-end flex gap-2 pe-3">
      ${
        user
          ? `<h3 class="text-2xl font-medium inline">${
              user.fullname ?? "Error"
            }</h3><div class="dropdown dropdown-bottom dropdown-end">
          <div tabindex="0" role="button" class="btn btn-circle"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button></div>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a class="btn btn-sm" href="blog/create.html">Create Blog</a></li>
          <li><a class="btn btn-sm my-2" href="blog/creations.html">My Blogs</a></li>
          <li><a class="btn btn-sm btn-error text-slate-100" onclick="handleLogout()">Logout</a></li>
          </ul>
        </div>`
          : `<a class="btn btn-outline" href="login.html">Login</a>
          <a class="btn btn-secondary" href="signup.html">Sign Up</a>`
      }
    </div>
  </div>`;
  }
  if (location.pathname.includes("create") || location.pathname.includes("edit")) {
    const user = JSON.parse(localStorage.getItem("current-user")) || null;
    console.log(user);
    target.innerHTML = ` <div class="navbar bg-base-100">
    <div class="navbar-start">
      <img src="../assets/images/logo.png" alt="logo" class="w-12 h-12 me-2" />
<a class="font-bold text-2xl">Blog Dog</a>
    </div>
    
    <div class="navbar-end flex gap-2">
      ${
        user
          ? `<h3 class="text-2xl font-medium inline">${
              user.fullname ?? "Error"
            }</h3><div class="dropdown dropdown-bottom dropdown-end">
          <div tabindex="0" role="button" class="btn btn-circle"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button></div>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a class="btn btn-sm my-2" href="../index.html"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400 100 256l144-144M120 256h292"></path></svg>Back</a></li>
          <li><a class="btn btn-sm btn-error text-slate-100" onclick="handleLogout()">Logout</a></li>
          </ul>
        </div>`
          : `<a class="btn btn-outline" href="login.html">Login</a>
          <a class="btn btn-secondary" href="signup.html">Sign Up</a>`
      }
    </div>
  </div>`;
  }
  if (location.pathname.includes("creations")) {
    const user = JSON.parse(localStorage.getItem("current-user")) || null;
    console.log(user);
    target.innerHTML = ` <div class="navbar bg-base-100">
    <div class="navbar-start">
      <img src="../assets/images/logo.png" alt="logo" class="w-12 h-12 me-2" />
<a class="font-bold text-2xl">Blog Dog</a>
    </div>
    
    <div class="navbar-end flex gap-2">
      ${
        user
          ? `<h3 class="text-2xl font-medium inline">${
              user.fullname ?? "Error"
            }</h3><div class="dropdown dropdown-bottom dropdown-end">
          <div tabindex="0" role="button" class="btn btn-circle"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button></div>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a class="btn btn-sm" href="create.html">Create Blog</a></li>
          <li><a class="btn btn-sm my-2" href="../index.html"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400 100 256l144-144M120 256h292"></path></svg>Back</a></li>
          <li><a class="btn btn-sm btn-error text-slate-100" onclick="handleLogout()">Logout</a></li>
          </ul>
        </div>`
          : `<a class="btn btn-outline" href="login.html">Login</a>
          <a class="btn btn-secondary" href="signup.html">Sign Up</a>`
      }
    </div>
  </div>`;
  }
  if (location.pathname.includes("view")) {
    const user = JSON.parse(localStorage.getItem("current-user")) || null;
    console.log(user);
    target.innerHTML = ` <div class="navbar bg-base-100">
    <div class="navbar-start">
      <img src="../assets/images/logo.png" alt="logo" class="w-12 h-12 me-2" />
<a class="font-bold text-2xl">Blog Dog</a>
    </div>
    
    <div class="navbar-end flex gap-2">
      ${
        user
          ? `<h3 class="text-2xl font-medium inline">${
              user.fullname ?? "Error"
            }</h3><div class="dropdown dropdown-bottom dropdown-end">
          <div tabindex="0" role="button" class="btn btn-circle"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button></div>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a class="btn btn-sm" href="create.html">Create Blog</a></li>
          <li><a class="btn btn-sm my-2" href="../index.html"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400 100 256l144-144M120 256h292"></path></svg>Back</a></li>
          <li><a class="btn btn-sm btn-error text-slate-100" onclick="handleLogout()">Logout</a></li>
          </ul>
        </div>`
          : `<a class="btn btn-outline" href="../login.html">Login</a>
          <a class="btn btn-secondary" href="../signup.html">Sign Up</a>`
      }
    </div>
  </div>`;
  
}
};

function handleLogout() {
  localStorage.removeItem("current-user");
  location.pathname = "index.html";
}
window.addEventListener("load", onloadFN);
