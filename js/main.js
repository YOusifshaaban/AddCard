var userName = window.prompt("Enter Your Name");
console.log("Your Name Is :", userName);

var ageUser = window.prompt("Enter Your Age !");
console.log("You Entered :", ageUser);


var cartona = " "
if (ageUser >= 18) {
    for (var i = 1; i <= 100; i++) {
        cartona += `<div class="card" style="width: 16.5rem;" id="cardo">
        <img src="./img/received_1079850682942019.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${userName} ${i}</h5>
            <p class="card-text">Hello Dear I'm Here To Help You And Your Age Is : ${ageUser}</p>
            <a href="#" class="btn btn-primary">Continue</a>
        </div>
    </div>`

    }
    document.getElementById("demo").innerHTML = cartona;

}
else {
    document.getElementById("demo").innerHTML = "<h1>you are not eligible to log the website</h1>";
}

