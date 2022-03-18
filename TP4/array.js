function sum(numbers) {
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

function longuestWord(words) {
    let result = " ";
    for(let word of words){
        if (word.length > result.length){
            result = word;
        }
    }
    return result;
}

function range(min, max, step){
    let result =[];
    let i = 0;
    for (let temp = min; temp < max+1; temp += step ) {
        result[i]=temp;
        i ++
    }
    return result;
}

function nbOccurences(wordList, word){
    let result = 0;
    let list = wordList.split(" ");
    for(let listword of list){
        if (listword == word){
            result++
        }
    }
    return result;
}