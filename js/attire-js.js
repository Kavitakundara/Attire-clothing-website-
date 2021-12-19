
      const btn = document.querySelector(".menu-btn");
      btn.addEventListener("click", function () {
        let run = document.querySelector("nav ul");
        let active = run.classList.toggle("active");
  
      })


      //SIGN-UP//
      let signBtn = document.querySelector(".sign-page");
      let closeBtn = document.querySelector(".overlay-popup");

      signBtn.addEventListener("click",function(){
        document.querySelector(".overlay-with-sign-popup").classList.toggle("active");
      })
      closeBtn.addEventListener("click",function(){
        document.querySelector(".overlay-with-sign-popup").classList.remove("active");
      })
   // login-page//
    let loginBtn = document.querySelector(".login-page");
       let closeeBtn = document.querySelector(".overlay-login-popup");

      loginBtn.addEventListener("click",function(){
        document.querySelector(".overlay-with-login-popup").classList.toggle("active");
      })
       closeeBtn.addEventListener("click",function(){
         document.querySelector(".overlay-with-login-popup").classList.remove("active");
       })
   //Confirm-password//


     $('#pass, #cnpass').on('keyup', function () {
      if ($('#pass').val() == $('#cnpass').val()) {
        $('#errors').html('Matching').css('color', 'green');
      } else 
        $('#errors').html('Not Matching').css('color', 'red');
        
    });

// value

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}



