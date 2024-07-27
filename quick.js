document.getElementById("quickSort").addEventListener("click", async function () {
    const arrayBars = document.getElementsByClassName("bars");
    let array = Array.from(arrayBars).map(bar => parseInt(bar.style.height));
    const originalColors = Array.from(arrayBars).map(bar => bar.style.backgroundColor);
    const pivotColor = "#FF6347"; // Tomato color for pivot
    const swappedColor = "#32CD32"; // Lime green for swapped elements
    const sortedColor = "#4682B4"; // Steel blue for sorted elements

    async function quickSort(array, left, right) {
        if (left < right) {
            let pivotIndex = await partition(array, left, right);
            await quickSort(array, left, pivotIndex - 1);
            await quickSort(array, pivotIndex + 1, right);
        } else {
            // Change the color to indicate sorted
            for (let k = left; k <= right; k++) {
                arrayBars[k].style.backgroundColor = sortedColor;
            }
        }
    }

    async function partition(array, left, right) {
        let pivot = array[right];
        arrayBars[right].style.backgroundColor = pivotColor;
        let i = left - 1;
        for (let j = left; j < right; j++) {
            if (array[j] < pivot) {
                i++;
                await swap(array, i, j);
            }
        }
        await swap(array, i + 1, right);
        return i + 1;
    }

    function swap(array, i, j) {
        return new Promise(resolve => {
            setTimeout(() => {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;

                // Change the color to indicate swap
                arrayBars[i].style.backgroundColor = swappedColor;
                arrayBars[j].style.backgroundColor = swappedColor;

                // Update heights
                arrayBars[i].style.height = `${array[i]}%`;
                arrayBars[j].style.height = `${array[j]}%`;

                // Revert to original color after a delay
                setTimeout(() => {
                    arrayBars[i].style.backgroundColor = originalColors[i];
                    arrayBars[j].style.backgroundColor = originalColors[j];
                }, speed.value);

                resolve();
            }, speed.value);
        });
    }

    await quickSort(array, 0, array.length - 1);

    // Ensure all bars are colored as sorted
    for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = sortedColor;
    }
});
