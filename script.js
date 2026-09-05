const form = document.querySelector('form');
const username = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');

const textArea = document.querySelector('#bio');
const charCount = document.querySelector('.charcount')

const formh2 = document.querySelector('.form__header');
const loginh2 = document.querySelector('.login');
const registerh2 = document.querySelector('.register');

formh2.addEventListener('click', function (e) {
    console.log(e.target)
    if (e.target.classList.contains('login')) {
        loginh2.classList.add('border');
        registerh2.classList.remove('border');
    }
    if (e.target.classList.contains('register')) {
        registerh2.classList.add('border');
        loginh2.classList.remove('border');
    }
})

form.addEventListener('input', function (event) {

    if (validateInputs()) {
        event.preventDefault();
        submitBtn.disabled = true;
    }
    else {
        submitBtn.disabled = false;
    }

})

function validateInputs() {
    const nameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    let isError = false;



    if (nameVal === '') {
        isError = true;
        showErrMsg(username, "please enter your name");
    }
    else hideErrMsg(username);

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