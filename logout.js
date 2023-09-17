const work = document.getElementById("work");
const time = document.getElementById("time");
const workHours = document.getElementById("workHours");
const addBtn = document.getElementById("addBtn");
const waring = document.getElementById("waring");
let students = [];

addBtn.onclick = () => {
  const value1 = work.value;
  const value2 = time.value;
  const value3 = workHours.value;
  if (value1 !== "" && value2 !== "" && value3 !== ""){
    const object = {
      newWork: value1,
      newTime: value2,
      newHours: value3,
    };
    students.push(object);
    work.value = "";
    time.value = "";
    workHours.value = "";
    waring.innerText = "";
  } else {
    waring.innerText = "Please fillup Your Informetion ... ";
    waring.style.color = "red";
  }

  list();
};

const list = () => {
  const sheet = document.getElementById("sheet");
  sheet.innerHTML = "";
  for (const student of students) {
    const li = document.createElement("li");
    li.innerHTML = `
    <div class="card" style="border:2px solid gray; width:40%; display:flex;">
    <h6 class="list"> ${student.newWork}  =  ${student.newTime}  =  ${student.newHours}</h6>
    </div>`;
    sheet.appendChild(li);
  }
};
