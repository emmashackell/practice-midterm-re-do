// Input: width, length (metres), rate (square metres per minute)
// output: minutes to mow

export function lawnmowing(length, width, rate) {
    let area = width * length;
    let minutes = area / rate;
    return minutes;
}

// developer test
if (import.meta.main) {
    console.log(lawnmowing(10, 20, 5)); // 40 minutes
}