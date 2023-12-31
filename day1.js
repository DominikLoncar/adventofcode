var fs = require('fs');

let data;

try {  
    data = fs.readFileSync('inputs-day1.txt', 'utf8');
    data = data.toString();    
} catch(e) {
    console.log('Error:', e.stack);
}

let input = data;
input = input.split('\n');



let nums = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
let res = 0;

for (let i = 0; i < input.length; i++) {

  let sentence = input[i];

  let numFront = -1;
  let numBack = -1;
  let numFrontPos = -1;
  let numBackPos = -1;
  // for digit nums

  let numsTextualPositionsArr = [];
  let numTextualFront = -1;
  let numTextualFrontPos = -1;
  let numTextualBack = -1;
  let numTextualBackPos = -1;
  // for textual nums

  let resFront = -1;
  let resBack = -1;
  let resFrontPos = -1;
  let resBackPos = -1;

  // res

  for (let j = 0; j < sentence.length; j++) {

    if (sentence[j] >= "0" && sentence[j] <= "9") { 
      numFront = sentence[j]
      numFrontPos = j;
      break;
    }
  }
  // find digital num front

  for (let j = sentence.length; j >= 0; j--) {
    
    if (sentence[j] >= "0" && sentence[j] <= "9") {
      numBack = sentence[j]
      numBackPos = j;
      break;
    }
  }
  // find digital num back


  for (let j=0; j<nums.length; j++)
  {
    let strStartPos = sentence.search(nums[j]); // finds position of j-th textual number 
    numsTextualPositionsArr.push(strStartPos); // adds it to array
  }
  

  let min = 9999999;
  let max = -1;

  for(let j=0; j<numsTextualPositionsArr.length; j++)
  {
    if(numsTextualPositionsArr[j] < min && numsTextualPositionsArr[j]!== -1)
    {
      min = numsTextualPositionsArr[j]
      numTextualFront = j+1; 
      numTextualFrontPos = min;
    }

    if(numsTextualPositionsArr[j] > max && numsTextualPositionsArr[j]!== -1)
    {
      max= numsTextualPositionsArr[j]
      numTextualBack = j+1; 
      numTextualBackPos = min;
    }
  } // find num textual and their pos for both front and back

  
  if(numFrontPos === -1 || numTextualFrontPos === -1)
  {
    if(numFrontPos <= numTextualFrontPos )
    {
      resFront = numTextualFront;
      resFrontPos = numTextualFrontPos
    }
    else
    {
      resFront = numFront;
      resFrontPos = numFrontPos;
    }


    if(numBackPos <= numTextualBackPos)
    {
      resBack = numTextualBack;
      resBackPos = numTextualBackPos
    }
    else
    {
      resBack = numBack
      resBackPos = numBackPos;
    }

    
  }

  
  else
  {
    if(numFrontPos <= numTextualFrontPos )
    {
      resFront = numFront;
      resFrontPos = numFrontPos
    }
    else
    {
      resFront = numTextualFront
      resFrontPos = numTextualFrontPos
    }


    if(numBackPos >= numTextualBackPos)
    {
      resBack = numBack;
      resBackPos = numBackPos;
    }
    else
    {
      resBack = numTextualBack
      resBackPos = numTextualBackPos
    }

  }


  let tmpRes = parseInt(`${resFront}` + `${resBack}`)



  if(resFrontPos === resBackPos && resFront !== 0 && resBack !== 0)
  {
    tmpRes %= 10;
  }

  res += tmpRes;
  
  console.log(`tmpRes ${tmpRes}`)
  // calculate result


  
  console.log(`numFront ${numFront}`)
  console.log(`numFrontPos ${numFrontPos}`)
  console.log(`numBack ${numBack}`)
  console.log(`numBackPos ${numBackPos}`)

  console.log(`numTextualFront ${numTextualFront}`)
  console.log(`numTextualFrontPos ${numTextualFrontPos}`)
  console.log(`numTextualBack ${numTextualBack}`)
  console.log(`numTextualBackPos ${numTextualBackPos}`)


  console.log(`resFront ${resFront}`)
  console.log(`resBack ${resBack}`)
  console.log(sentence);

  console.log('');
}

console.log(res);