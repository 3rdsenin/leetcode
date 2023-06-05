let nums = [6, 5, 7, 8, 9, 3]
let target = 10;

var twoSum = function(nums, target) {
    let hashmap = new Map();
    for (index = 0; index < nums.length; index++) {
        let num = nums[index];
        let diff = target - num;
        if (hashmap.has(diff)) {
            return [hashmap.get(diff), index];
        } else {
            hashmap.set(num, index);
        }
    }

};