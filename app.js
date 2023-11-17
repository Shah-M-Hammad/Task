function showPassword() {

    let password = document.getElementById("showPassword");

    if(password.type === "password"){

        password.type = "text";

    }

    else {
        
        password.type = "password";

    }
}