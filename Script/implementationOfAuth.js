import { signIn, signOutUsingGoogle, signUp, signUpWithoutCredentials, customOnAuthStateChanged } from "./googleAuth.js";

function signInFunc(user) {
    //Sign in state
    signUpPopUp.querySelector(".sign-out-state").style.cssText = "display: none"
    signUpPopUp.querySelector(".sign-in-state").style.cssText = "display: grid"

    document.querySelector(".menubar .account-container .bold-text").innerHTML = `<img src="${user.providerData[0].photoURL}" class="avatar">` + user.displayName + `<img src="Icons/downArrow.svg">`;


    // updateing profile details
    signUpPopUp.querySelector(".sign-in-state .profile-details .uid div").innerHTML = user.providerData[0].uid
    signUpPopUp.querySelector(".sign-in-state .profile-details .name div").innerHTML = user.providerData[0].displayName
    signUpPopUp.querySelector(".sign-in-state .profile-details .email div").innerHTML = user.providerData[0].email
    signUpPopUp.querySelector(".sign-in-state .profile-pic").innerHTML = `<img style="border-radius: 1rem" src="${user.providerData[0].photoURL}">`
}

function signOutFunc() {
    //Sign out state
    signUpPopUp.querySelector(".sign-out-state").style.cssText = "display: grid"
    signUpPopUp.querySelector(".sign-in-state").style.cssText = "display: none"

    document.querySelector(".menubar .account-container .bold-text").innerHTML = `Create account.<span style="color: #2F6CE5;">&nbsp;It’s
                    free!</span>
                <img src="Icons/downArrow.svg">`
}

customOnAuthStateChanged(signInFunc, signOutFunc)



// Sign up with Google
document.querySelector(`.google-sign-up.auth-sign-up`).addEventListener('click', signUpWithoutCredentials);

const signUpPopUp = document.querySelector(".sign-up-popup");
signUpPopUp.querySelector(".create-account-btn").addEventListener('click', () => {
    if (signUpPopUp.classList.toString().indexOf("sign-up-mode") !== -1) {
        // log in mode

        //verifying inputs
        let email = signUpPopUp.querySelector(".email").value.trim();
        let password = signUpPopUp.querySelector(".password").value.trim();
        if (email === '' || password === '') {
            alert("Please fill all the fields");
            return;
        }

        signIn(email, password);
    } else {
        // sign up mode

        //verifying inputs
        let name = signUpPopUp.querySelector(".first-name").value.trim() + ' ' + signUpPopUp.querySelector(".last-name").value.trim()
        let email = signUpPopUp.querySelector(".email").value.trim();
        let password = signUpPopUp.querySelector(".password").value.trim();
        let confirmPassword = signUpPopUp.querySelector(".confirm-password").value.trim();
        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            alert("Please fill all the fields");
            return;
        }
        if (password !== confirmPassword) {
            alert("Password and confirm password do not match");
            return;
        }

        signUp(email, password);
    }
})

document.querySelector(".log-out-btn.auth-sign-up").addEventListener('click', signOutUsingGoogle)