function solution(array, commands) {
    var answer;
    answer = commands.reduce((acc, cur) => {
        let currentArray = array.slice(cur[0]-1, cur[1])
        currentArray.sort(function(a,b) {
            return a-b;
        })
        acc.push(currentArray[cur[2]-1])
        return acc
    }, [])
    return answer;
}