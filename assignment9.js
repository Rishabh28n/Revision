

function findPrimesInRange(startRange,endRange){
    console.log(`prime number form ${startRange} to ${endRange}`);
    for(let number=startRange;number<=endRange;number++){
        if(number>1){
            var isPrime =true;
            for(let divisor=2;divisor<number;divisor++){
                if(number%divisor==0){
                    isPrime=false;
                    break;
                }
                
            }
            if(isPrime){
            console.log(number);
            }
        }
    }
}

findPrimesInRange(1,10);