function reverse(arr) {
    var temp=[];
    while(temp.length<arr.length){
        temp.push(arr[arr.length-temp.length-1]);
    }
    return temp;
}

var rev=reverse(["a","b","c","d","e"]);

console.log(rev);