export default function getQuickSort(array: number[]) {
    const animations: any[] = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function quickSortHelper(array: number[], start: number, end: number, animations: any[]) {
    if (start >= end) return;
    
    const pivotIndex = partition(array, start, end, animations);
    quickSortHelper(array, start, pivotIndex - 1, animations);
    quickSortHelper(array, pivotIndex + 1, end, animations);
}

function partition(array: number[], start: number, end: number, animations: any[]) {
    // Visualize selecting the pivot
    animations.push([end, end]);
    animations.push([end, end]);
    animations.push([end, array[end]]);
    animations.push([end, array[end]]);

    const pivotValue = array[end];
    let i = start - 1;

    for (let j = start; j <= end - 1; j++) {
        // Compare current element with pivot
        animations.push([j, end]);
        animations.push([j, end]);
        
        if (array[j] < pivotValue) {
            i++;
            // Swap elements
            animations.push([i, array[j]]);
            animations.push([j, array[i]]);
            
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        } else {
            // Push the same values to maintain animation sequence
            animations.push([j, array[j]]);
            animations.push([j, array[j]]);
        }
    }

    // Place the pivot in its correct position
    i++;
    animations.push([i, end]);
    animations.push([i, end]);
    animations.push([i, array[end]]);
    animations.push([end, array[i]]);
    
    const temp = array[i];
    array[i] = array[end];
    array[end] = temp;

    return i;
}