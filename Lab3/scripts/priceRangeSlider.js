
function listenPriceChange(){

    const rangeInput = document.querySelectorAll(".range-input input");
    priceInput = document.querySelectorAll(".price-input input");
    let priceGap = 0;
    
    previousEntries = [parseInt(priceInput[0].value), parseInt(priceInput[1].value)];
    updateBlueBar(previousEntries[0], previousEntries[1], rangeInput);


    priceInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);
            if(maxPrice < minPrice || minPrice > maxPrice){
                priceInput[0].value = previousEntries[0];
                priceInput[1].value = previousEntries[1];
                return;
            }
            
            if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
                updateBlueBar(minVal, maxVal, rangeInput);
            }
        displayProducts();
        previousEntries = [priceInput[0].value, priceInput[1].value]
        });
    });
  
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
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                updateBlueBar(minVal, maxVal, rangeInput);
            }
            displayProducts();
        });
    });
    displayProducts();
}



function updateBlueBar(minVal, maxVal, rangeInput){
    range = document.querySelector(".slider .progress");
    range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
}