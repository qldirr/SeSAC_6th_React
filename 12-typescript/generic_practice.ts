function arrElement<T>(arr: Array<T>, index: number) {
    if (index > arr.length - 1) return false;
    return arr[index];
}

console.log(arrElement<string>(["a", "b", "c"], 0)); // a
console.log(arrElement<string>(["a", "b", "c"], 5)); // false
