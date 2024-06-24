
    window.addEventListener('DOMContentLoaded', () => {
        console.log("sorting");
        
        // swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
        function swap(el1, el2) {
            console.log('In swap()');
            
            let temp = el1.style.height;
            el1.style.height = el2.style.height;
            el2.style.height = temp;
            
        }
        
        
        
        // Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
        function disableSortingBtn(){
            document.querySelector("#bubbleSort").disabled = true;
            document.querySelector("#insertionSort").disabled = true;
            document.querySelector("#mergeSort").disabled = true;
            document.querySelector("#selectionSort").disabled = true;
        }
        // Enables sorting buttons used in conjunction with disable
        function enableSortingBtn(){
            document.querySelector("#bubbleSort").disabled = false;
            document.querySelector("#insertionSort").disabled = false;
            document.querySelector("#mergeSort").disabled = false;
            document.querySelector("#selectionSort").disabled = false;
        }
        
        // Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
        function disableSizeSlider()
        {
            document.querySelector("#sze").disabled = true;
        }
        
        // Enables size slider used in conjunction with disable
        function enableSizeSlider(){
            document.querySelector("#sze").disabled = false;
        }
        
        
        //Enables new array buttion
        
        function enableNewArrayBtn(){
            document.querySelector("#newArray").disabled = false;
        }
        //Disabel new Aray 
        function disableNewArrayBtn(){
            document.querySelector("#newArray").disabled = true;
        }
        // Default input for waitforme function (260ms)
        let delay = 260;
        
        // Selecting speed slider from DOM
        let delayElement = document.querySelector('#speed');
        
        // Event listener to update delay time 
        delayElement.addEventListener('input', function(){
            console.log(delayElement.value, typeof(delayElement.value));
            delay = 320 - parseInt(delayElement.value);
        });
        
        //Selecting the slider element
        let arraySize = document.querySelector('#sze');
        
        //console.log(arraySize) ;
        
        // Event listener to update the bars on the UI
        arraySize.addEventListener('input', function(){
        //.value "gets " the value of the slider
            console.log(arraySize.value, typeof(arraySize.value));
            let sizearr=parseInt(arraySize.value);
            
        createNewArray(parseInt(arraySize.value));
            
        });
        
        //creating array for random heights
        let barHeights=[];
        
        //arraySize=parseInt(arraySize.value);
        //console.log(arraySize);
        // for(let i=0;i<arr.size().value;)
        
        // Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
        function waitforme(milisec) { 
            return new Promise(resolve => { 
                setTimeout(() => { resolve('') }, milisec); 
            }) 
        }
        
        
        // Call to display bars right when you visit the site
        createNewArray();
        
        //Disabling sorting buttons and sliders 
        disableSortingBtn();
        //disableSizeSlider();
        
        //Function to create new array
        function createNewArray(nobars=85 ){
        
            //function to delete old bars
            deleteChild();
        
            //array to store random numbers
            for(let i=0;i<nobars;i++){
            var t=Math.floor(Math.random() * 100) + 1;
            barHeights.push(t);
            }
            console.log(barHeights);
        
        
            // select the div #bars element
            const barcontainer = document.querySelector(".bar-container");
            
            //creating nobars divs
            for(let i=0;i<nobars;i++){
            
                const bar = document.createElement("div");
                bar.style.height = `${barHeights[i]*5+15}px`;
                bar.classList.add('bars');
                bar.classList.add('flex-item');
                bar.classList.add(`barNo${i}`);
                barcontainer.appendChild(bar);
            }
            
            
        }
        
        
        // Helper function to delete all the previous bars so that new can be added
        function deleteChild(){
            const barcontainer = document.querySelector("#container");
            barcontainer.innerHTML = '';
        }
        
        //Selecting the new array from the DOM and creating an array and adding EventListener
        const newArray = document.querySelector(".newArray");
        //console.log(newArray);
        newArray.addEventListener('click',function(){
            console.log("newclicked");
            enableSortingBtn();
            enableSizeSlider();
            createNewArray(arraySize.value);
            
            
        })
        
        
        ;})
        