

function handleLogin(event){
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let values = Object.fromEntries(formData);
    const submitBtn = form.querySelector('button.submit');
    submitBtn.querySelector('span').classList.add('loading' ,'loading-infinity' ,'loading-lg');

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
    let usr = users.find(user => user.email === values.email && user.password === values.password)
    if(!usr){
        alert('Invalid Credentials');
        return;
    }
    localStorage.setItem('current-user', JSON.stringify(usr));
    submitBtn.querySelector('span').classList.remove('loading' ,'loading-infinity' ,'loading-lg');

    window.location.pathname = "index.html"
}