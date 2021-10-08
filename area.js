const sides = document.querySelectorAll(".sides")
const checkBtn = document.querySelector(".check-btn")
const output = document.querySelector(".output")

function calculateArea(){
    const area = 0.5*(Number(sides[0].value)*Number(sides[1].value));
    output.innerText = "The Area of triangle is " + area +"cm²"
}

checkBtn.addEventListener("click",calculateArea)

