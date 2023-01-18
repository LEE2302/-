//영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

//내가푼 코드
function solution(my_string) {
    var answer = '';
    let arr = my_string.split('');
    
    for(let el of arr) {
        if(el !== 'a' && el !== 'e' && el !== 'i' && el !== 'o' && el !== 'u') {
            answer += el;
        }
    }
    return answer;
}

//인기 최고 코드
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

//정규표현식이라고 한다... 알아보기로는 /[aeiou]/g는 aeiou를 제외한 나머지 문자열을 받는거라는 뜻이다.