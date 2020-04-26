var numbers = []



function multiples (number) {

    for(var i = 0 ; i < number+1 ; i++) {

        

        if (i%3 === 0 && i%5 === 0) {

            console.log(i , "both")

            numbers.push(i)


        } else if (i%3 === 0) { 

            console.log(i , "3")
            numbers.push(i)


        } else if (i%5 === 0) {

            console.log(i , "5")
            numbers.push(i)

        }

    }


    console.log(numbers , "numbers")

    sum()

}

function sum () {

    var answer = numbers.reduce( (a,b) => a+b , 0)
  
      console.log(answer , "answer")
  
  }





multiples(1000)

