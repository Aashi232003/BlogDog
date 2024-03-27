

function handleSignup(event){
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
    if(users.find(user => user.email === values.email)){
        alert('User already exists');
        return;
    }
    users.push(values);
    localStorage.setItem('users', JSON.stringify(users));
    window.location.pathname = "index.html"
}