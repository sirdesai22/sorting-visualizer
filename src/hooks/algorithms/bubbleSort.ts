export default function getBubbleSort(array: number[]) {
    const animations: any[] = [];
    const auxiliaryArray = array.slice(); // Create a copy of the array
    bubbleSortHelper(auxiliaryArray, animations); // Perform sorting and populate animations
    return animations;
}

function bubbleSortHelper(array: number[], animations: any[]) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // Push the indices for comparison (for color change)
            animations.push([j, j + 1]);

            // Push the indices to revert color change after comparison
            animations.push([j, j + 1]);

            // If the current element is greater than the next one, swap them
            if (array[j] > array[j + 1]) {
                // Push the indices and values to show the height swap
                animations.push([j, array[j + 1]]);
                animations.push([j + 1, array[j]]);

                // Perform the actual swap in the array
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            } else {
                // If no swap is needed, push the indices and values to keep them unchanged
                animations.push([j, array[j]]);
                animations.push([j + 1, array[j + 1]]);
            }
            // animations.push([j, j + 1]);
        }
    }
}  