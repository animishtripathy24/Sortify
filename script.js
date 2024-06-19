const arrayContainer = document.getElementById('array-container');
let array = [];

function generateArray() {
    array = [];
    arrayContainer.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${array[i] * 3}px`;
        bar.style.width = `${100 / 50}%`;
        arrayContainer.appendChild(bar);
    }
}

async function bubbleSort() {
    const bars = document.getElementsByClassName('bar');
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                await swap(bars, j, j + 1);
            }
        }
    }
}

async function quickSort(start = 0, end = array.length - 1) {
    if (start >= end) return;
    let index = await partition(start, end);
    await Promise.all([
        quickSort(start, index - 1),
        quickSort(index + 1, end)
    ]);
}

async function partition(start, end) {
    const bars = document.getElementsByClassName('bar');
    let pivotIndex = start;
    let pivotValue = array[end];
    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            await swap(bars, i, pivotIndex);
            pivotIndex++;
        }
    }
    await swap(bars, pivotIndex, end);
    return pivotIndex;
}

async function mergeSort(start = 0, end = array.length - 1) {
    if (start >= end) return;
    const mid = Math.floor((start + end) / 2);
    await mergeSort(start, mid);
    await mergeSort(mid + 1, end);
    await merge(start, mid, end);
}

async function merge(start, mid, end) {
    const temp = [];
    let i = start, j = mid + 1;
    while (i <= mid && j <= end) {
        if (array[i] < array[j]) {
            temp.push(array[i++]);
        } else {
            temp.push(array[j++]);
        }
    }
    while (i <= mid) temp.push(array[i++]);
    while (j <= end) temp.push(array[j++]);
    for (let k = start; k <= end; k++) {
        array[k] = temp[k - start];
        document.getElementsByClassName('bar')[k].style.height = `${array[k] * 3}px`;
        await new Promise(resolve => setTimeout(resolve, 20));
    }
}

async function insertionSort() {
    const bars = document.getElementsByClassName('bar');
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            bars[j + 1].style.height = `${array[j] * 3}px`;
            await new Promise(resolve => setTimeout(resolve, 20));
            j--;
        }
        array[j + 1] = key;
        bars[j + 1].style.height = `${key * 3}px`;
        await new Promise(resolve => setTimeout(resolve, 20));
    }
}

async function selectionSort() {
    const bars = document.getElementsByClassName('bar');
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        await swap(bars, i, minIndex);
    }
}

function swap(bars, i, j) {
    return new Promise(resolve => {
        setTimeout(() => {
            [array[i], array[j]] = [array[j], array[i]];
            bars[i].style.height = `${array[i] * 3}px`;
            bars[j].style.height = `${array[j] * 3}px`;
            resolve();
        }, 20);  // Decreased delay from 100ms to 20ms
    });
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
}

generateArray();
