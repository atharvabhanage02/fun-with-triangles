const sides = document.querySelectorAll(".sides")
const checkBtn = document.querySelector(".check-btn")
const output = document.querySelector(".output")

function sumOfSquares(a,b){
    const sum = a*a + b*b;
    return sum;
}

function calculateHypotenuse(){
    const sum = sumOfSquares(Number(sides[0].value),Number(sides[1].value))
    const result = Math.sqrt(sum);
    output.innerText = "The length of Hypotenuse is " + result + "cm";
}

checkBtn.addEventListener("click",calculateHypotenuse)

