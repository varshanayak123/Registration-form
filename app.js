let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector("#name").value ;
    let email = document.querySelector("#email").value;
    let call = document.querySelector("#call").value;
    let add = document.querySelector("#add").value;
    let tenth = document.querySelector("#tenth").value;
    let twelth = document.querySelector("#twelth").value;
    let experience = document.querySelector("#experience").value;

    let genderselected = document.querySelector('input[name="gender"]:checked');
    let gender;
    if (genderselected ){
        gender=genderselected.value;
    }else{
        gender="Not Selected"
    }

let selectskills = document.querySelectorAll('.skill:checked');
let skill=[];
for (let i=0 ; i<selectskills.length ; i++){
    skill.push(selectskills[i]).value;
};

localStorage.setItem("Name", name);
localStorage.setItem("Email",email);
localStorage.setItem("Phone",call);
localStorage.setItem("Gender",gender);
localStorage.setItem("Skills",skill.join(","));
localStorage.setItem("Address",add);
localStorage.setItem("Tenth",tenth);
localStorage.setItem("Twelth",twelth);
localStorage.setItem("Experience",experience);

alert("The Information is saved Successfully!");

window.location.href="success.html";
});