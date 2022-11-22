password = document.getElementById("passwordInput")
password.addEventListener("input", function() {
    passwordLeak(password.value).then(function(result) {
        // password.innerHTML = result;
        console.log(result);
    });
});