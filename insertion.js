window.addEventListener('DOMContentLoaded', () => {
    console.log("insertion");

    // Swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
    function swap(el1, el2) {
        console.log('In swap()');
        
        let temp = el1.style.height;
        el1.style.height = el2.style.height;
        el2.style.height = temp;
    }
    
    function disableSortingBtn(){
        document.querySelector("#bubbleSort").disabled = true;
        document.querySelector("#insertionSort").disabled = true;
        document.querySelector("#mergeSort").disabled = true;
        document.querySelector("#selectionSort").disabled = true;
    }
    
    function enableSortingBtn(){
        document.querySelector("#bubbleSort").disabled = false;
        document.querySelector("#insertionSort").disabled = false;
        document.querySelector("#mergeSort").disabled = false;
        document.querySelector("#selectionSort").disabled = false;
    }
    
    function disableSizeSlider(){
        document.querySelector("#sze").disabled = true;
    }
    
    function enableSizeSlider(){
        document.querySelector("#sze").disabled = false;
    }
    
    function enableNewArrayBtn(){
        document.querySelector("#newArray").disabled = false;
    }
    
    function disableNewArrayBtn(){
        document.querySelector("#newArray").disabled = true;
    }
    
    let delay = 260;
    
    let delayElement = document.querySelector('#speed');
    
    delayElement.addEventListener('input', function(){
        console.log(delayElement.value, typeof(delayElement.value));
        delay = 320 - parseInt(delayElement.value);
    });
    
    function waitforme(milisec) { 
        return new Promise(resolve => { 
            setTimeout(() => { resolve('') }, milisec); 
        }) 
    }
    
    async function insertion() {
        console.log('In insertion()');
        // Selecting all bars with class name "bars"
        const arr = document.querySelectorAll(".bars");
        arr[0].style.background = 'lightgreen';
        
        for (let i = 1; i < arr.length; i++) {
            console.log('In ith loop');
            let j = i - 1;
            let key = arr[i].style.height;
            // Color
            arr[i].style.background = 'orange';
        
            await waitforme(delay);
        
            while (j >= 0 && (parseInt(arr[j].style.height) > parseInt(key))) {
                console.log('In while loop');
                // Color
                arr[j].style.background = 'red';
                arr[j + 1].style.height = arr[j].style.height;
                j--;
        
                await waitforme(delay);
        
                // Resetting the color of the sorted part
                for (let k = i; k >= 0; k--) {
                    arr[k].style.background = 'lightgreen';
                }
            }
            arr[j + 1].style.height = key;
            // Reset color
            arr[i].style.background = 'lightgreen';
        }
    }
    
    const insSortBtn = document.querySelector(".insertionSort");
    insSortBtn.addEventListener('click', async function(){
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        await insertion();
        enableSortingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
    });
});
