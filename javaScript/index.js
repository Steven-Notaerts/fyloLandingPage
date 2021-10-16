/* */
const emailInput = document.getElementsByClassName("get-access__email")[0];
const emailSubmitButton = document.getElementsByClassName(
  "get-access__btn-submit"
)[0];
const error = document.querySelector(".error");
const success = document.querySelector(".succes");

/*add event listener on button*/
emailSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  checkEmail();
});

/* function to check the email adress*/
let checkEmail = () => {
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let value = emailInput.value.trim();

  /*on error */
  if (!value.match(emailFormat)) {
    success.classList.add("hidden");
    error.classList.remove("hidden");
  } 
  //on succes
  else {
    error.classList.add("hidden");
    success.classList.remove("hidden");
    emailInput.value = "";
  }
};