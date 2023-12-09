/* Function to show and hide sign up popup box */ 
function toggleSignUpPopup() {
    document.querySelector(".sign-up-popup").classList.toggle("active");
    document.querySelector(".sign-up-popup-shadow").classList.toggle("active");
    document.querySelector(".close-sign-up-icon").classList.toggle("active");
}


/* Function to toggle between sign up mode and Sign In mode */
function toggleSignUp() {
    let signUpPopUp = document.querySelector(".sign-up-popup");
    if (signUpPopUp.classList.toString().indexOf("sign-up-mode") !== -1) {
        signUpPopUp.classList.remove("sign-up-mode");
        signUpPopUp.classList.add("sign-in-mode");
        
        if (window.innerWidth >= 768) {
            document.querySelector(".sign-up-heading").innerHTML = "Sign In";
        } else {
            document.querySelector(".sign-up-heading").innerHTML = "Welcome Back!";
        }
        document.querySelector(".sign-up-text .text").innerHTML = `Don’t have an account yet?`;
        document.querySelector(".sign-up-text .sign-in-link-text").innerHTML = `Create new for free!`;
        document.querySelector(".sign-up .create-account-btn").innerHTML = `Sign In`;
        document.querySelector(".submit-btn-container u").innerHTML = "or, Create Account";


    } else {
        signUpPopUp.classList.add("sign-up-mode");
        signUpPopUp.classList.remove("sign-in-mode");

        document.querySelector(".sign-up-heading").innerHTML = "Create Account";
        document.querySelector(".sign-up-text .text").innerHTML = `Already have an account?`;
        document.querySelector(".sign-up-text .sign-in-link-text").innerHTML = `Sign In`;
        document.querySelector(".sign-up .create-account-btn").innerHTML = `Create Account`;
        document.querySelector(".submit-btn-container u").innerHTML = "or, Sign In";
    }
}


/* function that execute onClickFuntion on click of each elements of arrayOfClassBtns*/
function customClickListener(arrayOfClassOfBtns, onClickFuntion) {
    arrayOfClassOfBtns.forEach((className) => {
        document.querySelector(className).addEventListener("click", onClickFuntion);
    })

}

let arrayOfClassOfBtnsForSignUpPopUp = [".close-sign-up-icon", ".create-account-container", ".top-join-group-btn", ".create-post-btn"];
customClickListener(arrayOfClassOfBtnsForSignUpPopUp, toggleSignUpPopup)


let arrayOfClassOfBtnsForSignUpToggle = [".sign-up-text .sign-in-link-text", ".submit-btn-container u"];
customClickListener(arrayOfClassOfBtnsForSignUpToggle, toggleSignUp)

/* changing pen icon to cross icon when cursor is pesent in the location nput box*/
document.querySelector(".location-input-box").addEventListener("focus", () => {
    document.querySelector(".location-right-icon").src = "Icons/crossWithoutBorder.svg";
})

/* changing cross icon to pen icon when cursor is not pesent in the location nput box*/
document.querySelector(".location-input-box").addEventListener("focusout", () => {
    document.querySelector(".location-right-icon").src = "Icons/filledPen.svg";
})


/* funtion to make appear of option box when 3 dot option btn is clicked in each post*/
document.querySelectorAll(".options-btn").forEach((optBtn) => {
    optBtn.addEventListener("click", (event) => {
        optBtn.classList.add("active");
        document.querySelector(".option-container").style.cssText = `top: ${event.clientY}px; left: ${event.clientX - 160}px; display: grid;`;
    })
})

/* funtion to make disappear of option box when users scrolls*/
window.onscroll = () => {
    document.querySelector(".option-container").style.cssText = `display: none;`;
    try {
        document.querySelector(".options-btn.active").classList.remove("active");
    } catch (err) {

    }
}