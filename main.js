//1 - What to wear
function clothesToWear(temperature){

    if (temperature === 20){
        return 'thin jacket'
    }

    else if (temperature < 17 && temperature > 14)
        return 'coat'

    else if (temperature <= 10)
        return 'winterjacket, boots and gloves'

    else if (temperature > 20 && temperature < 30)
        return 'shorts and t-shirt'
}
console.log(clothesToWear());

//Dice game
function randomNumber(dice){
    for (let i = 0; i < dice; i++){
    console.log("hi")
        //random number
    }

}
console.log(randomNumber(30))

