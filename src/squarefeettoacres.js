// input: square feet
//output: acres

export function squarefeettoacres(squarefeet) {
    const acres = 43560;
    return squarefeet / acres;
}

// developer test
if (import.meta.main) {
    console.log(squarefeettoacres(43560)); // should be 1
}