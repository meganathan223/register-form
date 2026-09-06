// const form = document.querySelectorAll('form');
const signinForm = document.getElementById('signin');
const registerForm = document.getElementById('register');

const username = document.querySelector('#name');
const email1 = document.querySelector('.email-1');
const pw1 = document.querySelector('.pw-1');
const email2 = document.querySelector('.email-2');
const pw2 = document.querySelector('.pw-2');

const submitBtn = document.querySelector('#submit-btn');
const signinBtn = document.querySelector('#signin-btn');

const textArea = document.querySelector('#bio');
const charCount = document.querySelector('.charcount')

const formHeader = document.querySelector('.form__header');
const signinh2 = document.querySelector('.signin');
const registerh2 = document.querySelector('.register');

const toRegister = document.querySelector('.to-register');

// header section signin, register form, highlight border activate
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


// to create account, open register
toRegister.addEventListener('click', function () {
    // register form active
    registerForm.style.display = 'flex';
    signinForm.style.display = 'none';

    //border bottom
    registerh2.classList.add('border');
    signinh2.classList.remove('border');
})


// form validation
const section = document.querySelector('.sections');
section.addEventListener('click', function (event) {

    // console.log('section', event.target, event.target.id, event.target.form)
    // console.log(event.target.form.id, 'form name')
    const sectionForm = event.target.form;
    if (sectionForm.id == 'signin') {
        sectionForm.addEventListener('input', function (event) {
            startValidate(event, sectionForm.id, email1, pw1);
        })
    }
    if (sectionForm.id == 'register') {
        sectionForm.addEventListener('input', function (event) {
            startValidate(event, sectionForm.id, email2, pw2);
        })
    }
})

function startValidate(event, id, email, pw) {
    // console.log('validate starts')
    if (validateInputs(id, email, pw)) {
        // console.log('validating errors')
        event.preventDefault();
        submitBtn.disabled = true;
        signinBtn.disabled = true;
    }
    else {
        submitBtn.disabled = false;
        signinBtn.disabled = false;
    }
}

function validateInputs(id, email, password) {
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

// notification
const registerN = document.querySelector('.register-n');
const signinN = document.querySelector('.signin-n');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault()
    registerForm.style.display = 'none';
    signinForm.style.display = 'none';
    registerN.style.display = 'block';

})

signinBtn.addEventListener('click', function (event) {
    event.preventDefault()
    registerForm.style.display = 'none';
    signinForm.style.display = 'none';
    signinN.style.display = 'block';

})
