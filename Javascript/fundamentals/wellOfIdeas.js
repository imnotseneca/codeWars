//PREP:
//PARAMETERS: we get "x" as an array of word strings.
//RETURN: we must return strings after evaluates the elements in the array. 
//Example: ['bad', 'bad', 'bad']), 'Fail!');
const well = x => {
  const count = x.filter(e => e == 'good').length;
  return count < 1 ? 'Fail!' : 
         count < 3 ? 'Publish!' : 'I smell a series!';
}

// function well(x){
//     let goodOnes = 0;
//     for(const idea of x) {
//       if(idea === 'good') goodOnes +=1;
//     }
//     if(goodOnes > 2) return "I smell a series!";
//     if(goodOnes > 0) return 'Publish!';
//     return "Fail!"
//     }