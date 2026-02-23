// input: two points (x1, y1) and (x2, y2)
// output: slope of the line

export function slope(x1, y1, x2, y2) {
    let rise = y2 - y1;
    let run = x2 - x1;

    return rise / run;
}

// developer test
if (import.meta.main) {
    console.log(slope(0, 0, 2, 2)); // should be 1
}