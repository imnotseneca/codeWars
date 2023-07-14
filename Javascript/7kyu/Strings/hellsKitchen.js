/**
 * 
 * Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.


 */


//PARAMETERS: we receive "a" as a string of words that Gordo Ramsay will say.
//RETURN: We need to return a string of "a" mutated by this rules:
/*
-The words should be CAPS
-Every word should end with '!!!!'
-Any letter 'a' or 'A' should become '@'
-Any other vowel should become '*'
*/
//EXAMPLE:
/*
('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!')
('are you stu pid'), '@R*!!!! Y**!!!! ST*!!!! P*D!!!!')
('i am a chef'), '*!!!! @M!!!! @!!!! CH*F!!!!')
*/
function gordon(a){
    const disaster = a.toUpperCase()
                       .replaceAll('A','@')
                       .replaceAll('E','*')
                       .replaceAll('I','*')
                       .replaceAll('O','*')
                       .replaceAll('U','*')
                       .split(' ')
    for(let i = 0; i < disaster.length; i++) {
      disaster[i] = `${disaster[i]}!!!!`
    }
   return disaster.join(' ')
  }