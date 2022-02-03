function reverse(arr) {
    var temp=[];
    for(var i=0; i<arr.length;i++){
        temp.push(arr[arr.length-i-1]);
    }
    return temp;
}

var rev=reverse(["a","b","c","d","e"]);

console.log(rev)