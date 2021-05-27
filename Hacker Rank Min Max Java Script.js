

function MinMaxSum(arr){
  let minSum= 0
  let maxSum = 0
  let ascendingSortedArray = arr.sort((a,b)=>{
    return a - b
  })
  
  for(let i = 0; i<ascendingSortedArray.length;i++){
    if(i<=3){
      
      minSum += ascendingSortedArray[i]
    }
    if(i>0){
      maxSum += ascendingSortedArray[i]
    }
  }

  console.log(minSum,maxSum)
  
}

console.log(MinMaxSum([11,5,7,13,9]))