window.addEventListener('DOMContentLoaded', () => {
    console.log("selection");

    // Swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
    function swap(el1, el2) {
        console.log('In swap()');

        let temp = el1.style.height;
        el1.style.height = el2.style.height;
        el2.style.height = temp;
    }

    function disableSortingBtn() {
        document.querySelector("#bubbleSort").disabled = true;
        document.querySelector("#insertionSort").disabled = true;
        document.querySelector("#mergeSort").disabled = true;
        document.querySelector("#selectionSort").disabled = true;
    }

    function enableSortingBtn() {
        document.querySelector("#bubbleSort").disabled = false;
        document.querySelector("#insertionSort").disabled = false;
        document.querySelector("#mergeSort").disabled = false;
        document.querySelector("#selectionSort").disabled = false;
    }

    function disableSizeSlider() {
        document.querySelector("#sze").disabled = true;
    }

    function enableSizeSlider() {
        document.querySelector("#sze").disabled = false;
    }

    function enableNewArrayBtn() {
        document.querySelector("#newArray").disabled = false;
    }

    function disableNewArrayBtn() {
        document.querySelector("#newArray").disabled = true;
    }

    let delay = 260;

    let delayElement = document.querySelector('#speed');

    delayElement.addEventListener('input', function() {
        console.log(delayElement.value, typeof(delayElement.value));
        delay = 320 - parseInt(delayElement.value);
    });

    function waitforme(milisec) {
        return new Promise(resolve => {
            setTimeout(() => { resolve('') }, milisec);
        })
    }

    async function selection() {
        console.log('In selection()');
        const arr = document.querySelectorAll(".bars");
        for (let i = 0; i < arr.length; i++) {
            console.log('In ith loop');
            let min_index = i;
            // Change color of the position to swap with the next min
            arr[i].style.background = 'blue';
            for (let j = i + 1; j < arr.length; j++) {
                console.log('In jth loop');
                // Change color for the current comparison (in consideration for min_index)
                arr[j].style.background = 'red';

                await waitforme(delay);
                if (parseInt(arr[j].style.height) < parseInt(arr[min_index].style.height)) {
                    console.log('In if condition height comparison');
                    if (min_index !== i) {
                        // new min_index is found so change prev min_index color back to normal
                        arr[min_index].style.background = 'cyan';
                    }
                    min_index = j;
                    // Change the color of the new min element
                    arr[min_index].style.background = 'yellow';
                } else {
                    // if the current comparison is more than min_index change it back to normal
                    arr[j].style.background = 'cyan';
                }
            }
            await waitforme(delay);
            swap(arr[min_index], arr[i]);
            // change the min element index back to normal as it is swapped 
            arr[min_index].style.background = 'cyan';
            // change the sorted elements color to green
            arr[i].style.background = 'green';
        }
        // Change the color of the last element
        arr[arr.length - 1].style.background = 'green';
    }

    const selSortbtn = document.querySelector(".selectionSort");
    selSortbtn.addEventListener('click', async function() {
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        await selection();
        enableSortingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
    });
});
