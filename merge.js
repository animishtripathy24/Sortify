    window.addEventListener('DOMContentLoaded', () => {
        console.log("merge");
        
        
            // swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
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
        
        
        function disableSizeSlider()
        {
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
        
        
        async function merge(arr, low, mid, high){
            console.log('In merge()');
            console.log(`low=${low}, mid=${mid}, high=${high}`);
            const n1 = mid - low + 1;
            const n2 = high - mid;
            console.log(`n1=${n1}, n2=${n2}`);
            let left = new Array(n1);
            let right = new Array(n2);
        
            for(let i = 0; i < n1; i++){
                await waitforme(delay);
                console.log('In merge left loop');
                console.log(arr[low + i].style.height + ' at ' + (low+i));
                // color
                arr[low + i].style.background = 'white';
                left[i] = arr[low + i].style.height;
            }
            for(let i = 0; i < n2; i++){
                await waitforme(delay);
                console.log('In merge right loop');
                console.log(arr[mid + 1 + i].style.height + ' at ' + (mid+1+i));
                // color
                arr[mid + 1 + i].style.background = 'lightgreen';
                right[i] = arr[mid + 1 + i].style.height;
            }
            await waitforme(delay);
            let i = 0, j = 0, k = low;
            while(i < n1 && j < n2){
                await waitforme(delay);
                console.log('In merge while loop');
                console.log(parseInt(left[i]), parseInt(right[j]));
                
                // To add color for which two r being compared for merging
                
                if(parseInt(left[i]) <= parseInt(right[j])){
                    console.log('In merge while loop if');
                    // color
                    if((n1 + n2) === arr.length){
                        arr[k].style.background = 'orange';
                    }
                    else{
                        arr[k].style.background = 'orange';
                    }
                    
                    arr[k].style.height = left[i];
                    i++;
                    k++;
                }
                else{
                    console.log('In merge while loop else');
                    // color
                    if((n1 + n2) === arr.length){
                        arr[k].style.background = 'orange';
                    }
                    else{
                        arr[k].style.background = 'orange';
                    } 
                    arr[k].style.height = right[j];
                    j++;
                    k++;
                }
            }
            while(i < n1){
                await waitforme(delay);
                console.log("In while if n1 is left");
                // color
                if((n1 + n2) === arr.length){
                    arr[k].style.background = 'orange';
                }
                else{
                    arr[k].style.background = 'orange';
                }
                arr[k].style.height = left[i];
                i++;
                k++;
            }
            while(j < n2){
                await waitforme(delay);
                console.log("In while if n2 is left");
                // color
                if((n1 + n2) === arr.length){
                    arr[k].style.background = 'lightgreen';
                }
                else{
                    arr[k].style.background = 'lightgreen';
                }
                arr[k].style.height = right[j];
                j++;
                k++;
            }
        }
        
        async function mergeSort(ele, l, r){
            console.log('In mergeSort()');
            if(l >= r){
                console.log(`return cause just 1 elemment l=${l}, r=${r}`);
                return;
            }
            const m = l + Math.floor((r - l) / 2);
            console.log(`left=${l} mid=${m} right=${r}`, typeof(m));
            await mergeSort(ele, l, m);
            await mergeSort(ele, m + 1, r);
            await merge(ele, l, m, r);
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        const mergeSortbtn = document.querySelector(".mergeSort");
        mergeSortbtn.addEventListener('click', async function()
        {
            let arr = document.querySelectorAll('.bars');
            let l = 0;
            let r = parseInt(arr.length) - 1;
        disableSortingBtn();
            disableSizeSlider();
            
            disableNewArrayBtn();
            await mergeSort(arr, l, r);
            enableSortingBtn();
            enableSizeSlider();
            enableNewArrayBtn();
        
        });
        
        
        })