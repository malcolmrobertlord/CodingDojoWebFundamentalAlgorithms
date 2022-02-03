
function rev(array) {
for (var x=0;x<array.length/2;x++){
    var temp=array[x];
    array[x]=array[array.length-x-1];
    array[array.length-x-1]=temp;
    }
    return (array)
}

var reverse = rev(["a","b","c","d","e"]);

console.log(reverse);