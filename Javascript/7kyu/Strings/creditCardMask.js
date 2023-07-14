/**
 * Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
 */


/*
PARAMETERS: we receive "cc" as string.
RETURN: we must return a new string that has all the element masked by "#" excepto for the last four elements.
EXAMPLE:
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"

*/
function maskify(cc) {
    let result = ''
    const split = cc.split('').splice(-4).join('')
    console.log(split)
    if(cc.length < 4) {
      return cc
    }  
  for(let i = 0; i < cc.length; i++) {
    if(i < cc.length - 4) {
      result += '#'
      }
  }
    return result.concat(split)
  }
  