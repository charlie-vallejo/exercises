
var twoSum = function (nums, target) {
    let arrResult =[]
    let element;
    let numAux;
    let element2;
    loop1:
        for (let index = 0; index < nums.length; index++) {
            element = nums[index];
            numAux = [...nums];
             numAux.splice(index, 1)
            loop2:
                for (let index2 = 0; index2 < numAux.length; index2++) {
                    element2 = numAux[index2];
                    console.log(element + ' + ' + element2 + ' = ' + (element2 + element))
                    if ((element2 + element) === target) {
                        console.log('[' + nums.indexOf(element) + ',' + nums.indexOf(element2) + ']')
                        arrResult.push(nums.indexOf(element))
                        arrResult.push(nums.indexOf(element2))
                        break loop1;
                    }
                }
            console.log("")
        }
    return arrResult;
};

nums = [2, 7, 11, 15], target = 9

console.log(twoSum(nums, target))