/**
 * 
 * Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

-PREP
-PARAMETERS: we receive "humanYears" as a number integer  parameter which holds a number value.
-RETURN: we must return an array with 3 elements [humanYears,catYears,dogYears]. Transformin the last two elements varying on first element value:
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
-EXAMPLE:
(humanYearsCatYearsDogYears(1), [1,15,15])
(humanYearsCatYearsDogYears(2), [2,24,24])
(humanYearsCatYearsDogYears(10), [10,56,64])


 */

const humanYearsCatYearsDogYears = function(humanYears) {
  if(humanYears === 1) {
   return [1,15,15]; 
  }  
  else if(humanYears === 2) {
   return [2,24,24]; 
  }
  else if (humanYears > 2) {
    return [humanYears, 24 + ((humanYears - 2) * 4), 24 + ((humanYears - 2) * 5)]
  }
  
}
