const button = document.querySelector(".btn");
const pass = document.querySelector(".password");

const generatePassword = (length) => {
    const chars = "0123456789abcdefghijklmnopqrstuvwx!@#$%^&*?|";
    let password = "";
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * chars.length);
        password += chars[index];
    }
    return password;
};

// console.log(generatePassword(10)); // Example test in console

button.addEventListener("click", (event) => {
    event.preventDefault();
    const length = Number(document.querySelector(".length").value);
    if(length <=0){
        alert("You have to put positive ")
    }else{
        pass.textContent = generatePassword(length);
    }
});
