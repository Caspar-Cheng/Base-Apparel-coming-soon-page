function checkMail(){
    const input = document.querySelector(".email");
    const error = document.querySelector(".error");
    const success = document.querySelector(".success");
    const format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.length === ""){
        input.style.border = "2px solid hsl(54, 74%, 51%)";
        error.style.display = "block";
    } else if (input.value.match(format)){
        error.style.display = "none";
        input.style.border = "2px solid hsl(0, 36%, 70%)";
        success.style.display = "block";
        input.value = "";
    } else {
        input.style.border = "2px solid hsl(54, 74%, 51%)";
        error.style.display = "block";
    }
}