

function handleSignup(event){
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
    if(users.find(user => user.email === values.email)){
        alert('User already exists');
        return;
    }
    const uid = Date.now()
    users.push({...values, uid});
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('current-user', JSON.stringify({...values, uid}));
    submitBtn.querySelector('span').classList.remove('loading' ,'loading-infinity' ,'loading-lg');

    window.location.pathname = "index.html"
}