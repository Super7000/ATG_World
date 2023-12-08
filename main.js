document.querySelector(".close-sign-up-icon").addEventListener("click",()=>{
    toggleSignUpPopup();
})
document.querySelector(".create-account-container").addEventListener("click",()=>{
    toggleSignUpPopup();
})
function toggleSignUpPopup(){
    document.querySelector(".sign-up-popup").classList.toggle("active");
    document.querySelector(".sign-up-popup-shadow").classList.toggle("active");
    document.querySelector(".close-sign-up-icon").classList.toggle("active");
}


document.querySelector(".sign-up-text .sign-in-link-text").addEventListener("click",()=>{
    let signUpCon = document.querySelector(".sign-up-container");

    if(signUpCon.classList[1] == "sign-up-mode"){
        signUpCon.classList.remove("sign-up-mode");
        signUpCon.classList.add("sign-in-mode");
        
        document.querySelector(".sign-up-heading").innerHTML = "Sign In";
        document.querySelector(".first-name").style.display = "none";
        document.querySelector(".last-name").style.display = "none";
        document.querySelector(".confirm-password").style.display = "none";
        document.querySelector(".first-name").style.display = "none";
        document.querySelector(".sign-up-text .text").innerHTML = `Don’t have an account yet?`;
        document.querySelector(".sign-up-text .sign-in-link-text").innerHTML = `Create new for free!`;
        document.querySelector(".privacy-policy-text").style.display = "none";
        document.querySelector(".forgot-password-link").style.display = "grid";
    } else {
        signUpCon.classList.add("sign-up-mode");
        signUpCon.classList.remove("sign-in-mode");

        document.querySelector(".sign-up-heading").innerHTML = "Create Account";
        document.querySelector(".first-name").style.display = "block";
        document.querySelector(".last-name").style.display = "block";
        document.querySelector(".confirm-password").style.display = "block";
        document.querySelector(".first-name").style.display = "block";
        document.querySelector(".sign-up-text .text").innerHTML = `Already have an account?`;
        document.querySelector(".privacy-policy-text").style.display = "none";
        document.querySelector(".forgot-password-link").style.display = "none";
        document.querySelector(".sign-up-text .sign-in-link-text").innerHTML = `Sign In`;
    }
})


document.querySelectorAll(".options-btn").forEach((optBtn)=>{
    optBtn.addEventListener("click",(event)=>{
        document.querySelector(".option-container").style.cssText = `top: ${event.clientY}px; left: ${event.clientX-160}px; display: grid;`;
    })
})
window.onscroll = ()=>{document.querySelector(".option-container").style.cssText = `display: none;`;}