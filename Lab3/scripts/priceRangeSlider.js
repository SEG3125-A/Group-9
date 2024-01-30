maxNumber = 10;
minNumber = 0;

function listenPriceChange(){
    const rangeInput = document.querySelectorAll(".range-input input");
    let averageText = document.querySelector(".average-price");
    let minText = document.querySelector('.input-min');
    let maxText = document.querySelector('.input-max')
    let priceGap = 0;
    
    previousEntries = [minNumber, maxNumber];
    updateBlueBar(previousEntries[0], previousEntries[1], rangeInput);


    rangeInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
            if((maxVal - minVal) < priceGap){
                if(e.target.className === "range-min"){
                    rangeInput[0].value = maxVal - priceGap
                }else{
                    rangeInput[1].value = minVal + priceGap;
                }
            }else{
                minText.textContent = minVal;
                maxText.textContent = maxVal;
                range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
            displayProducts();
            averageText.textContent = "Average price: " + (minVal+maxVal)/2;
        });
    });
    displayProducts();
}



function updateBlueBar(minVal, maxVal, rangeInput){
    range = document.querySelector(".slider .progress");
    range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
}



document.addEventListener('DOMContentLoaded', function () {
    // Set the initial values for the range inputs
    document.querySelector('.range-min').value = 0;
    document.querySelector('.range-max').value = 40;

    const rangeMinInput = document.querySelector('.input-min');
    const rangeMaxInput = document.querySelector('.input-max');

    rangeMinInput.value = 0;
    rangeMaxInput.value = 40;

    console.log(rangeMinInput);

    // Reset the thumb position
    resetThumbPosition('.range-min');
    resetThumbPosition('.range-max');
});

function resetThumbPosition(selector) {
    const rangeInput = document.querySelector(selector);
    const thumbPosition = ((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100;
    
    rangeInput.style.setProperty(`--${selector}-thumb-position`, `${thumbPosition}%`);
}