const integers = "1234567890";
const letters  = "abcdefghijklmnopqrstuvwxyz";
const cLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "~!@#$%^&*";

function generatePassword(){
    const inputBox = document.querySelector(".middle input");
    let newPassword = "";
    newPassword+=integers[Math.floor(Math.random()*integers.length)];
    newPassword+=letters[Math.floor(Math.random()*letters.length)];
    newPassword+=cLetters[Math.floor(Math.random()*cLetters.length)];
    newPassword+=symbols[Math.floor(Math.random()*symbols.length)];

    const pattern = integers+letters+cLetters+symbols;
    while(newPassword.length<8){
        newPassword+=pattern[Math.floor(Math.random()*pattern.length)]
    }
    inputBox.value = newPassword;
    return;
}

document.querySelector(".lower button").addEventListener("click",()=>{
    generatePassword();
});

document.querySelector(".middle img").addEventListener("click",()=>{
    const inputBox = document.querySelector(".middle input");
    const password = inputBox.value;

    if (password.trim() !== "") {
        inputBox.select();
        inputBox.setSelectionRange(0, password.length);
        navigator.clipboard.writeText(password);
    }
})