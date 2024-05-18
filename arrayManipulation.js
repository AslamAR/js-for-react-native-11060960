var numbs = [0, 0, 0];

function processArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            numbs[i] = nums[i] ** 2; // Square even numbers
        } else {
            numbs[i] = nums[i] * 3; // Multiply odd numbers by 3
        }
    }
}

function formatArrayStrings(stringArray,numbs){
for(i =0 ;i<stringArray.length;i++){
    if(numbs[i]%2 === 0){
        stringArray[i]=stringArray[i].toUpperCase();
    }
    else
      stringArray[i]=stringArray[i].toLowerCase();
}
console.log(stringArray);
}






