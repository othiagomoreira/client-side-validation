const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // Pega os valores de cada input
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // Username
    if(usernameValue === '') {
        // Mostra o erro
        // Add error class
        setErrorFor(username, 'Username cannot be blank');
    }else {
        // Add sucess class
        setSucessFor(username);
    };

    // Email
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    }else {
        setSucessFor(email);
    }

    // Password
    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    }else {
        setSucessFor(password);
    }

    // Password Check
    if(password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank');
    }else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Password does not match')
    }else {
        
        setSucessFor(password2);
    }

};

function setErrorFor(input, message) {
    const formControl = input.parentElement; // -> .form-control
    const small = formControl.querySelector('#error');

    // Adiciona a mensagem de error na class small
    small.innerText = message;

    // Adiciona a class error, responsavel por adicionar a borda e mostrar o icon de erro
    formControl.className = 'form-control error';
   

}

function setSucessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control sucess';
}
