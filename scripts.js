const btnRef = document.querySelector('.btn');
const addRef = document.getElementById('add');
const subRef = document.getElementById('sub');
const mulRef = document.getElementById('mul');
const divideRef = document.getElementById('divide');
const mainDivRef = document.querySelector('.container');
const afterDivRef = document.querySelector('.container-after');
const backBtn = document.getElementById('backBtn');
let oneInput = document.getElementById('one-input');
let secondInput = document.getElementById('second-input');
let calcBtn = document.getElementById('calcBtn');
let resultRef = document.getElementById('result');

addRef.addEventListener('click', () => {
    mainDivRef.style.display = "none";
    afterDivRef.style.display = "flex";
    evaluateType(1);
    oneInput.style.backgroundColor = "rgb(74, 255, 110)";
    secondInput.style.backgroundColor = "rgb(74, 255, 110)";
    resultRef.style.backgroundColor = "rgb(66, 129, 64)";
})
subRef.addEventListener('click', () => {
    mainDivRef.style.display = "none";
    afterDivRef.style.display = "flex";
    evaluateType(2);
    oneInput.style.backgroundColor = "rgb(240, 96, 96)";
    secondInput.style.backgroundColor = "rgb(240, 96, 96)";
    resultRef.style.backgroundColor = "rgb(135, 48, 48)";
})
mulRef.addEventListener('click', () => {
    mainDivRef.style.display = "none";
    afterDivRef.style.display = "flex";
    evaluateType(3);
    oneInput.style.backgroundColor = "rgb(226, 172, 71)";
    secondInput.style.backgroundColor = "rgb(226, 172, 71)";
    resultRef.style.backgroundColor = "rgb(184, 128, 44)";
})
divideRef.addEventListener('click', () => {
    mainDivRef.style.display = "none";
    afterDivRef.style.display = "flex";
    evaluateType(4);
    oneInput.style.backgroundColor = "rgb(130, 130, 255)";
    secondInput.style.backgroundColor = "rgb(130, 130, 255)";
    resultRef.style.backgroundColor = "rgb(37, 37, 78)";
})
backBtn.addEventListener('click', () => {
    afterDivRef.style.display = "none";
    mainDivRef.style.display = "block";
    oneInput.value = "";
    secondInput.value = "";
    resultRef.innerHTML = "";
})
const evaluateType = (value) => {
    if (value === 1) { calcBtn.addEventListener('click', () => { resultRef.innerHTML = (Number(oneInput.value) + Number(secondInput.value)) }); }
    else if (value === 2) { calcBtn.addEventListener('click', () => { resultRef.innerHTML = `${oneInput.value - secondInput.value}` }); }
    else if (value === 3) { calcBtn.addEventListener('click', () => { resultRef.innerHTML = `${oneInput.value * secondInput.value}` }); }
    else { calcBtn.addEventListener('click', () => { resultRef.innerHTML = `${oneInput.value / secondInput.value}` }); }
}

