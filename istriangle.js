const inputs = document.querySelectorAll(".angles")
const checkBtn = document.querySelector(".check-btn")
const output = document.querySelector(".output")

function calculateSumofAngles(angle1,angle2,angle3){
    const sum = angle1 + angle2 + angle3;
    return sum;
}

function calculateIsTriangle(){
    const sumofAngles = calculateSumofAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumofAngles==180){
        output.innerText = "Yesss!! It is a Triangle"
    }else{
        output.innerText = "Opps! It's not a triangle ...Try another values of angles"
    }
}

checkBtn.addEventListener("click",calculateIsTriangle)