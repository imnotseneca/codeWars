/**Write a function take_umbrella() that takes two arguments: a string representing the current weather and a float representing the chance of rain today.

Your function should return True or False based on the following criteria.

You should take an umbrella if it's currently raining or if it's cloudy and the chance of rain is over 0.20.
You shouldn't take an umbrella if it's sunny unless it's more likely to rain than not.
The options for the current weather are sunny, cloudy, and rainy.

For example, take_umbrella('sunny', 0.40) should return False.

As an additional challenge, consider solving this kata using only logical operaters and not using any if statements.

 */

const takeUmbrella = (weather, chance) => 
  (weather === "rainy" || (weather === "cloudy" && chance > 0.2)) || (weather === "sunny" && chance > 0.5);

/*
#params:
-we receive "weather" as a string of differentes weathers.
-"chance" is a float number that determines % of raining.
#return: 
-we must return true based on the criteria:
//If it's currently raining or if it's cloudy and "chance" is over 0.2
-We return false if:
//weather is sunny or chances are 0.2 or below
#example:
takeUmbrella('sunny', 0.4), false);
takeUmbrella('rainy', 0), true);
takeUmbrella('cloudy', 0.2), false);
#pseudocode:
-We check if it's "rainy" or if it's "cloudy" with a chance of rain greater than 0.2 to decide whether to take an umbrella.
-We also consider when its "sunny" but the chance of rain is greater than 0.5 to decide to take an umbrella.
*/