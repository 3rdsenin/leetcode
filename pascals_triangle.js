let result = [];

let generate = (numRows) => {
    for (let i = 1; i <= numRows; i++) {
        let row = i;
        let num = 1;
        let arr = []
        for (let index = 1; index <= row; index++) {

            arr.push(num)

        }
        result.push(arr)
    }
    console.log(result);
};

generate(3);