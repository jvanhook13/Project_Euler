//we need fibbonaci terms 012358....4million
    //start with fibarray of 0,1,2,3,5
    //function that takes out a and b, where a and b are the last index of fibarray and the previous index fibarray into an array and adds them to give C then push C to our fib array
    //then need to check if C is even and log it



let fibArray = [0,1,2,3,5]
var evens = []





function fib (number) {

    let terms = fibArray.slice(-2)
    let lastTerm = fibArray.slice(-1)
    console.log(lastTerm , "last")
     console.log(terms)
     let newTerm = terms.reduce((a,b) => a*1+b*1 , 0)
     fibArray.push(newTerm)
     console.log(newTerm , "new")
    

    if (newTerm >= number) {

        fibArray.pop(-1)
        console.log(fibArray , "done")
        checkArray()
        console.log(evens , "evens")

        let answer = evens.reduce((a,b) => a+b , 0)
        console.log(answer)

        return ;


    } else {

        fib(number)
    }
    

}


function checkArray () {

    for (var i = 0 ; i < fibArray.length ; i++) {

        if(fibArray[i]%2 !== 0) {

            continue ;


        } else {

            evens.push(fibArray[i])
            
        }


    }



}


fib(4000000)