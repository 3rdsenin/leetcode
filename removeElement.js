let k = [];
let nums = [3, 2, 2, 3];
let val = 3;
var removeElement = function(nums, val) {
    nums.forEach(element => {
        if (val !== element) {
            k.push(element);
        }
    })
    console.log(k);
};

removeElement(nums, val);