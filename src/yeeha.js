// input: integer
// output: string based on divisibility

export function yeeHa(number) {
    if (number % 3 === 0 && number % 7 === 0) {
        return "Yeeha";
    } else if (number % 3 === 0) {
        return "Yee";
    } else if (number % 7 === 0) {
        return "Ha";
    } else {
        return "nada";
    }
}

// developer test
if (import.meta.main) {
    console.log(yeeHa(21)); // yee ha
}
    