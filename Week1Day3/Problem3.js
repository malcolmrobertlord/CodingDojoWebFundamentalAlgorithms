
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// your code here!
    function countPos(arr){
        
        var countPositives = 0;

        for(var i=0;i<arr.length;i++){
            if(arr[i]>0){
                countPositives++;
            }
        }
        return countPositives
    }

    var count = countPos(numbers);
    
console.log("there are " + count + " positive values");
