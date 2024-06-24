document.getElementById("quickSort").addEventListener("click", async function () {
    const arrayBars = document.getElementsByClassName("bars");
    let array = Array.from(arrayBars).map(bar => parseInt(bar.style.height));

    async function quickSort(array, left, right) {
        if (left < right) {
            let pivotIndex = await partition(array, left, right);
            await quickSort(array, left, pivotIndex - 1);
            await quickSort(array, pivotIndex + 1, right);
        }
    }

    async function partition(array, left, right) {
        let pivot = array[right];
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

                arrayBars[i].style.height = `${array[i]}%`;
                arrayBars[j].style.height = `${array[j]}%`;

                resolve();
            }, speed.value);
        });
    }

    await quickSort(array, 0, array.length - 1);
});
