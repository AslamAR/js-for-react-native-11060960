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

function formatArrayStrings(strA1,numbs){

}

processArray([1,2,3,4,5,6,7,8,9,10]);//Passing an array ofnumbers
console.log(numbs);