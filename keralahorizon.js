document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector(".header .navbar");

    document.querySelector("#menu-btn").onclick = () => {
        navbar.classList.add("active");
    };

    document.querySelector("#nav-close").onclick = () => {
        navbar.classList.remove("active");
    };

    let searchForm = document.querySelector(".search-form");

    document.querySelector("#search-btn").onclick = () => {
        searchForm.classList.add("active");
    };

    document.querySelector("#close-search").onclick = () => {
        searchForm.classList.remove("active");
    };

    window.onscroll = () => {
        navbar.classList.remove("active");
        searchForm.classList.remove("active");

        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }
        else{
            document.querySelector('.header').classList.remove('active');
        }
    };

    window.onload = () => {
        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }
        else{
            document.querySelector('.header').classList.remove('active');
        }
    };

    var swiper = new Swiper(".home-slider", {
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000, 
        },
    });

    // Show or hide the login form when the user clicks on the user icon
    const loginFormContainer = document.querySelector("#login-form-container");
    const signupFormContainer = document.querySelector("#signup-form-container");
    const userIcon = document.querySelector(".fa-solid.fa-user");
    const signupLink = document.querySelector(".login-form-container .signupContainer a");
    const loginLink = document.querySelector(".signup-form-container .form-footer a");

    userIcon.onclick = () => {
        if (loginFormContainer.style.display === "block") {
            loginFormContainer.style.display = "none";
        } else {
            loginFormContainer.style.display = "block";
        }
        signupFormContainer.style.display = "none"; // Hide the signup form
    };

    signupLink.onclick = () => {
        if (signupFormContainer.style.display === "block") {
            signupFormContainer.style.display = "none";
        } else {
            signupFormContainer.style.display = "block";
        }
        loginFormContainer.style.display = "none"; // Hide the login form
    };

    loginLink.onclick = () => {
        signupFormContainer.style.display = "none"; // Hide the signup form
        loginFormContainer.style.display = "block"; // Show the login form
    };

});

function func() {
    var email = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (email == "Bhavika" && pass == "123456") {
      alert("sucessfully login ");
      window.location.href = "keralahorizon.html"
    } else {
      alert("Invalid Credentials");
    }
  }