var outArr2 = []
const permutate = (array, eachElements, outArr) => {
    let chr
    
    for (let i = 0; i < eachElements.length; i++) {
        chr = eachElements.splice(i, 1)[0]
        array.push(chr)
        
        if (eachElements.length === 0) {
            outArr.push(array.slice())
        }
        
        permutate(array, eachElements, outArr)
        eachElements.splice(i, 0, chr)
        array.pop()
    }
    return
}

function solution(numbers) {
    var answer = '';
    permutate([], numbers, outArr2)
    var outArr3 = outArr2.map(num => num.join('')).sort()
    answer = outArr3[outArr2.length-1]
    return answer;
}
console.log(solution([6, 10, 2]));
// 테케만 통과