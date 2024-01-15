import { ref } from "vue";

const validateUserInput = () => {
    const validateInput = (e) => {
        const input = e.target;
      
        const validateEmail = () => {
          if (input.hasAttribute("type") && input.getAttribute("type") === "email") {
            const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/g;
      
            if (input.value.length === 0) {
              input.removeAttribute("data-type");
              invalidEmail.value = "";
            } else if (!regex.test(input.value)) {
              input.setAttribute("data-type", "invalid");
              invalidEmail.value = true;
            } else {
              // console.log(input.value);
              input.setAttribute("data-type", "valid");
              invalidEmail.value = false;
            }
          }
        };
      
        const validatePassword = () => {
          if (
            input.hasAttribute("type") &&
            input.getAttribute("type") === "password"
          ) {
            const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
            if (input.value.length === 0) {
              input.removeAttribute("data-type");
              invalidPassword.value = "";
            } else if (!regex.test(input.value)) {
              input.setAttribute("data-type", "invalid");
              invalidPassword.value = true;
            } else {
              input.setAttribute("data-type", "valid");
              invalidPassword.value = false;
            }
          }
        };
        validateEmail();
        validatePassword();
      
        formValid.value =
          input.value.length !== 0 &&
          !invalidEmail.value &&
          !invalidPassword.value &&
          email.value.length !== 0 &&
          password.value.length !== 0
            ? true
            : false;
      
        // if (!invalidEmail.value && !invalidPassword.value) {
        //   formValid.value = true;
        // } else {
        //   formValid.value = false;
        // }
        console.log("email", invalidEmail.value);
        console.log("password", invalidPassword.value);
      };

    return {
        validateInput
    }
}



export default validateUserInput;