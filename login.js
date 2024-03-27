

function handleLogin(event){
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let values = Object.fromEntries(formData);

    // Validation
    for(let key in values){
        if(!values[key].trim()){
            alert(`Please enter ${key}`);
            return;
        }
        if(key === 'email' && !values[key].includes('@')){
            alert('Please enter a valid email');
            return;
        }
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(users, values);
    if(!users.find(user => user.email === values.email && user.password === values.password)){
        alert('Invalid Credentials');
        return;
    }
    localStorage.setItem('current-user', JSON.stringify(values));
    window.location.pathname = "index.html"
}