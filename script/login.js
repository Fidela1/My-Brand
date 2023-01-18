
//Toaster message--------------------------------------------------
function myToasterfunction(successfully) {
    console.log('successful:-', successfully)
    var x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML = `${successfully}`;
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
  }
  function errorToasterfunction(successfully) {
    var x = document.getElementById("snackbarFailure");
    x.className = "show";
    x.innerHTML = `${successfully}`;
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
  }
 
//Signin -----------------------------------------------------------
 async function signIn(url = "", data = {}) {
   console.log("url:---", url, "data:---",data)
        const response = await fetch(url, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data),
        });
        return response.json();
      }

const formLogin = document.querySelector(".form-container-login");
      formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        const userInfo = {};
        userInfo.email = formLogin.email.value;
        userInfo.password = formLogin.password.value;
        console.log("userInfo:--",userInfo)
        signIn("http://localhost:3080/api/v1/users/login", userInfo).then((data) => {
           
          if(data.status === "success"){
            console.log("data:---", data)
           
          localStorage.setItem("authData", JSON.stringify(data));
        

            location.href = "admin.html";
          }})
        .catch((err) => {
        
        });
      });