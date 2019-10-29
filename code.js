let number = 23737278888277227;

console.log ( "function return",getLargestBinaryGap(number))

function getLargestBinaryGap(number){
let count = 0;
let binary = number.toString(2);
let largestBinaryGap = 0;
console.log('binary is ', binary)
for(let i = 0 ; i < binary.length -1 ; i ++ )
{
        if(binary[i ] === '0'){
                count++;
                
        }
        if(binary[i] === '1'){
                console.log('count before 0', count);
                if(largestBinaryGap< count)
                {
                        largestBinaryGap = count
                }
                count = 0;
        }
}

console.log("largest binary gap ", largestBinaryGap);

return largestBinaryGap;
}


