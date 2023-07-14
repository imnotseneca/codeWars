// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

// So for this head: "------/------" you shoud return:

// ["-------------", "Unicorn"]

function bald(x){
    let arr = ['','']
    let hairCount = 0;
    for(let i = 0; i < x.length; i++) {
      if(x[i] === '/') {
        hairCount +=1;
      }
    }
    if(hairCount === 0) {
      arr[1] = 'Clean!'
    } else if(hairCount === 1) {
      arr[1] = 'Unicorn!'
    } else if (hairCount === 2) {
      arr[1] = 'Homer!'
    } else if (hairCount > 2 && hairCount <= 5) {
      arr[1] = 'Careless!'
    } else {
      arr[1] = 'Hobo!'
    }
    arr[0] = '-'.repeat(x.length)
    return arr
  }