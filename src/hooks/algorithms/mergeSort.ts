export default function getMergeSort(array: number[]) {
    const animations: any = [];
    if (array.length <= 1) return array;

    const auxArray = array.slice();
    mergeSort(array, 0, auxArray.length - 1, auxArray, animations)
    return animations;
}

function mergeSort(mainArray: number[], start: number, end: number, auxArray: number[], animations: any[]) {
    if (start === end) return;
    const mid = Math.floor((start + end) / 2);
    mergeSort(auxArray, start, mid, mainArray, animations)
    mergeSort(auxArray, mid + 1, end, mainArray, animations)
    merge(mainArray, start, mid, end, auxArray, animations);
}

function merge(mainArray: number[], start: number, mid: number, end: number, auxArray: number[], animations: any[]) {
    let k = start;
    let i = start;
    let j = mid + 1;
    while (i <= mid && j <= end) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxArray[i] <= auxArray[j]) {
            animations.push([k, auxArray[i]]);
            mainArray[k++] = auxArray[i++];
        } else {
            animations.push([k, auxArray[j]]);
            mainArray[k++] = auxArray[j++];
        }
    }
    while (i <= mid) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxArray[i]]);
        mainArray[k++] = auxArray[i++];
    }
    while (j <= end) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxArray[j]]);
        mainArray[k++] = auxArray[j++];
    }
}