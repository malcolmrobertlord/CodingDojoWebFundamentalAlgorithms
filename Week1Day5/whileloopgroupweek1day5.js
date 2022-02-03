
function rev(array) {
    var x=0;
    while(x<array.length/2){
        var temp=array[x];
        array[x]=array[array.length-x-1];
        array[array.length-x-1]=temp;
        x++;
        }
    return (array)
}

var reverse = rev(["a","b","c","d","e"]);

console.log(reverse);