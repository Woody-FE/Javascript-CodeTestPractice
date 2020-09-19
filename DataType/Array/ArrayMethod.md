# Array

## 자주쓰는 메소드정리

1. forEach(item, index, array) - 배열을 순서대로 순환하여 처리함
2. push(item) - 배열의 끝에 항목 추가
3. pop() - 배열의 끝 항목 제거
4. unshift(item) - 배열의 앞에 추가
5. shift() - 배열의 첫 항목 제거
6. indexOf(item) - 해당 항목의 인덱스 찾기
7. lastIndexOf(item) - 일치하는 제일 뒤의 인덱스를 반환, 없으면 -1반환
8. splice(item, n) - 해당 항목의 인덱스부터 n개만큼 항목 삭제,추가 등(원본 배열 수정)을 함
9. slice(start, end) - 시작에서 끝까지의 인덱스를 받아서 얕은 복사본을 새로운 배열 객체로 반환, 원본을 수정하지 않음(시작 인덱스부터 끝인덱스 전까지만 복사)
10. join() - 배열의 모든 요소를 연결해 하나의 문자열로 만듬
11. concat(items) - 기존 배열에 새로운 배열이나 값들을 합쳐서 새 배열을 반환
12. includes(item) - 해당 항목이 있는지 true/false로 판별
13. sort(function) - 배열의 요소를 정렬해주는 메소드(아스키코드순으로 정렬, *제대로 적용하기 위해서는 함수로 정의 필요*)
14. map(function) - 함수의 리턴값을 토대로 새로운 배열을 반환해주는 메소드
15. reduce(acc:누적값, cur:현재값, idx:인덱스, src:원본배열) - 연산처리 결과로 하나의 결과값을 반환하는 메소드
16. reduceRight(acc, cur, idx, src) - 리듀스메소드를 배열의 끝부터 첫지점으로 돌려주는 메소드

## 메소드 사용 예시

- splice

  ```js
  var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
  var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
  
  // myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"] 
  // removed is ["angel", "clown"]
  
  var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
  var removed = myFish.splice(2);
  
  // myFish is ["angel", "clown"] 
  // removed is ["mandarin", "sturgeon"]
  ```

- slice

  ```js
  let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
  let citrus = fruits.slice(1, 3)
  
  // fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
  // citrus contains ['Orange','Lemon']
  ```

- sort

  ```js
  var arr = ["bbb", "ddd", "aaa", "ccc"]; 
  arr.sort();
  
  // ["aaa", "bbb", "ccc", "ddd"]
  
  var arr = [1, 111, 4, 222, 10, 3]; 
  arr.sort(function (a,b){ 
    return a-b; 
  });
  
  // 숫자 오름차순 [1, 3, 4, 10, 111, 222]
  
  var arr = [1, 111, 4, 222, 10, 3]; 
  arr.sort(function (a,b){ 
    return b-a; 
  });
  
  // 숫자 내림차순 [222, 111, 10, 4, 3, 1]
  
  var student = [ 
    {name : "Andrew", age : 21}, 
    {name : "Leo", age : 25}, 
    {name : "Gabriel", age : 19}, 
    {name : "Amy", age : 20}, 
    {name : "David", age : 26}, 
    {name : "Bryan", age : 19} 
  ]
  student.sort(function (a,b){ 
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; 
  });
  
  // 객체 문자열(학생이름) 오름차순
  //[ {name : "Amy", age : 20}, {name : "Andrew", age : 21}, {name : "Bryan", age : 19}, {name : "David", age : 26}, {name : "Gabriel", age : 19}, {name : "Leo", age : 25}]
  
  var student = [ 
    {name : "Andrew", age : 21}, 
    {name : "Leo", age : 25}, 
    {name : "Gabriel", age : 19}, 
    {name : "Amy", age : 20}, 
    {name : "David", age : 26}, 
    {name : "Bryan", age : 19} 
  ]
  student.sort(function (a,b){ 
    return a.name > b.name ? -1 : a.name < b.name ? 1 : 0; 
  });
  
  // 객체 문자열(학생이름) 내림차순
  // [{name : "Leo", age : 25}, {name : "Gabriel", age : 19}, {name : "David", age : 26}, {name : "Bryan", age : 19}, {name : "Andrew", age : 21}, {name : "Amy", age : 20}]
  ```

- map

  ```js
  const oneTwoThree = [1, 2, 3];
  let result = oneTwoThree.map((v) => {
    console.log(v);
    return v;
  });
  // 콘솔에는 1, 2, 3이 찍힘
  oneTwoThree; // [1, 2, 3]
  result; // [1, 2, 3]
  oneTwoThree === result; // false
  
  result = oneTwoThree.map((v) => {
    if (v % 2) {
      return '홀수';
    }
    return '짝수';
  });
  result; // ['홀수', '짝수', '홀수']
  
  let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];
  users.map(({id, age, group}) => `\n${id} ${age} ${group}`).join('')
  // it returns:
  "
  11 23 editor
  47 28 admin
  85 34 editor
  97 28 admin"
  ```

- reduce

  ```js
  // 1. key-value 역전
  let cities = {
    Lyon: 'France',
    Berlin: 'Germany',
    Paris: 'France'
  };
  let countries = Object.keys(cities).reduce((acc, k) => {
    let country = cities[k];
    acc[country] = [...(acc[country] || []), k];
    return acc;
  }, {});
  // countries is
  {
    France: ["Lyon", "Paris"],
    Germany: ["Berlin"]
  }
  
  // 2. array of arrays 펼치기
  let nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  let flat = nested.reduce((acc, it) => [...acc, ...it], []);
  // flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  // 3. 특정 키의 빈도를 포함하는 객체 생성
  let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];
  let groupByAge = users.reduce((acc, it) =>
    ({ ...acc, [it.age]: (acc[it.age] || 0) + 1 }),
  {});
  // groupByAge is {23: 1, 28: 2, 34: 1}
  
  ```

  