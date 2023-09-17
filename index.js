const email = document.getElementById("email");
const password = document.getElementById("password");
const otpNumber = document.getElementById("otpNumber");
const loginBtn = document.getElementById("loginBtn");
const otpBtn = document.getElementById("otpBtn");
const waring = document.getElementById("waring");
const otp = document.getElementById("otp");

const justInfo = {
  eml: "shakil@.com",
  pass: "0000",
  otpNum: 0,
};
loginBtn.onclick = () => {
  const eml = email.value;
  const pass = password.value;
  const otp = Number(otpNumber.value);

  if (eml !== "" && pass !== "" && otp !== "") {
    if (eml === justInfo.eml && pass === justInfo.pass && otp === otpNum) {
      window.location = "logout.html";
    } else {
      waring.innerText = "Your Informetion is not Correct ...";
      waring.style.color = "green";
    }
  } else {
    waring.innerText = "Please fillup Your Informetion ... ";
    waring.style.color = "red";
  }
};
otpBtn.onclick = () => {
  otpNum = Math.floor(Math.random() * 10000);
  otp.innerText = otpNum;
};
