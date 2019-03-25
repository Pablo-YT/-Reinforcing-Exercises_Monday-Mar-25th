/*print "lowercase" if the string is all lowercase
print "long" if the string is more than 4 characters
print "long and lowercase" if the string's length is more than 4 characters and it's all lowercase
otherwise print the string itself*/

const list = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"]
const islowercase  = letter => 'abcdefghijklmnopqrstuvwxyz'.split('').includes(letter)


//clairty > brevity

function displayResults() {

    for(i in list){
        let word = list[i]
        if (word.length > 4 && islowercase(word[i])){
            console.log("Long and lowercase")
        }else if (word.length > 4){
            console.log("long")
        }else if (islowercase(word[i])){
            console.log("lowercase")
        }else {
            console.log(word)
        }
    }
}


displayResults()