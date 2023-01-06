function solution(babbling) {
    const list = ["aya", "ye", "woo", "ma"]
    
    const filterLsit = babbling.filter((checkWord)=>{
        const mappingList = []
        
        // list를 순회하면서 들어온 배열 n번째 단어에서 포함하는 값이 있는지 확인 하면서
        // 특정 단어가 들어있는것을 확인했다면 그 해당하는 단어를 저장. 
        list.forEach((item)=>{
            if(checkWord.indexOf(item) != -1){
                mappingList.push(item)
            }
        })
        
        // n번째 체크해야될 단어가 아예 list에 존재하지 않는다면 리턴하지 않음.
        if(mappingList.length > 0){
            let resultStr = checkWord
            mappingList.forEach((mappingStr)=>{
                
                resultStr = resultStr.replace(mappingStr,'')
            })
            return resultStr.length === 0
        }
        
        
        
    })
    const answer = filterLsit.length
    return answer;
}

let start = new Date(); 
console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]) === 1)
let end = new Date();
console.log(end - start )
//코드가 끝난 시간 - 코드를 실행한 시간 수식을 사용하면 코드 실행에 걸린 밀리 초가 나오는데, 나누기 1000을 해주면 밀리초 단위를 초로 바꿔줄 수 있습니다.
console.log((new Date() - start) / 1000)
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]) === 3)