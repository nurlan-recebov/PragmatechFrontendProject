// kodu goster kodlari
function kodGoster() {
    const elem = document.querySelector(".page-card-infologin").children;
    if (elem[4].classList.value == "fa-solid fa-eye-slash") {
        elem[4].classList.add("fa-eye");
        elem[4].classList.remove("fa-eye-slash");
        elem[3].type = "";
    } else {
        elem[4].classList.remove("fa-eye");
        elem[4].classList.add("fa-eye-slash");
        elem[3].type = "password";
    }

}

function checkbox() {
    const check = document.querySelector('.check-box')
    check.classList.toggle('check-box-click')
    const rem = document.querySelector('.rem')
    rem.classList.toggle('checkh')
        // const i = document.querySelector('.check i')
        // i.classList.toggle('cek')
    const elemm = document.querySelector(".check-box").children;
    if (elemm[0].classList.value == "fa-solid fa-checks") {
        elemm[0].classList.add("fa-check");
        elemm[0].classList.remove("fa-checks");
        elemm[0].style.color = 'green'

    } else {
        elemm[0].classList.remove("fa-check");
        elemm[0].classList.add("fa-checks");

    }
    console.log(elemm[0]);
}

function loginlink() {
    document.querySelector('.login-form').style.top = '0px'
    document.querySelector('.signup-form').style.top = '-1100px'
        // document.querySelector('.forgot-form').style.top = '600px'
        // document.querySelector('.signup-form').classList.toggle('bounceDown')

}



function signup() {
    document.querySelector('.login-form').style.top = '-800px'
    document.querySelector('.signup-form').style.top = '0px'
        // document.querySelector('.forgot-form').style.top = '600px'
}

function forgotlink() {
    document.querySelector('.login-form').style.top = '-800px'
        // document.querySelector('.signup-form').style.top = '600px'
    document.querySelector('.forgot-form').style.top = '150px'


}

function loginin() {
    document.querySelector('.login-form').style.top = '0px'
        // document.querySelector('.signup-form').style.top = '600px'
    document.querySelector('.forgot-form').style.top = '-800px'


}

// function nurlan() {
//     document.querySelector("#username").classList.toggle('in')
// }
input = document.querySelector('#password')
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.querySelector("#username").classList.toggle('in')
    }
});