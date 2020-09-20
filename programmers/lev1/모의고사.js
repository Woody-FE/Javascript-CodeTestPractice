function solution(answers) {
    var answer = [];
    const first = [1,2,3,4,5];
    const second = [2,1,2,3,2,4,2,5];
    const third = [3,3,1,1,2,2,4,4,5,5];
    var first_score = 0;
    var second_score = 0;
    var third_score = 0;
    let choices = answers.reduce((acc, cur, i) => {
        if (cur === first[i%5]) {
            first_score++;
        }
        if (cur === second[i%8]) {
            second_score++;
        }
        if (cur === third[i%10]) {
            third_score++;
        }
        if (i === answers.length - 1) {
            acc.push(first_score);
            acc.push(second_score);
            acc.push(third_score);
        }
        return acc
    }, [])
    var max_num = Math.max(...choices)
    answer = choices.reduce((acc, cur, i) => {
        if (cur === max_num) {
            acc.push(i+1)
        }
        return acc
    }, [])
    return answer;
}
