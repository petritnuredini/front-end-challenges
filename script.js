const form = document.getElementById("credit_card_form");
const cardHolderName = document.getElementById("cardHolderName");
const cardNumber = document.getElementById("cardNumber");
const cardMonth = document.getElementById("cardMonth");
const cardYear = document.getElementById("cardYear");
const cardCVC = document.getElementById("cardCVC");

// Error text
const nameError = document.getElementById("name_error");
const cardBlankError = document.getElementById("card_blank_error");
const cardNumberError = document.getElementById("card_number_error");
const expDateError = document.getElementById("exp_date_error");
const cvcError = document.getElementById("cvc_error");

function isEmpty(str) {
  return !str.trim().length;
}

function allnumeric(inputtxt) {
  var numbers = /^[0-9]+$/;
  if (inputtxt.value.match(numbers)) {
    return true;
  } else {
    return false;
  }
}

const onFormSubmit = (e) => {
  e.preventDefault();
  console.log("Holder Name", cardHolderName.value);

  let preventSubmit = true;

  //   Card Holder Name
  if (isEmpty(cardHolderName.value)) {
    nameError.classList.remove("hide_element");
    cardHolderName.classList.add("error_input");
    preventSubmit = true;
  } else {
    nameError.classList.add("hide_element");
    cardHolderName.classList.remove("error_input");
    preventSubmit = false;
  }

  //   Card number blank
  if (isEmpty(cardNumber.value)) {
    cardBlankError.classList.remove("hide_element");
    cardNumber.classList.add("error_input");
    preventSubmit = true;
  } else if (!allnumeric(cardNumber)) {
    cardBlankError.classList.add("hide_element");
    cardNumberError.classList.remove("hide_element");
    cardNumber.classList.add("error_input");
    preventSubmit = true;
  } else {
    cardNumberError.classList.add("hide_element");
    cardBlankError.classList.add("hide_element");
    cardNumber.classList.remove("error_input");
    preventSubmit = false;
  }

  //   EXP MM
  if (isEmpty(cardMonth.value)) {
    expDateError.classList.remove("hide_element");
    cardMonth.classList.add("error_input");
    preventSubmit = true;
  } else {
    expDateError.classList.add("hide_element");
    cardMonth.classList.remove("error_input");
    preventSubmit = false;
  }

  //   EXP YY
  if (isEmpty(cardYear.value)) {
    expDateError.classList.remove("hide_element");
    cardYear.classList.add("error_input");
    preventSubmit = true;
  } else {
    expDateError.classList.add("hide_element");
    cardYear.classList.remove("error_input");
    preventSubmit = false;
  }

  //   Card CVC
  if (isEmpty(cardCVC.value)) {
    cvcError.classList.remove("hide_element");
    cardCVC.classList.add("error_input");
    preventSubmit = true;
  } else {
    cvcError.classList.add("hide_element");
    cardCVC.classList.remove("error_input");
    preventSubmit = false;
  }

  if (preventSubmit === false) {
    console.log("Continue..");
    form.classList.add("hide_element");
    document.getElementById("completed_state").classList.remove("hide_element");
    document.getElementById("card_image_numbers").innerText = cardNumber.value;
    document.getElementById("card_image_name").innerHTML = `
      <p class="card_holder" id="card_image_name">
        ${cardHolderName.value}<span id="card_image_expiration"> ${cardMonth.value}/${cardYear.value}</span>
      </p>
    `;

    document.getElementById("card_image_cvc").innerText = cardCVC.value;
  }

  //   console.log("Card Number", cardNumber.value);
  //   console.log("Month", cardMonth.value);
  //   console.log("Year", cardYear.value);
  //   console.log("cardCVC", cardCVC.value);
};

document.getElementById("continueButton").addEventListener("click", () => {
  form.classList.remove("hide_element");
  document.getElementById("completed_state").classList.add("hide_element");
  cardHolderName.value = "";
  cardNumber.value = "";
  cardMonth.value = "";
  cardYear.value = "";
  cardCVC.value = "";
});

form.addEventListener("submit", onFormSubmit);
