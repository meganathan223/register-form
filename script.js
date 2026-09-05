const form = document.querySelector('form');
const signinForm = document.getElementById('signin');
const registerForm = document.getElementById('register');

const username = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');
const signinBtn = document.querySelector('#signin-btn');

const textArea = document.querySelector('#bio');
const charCount = document.querySelector('.charcount')

const formHeader = document.querySelector('.form__header');
const signinh2 = document.querySelector('.signin');
const registerh2 = document.querySelector('.register');

const toRegister = document.querySelector('.to-register');

formHeader.addEventListener('click', function (e) {

    if (e.target.classList.contains('signin')) {
        // signin 

        // border bottom
        signinh2.classList.add('border');
        registerh2.classList.remove('border');

        // signin form active
        signinForm.style.display = 'flex';
        registerForm.style.display = 'none';
    }
    if (e.target.classList.contains('register')) {
        // register 

        //border bottom
        registerh2.classList.add('border');
        signinh2.classList.remove('border');

        // register form active
        registerForm.style.display = 'flex';
        signinForm.style.display = 'none';
    }
})


toRegister.addEventListener('click', function () {
    // register form active
    registerForm.style.display = 'flex';
    signinForm.style.display = 'none';

    //border bottom
    registerh2.classList.add('border');
    signinh2.classList.remove('border');
})


form.addEventListener('input', function (event) {

    if (validateInputs(form.id)) {
        event.preventDefault();
        submitBtn.disabled = true;
        signinBtn.disabled = true;
    }
    else {
        submitBtn.disabled = false;
        signinBtn.disabled = false;
    }

})

function validateInputs(id) {
    const nameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    let isError = false;

    if (id == 'register') {

        if (nameVal === '') {
            isError = true;
            showErrMsg(username, "please enter your name");
        }
        else hideErrMsg(username);
    }

    if (emailVal === '') {
        isError = true;
        showErrMsg(email, "please enter email");
    }
    else if (!validateEmail(emailVal)) {
        isError = true;
        showErrMsg(email, "invalid email");
    }
    else hideErrMsg(email);

    if (passwordVal === '') {
        isError = true;
        showErrMsg(password, "please enter password");
    }
    else if (passwordVal.length < 6) {
        isError = true;
        showErrMsg(password, "password must be atleast 6 characters");
    }
    else hideErrMsg(password);

    return isError;

}

function showErrMsg(element, message) {
    const formSection = element.parentElement;
    const errMsg = formSection.querySelector(".err-msg");

    errMsg.textContent = message;
    element.classList.add("show-err");
}

function hideErrMsg(element) {
    const formSection = element.parentElement;
    const errMsg = formSection.querySelector(".err-msg");

    errMsg.textContent = '';
    element.classList.remove("show-err");
}


const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


// textarea character counter
textArea.addEventListener('input', function () {
    charCount.textContent = textArea.value.length;
})