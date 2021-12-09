// https://www.hackerrank.com/challenges/one-month-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

const lonelyInt = (a) => {
    for (let i = 0; i < a.length; i++) {
        if (a.lastIndexOf(a[i]) === i && a.indexOf(a[i]) === i){
            return a[i]
        } else{
            continue
        }
    }
    return "What? How?"   
}

// const test = [1,1,2]

// console.log(lonelyInt(test))

const flipBits = (int) => {
    const bitWise = int.toString(2).split('').map((x)=> {
        return Number(x)
    })
    while(bitWise.length < 32){
        bitWise.unshift(0)
    }
    const fullBit = bitWise.map(x => {
        if (x===1){
            return 0
        } else if (x===0){
            return 1
        }
    }).join('')
    return parseInt(fullBit, 2)
    
}

flipBits(9)