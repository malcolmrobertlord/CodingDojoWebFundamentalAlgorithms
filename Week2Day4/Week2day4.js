// problem 1 nesting arrays

var arr2d = [ [2, 5, 8], 
            [3, 6, 1], 
            [5, 7, 7] ];

function isPresent2d(arr, value) {
    for (var i=0;i<arr.length;i++) {
        for (var j=0;j<arr[i].length;j++) {
            if (arr[i][j] == value) {
            return "true"
            }
        }
    }
    return "false"
}

console.log(isPresent2d(arr2d,9))





// problem 2 flatten arrays

function flatten(arr) {
    var flat = [];
    for (var i=0;i<arr.length;i++) {
        for (var j=0;j<arr[i].length;j++) {
        flat.push(arr2d[i][j])
        }
    }
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]