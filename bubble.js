window.addEventListener('DOMContentLoaded', () => {
    console.log("bubble");
    
    // Swap function util for sorting algorithms, takes input of 2 DOM elements with .style.height feature
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
    
    function disableSizeSlider() {
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
    
    // Selecting speed slider from DOM
    let delayElement = document.querySelector('#speed');
    
    // Event listener to update delay time 
    delayElement.addEventListener('input', function(){
        console.log(delayElement.value, typeof(delayElement.value));
        delay = 320 - parseInt(delayElement.value);
    });
    
    function waitforme(milisec) { 
        return new Promise(resolve => { 
            setTimeout(() => { resolve('') }, milisec); 
        }) 
    }
    
    async function bubble() {
        console.log('In bubble()');
        // Selecting all bars with class name "bars"
        const arr = document.querySelectorAll(".bars");
        for(let i = 0; i < arr.length - 1; i++ ){
            for(let j = 0; j < arr.length - 1 - i; j++ ){
                arr[j].style.background = '#FFD700'; // Yellow
                arr[j + 1].style.background = '#FF4500'; // Orange Red
                if(parseInt(arr[j].style.height) > parseInt(arr[j + 1].style.height)){
                    console.log('IF CONDITION TRUE');
                    await waitforme(delay);
                    swap(arr[j], arr[j + 1]);
                }
                arr[j].style.background = '#1E90FF'; // Dodger Blue
                arr[j + 1].style.background = '#1E90FF'; // Dodger Blue
            }
            arr[arr.length - 1 - i].style.background = '#32CD32'; // Lime Green
        }
        arr[0].style.background = '#32CD32'; // Lime Green
    }
    
    const bubSortbtn = document.querySelector(".bubbleSort");
    bubSortbtn.addEventListener('click', async function(){
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        await bubble();
        enableSortingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
    });
});
