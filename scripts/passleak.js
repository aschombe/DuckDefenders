import checkPwnedpasswords from 'https://cdn.skypack.dev/check-pwnedpasswords';
let password = document.getElementById("passwordInput")
const textarea = document.createElement("textarea");
password.addEventListener("onclick", async function() {
    let result = await checkPwnedpasswords(password.value);
    if (result) {
        password.innertext = "Password has been pwned " + result + " times";
        // out.innerText = "Password has been pwned " + result + " times";
        // textarea.value = "Password has been pwned " + result + " times.";
    } else {
        password.innertext = "Password is safe";
        // out.innerText = "Password is safe";
        // textarea.value = "Password is safe.";
    }
});
