

//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

let num= 0

for(let= i=0; i<100; i++) {
    num +=1
    const multiple3= num%3
    const multiple5= num%5

    if(multiple3===0 && multiple5===0) {
        console.log(`${num} Fizz Buzz`)
    }

    else if(multiple3===0){
        console.log(`${num} Fizz`)
    }

    else if(multiple5===0) {
        console.log(`${num} Buzz`)
    }

    else{
        console.log(num)
    }
}