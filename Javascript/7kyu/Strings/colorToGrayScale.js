/**
 * Grayscale colors in RGB color model are colors that have the same values for Red, Green and Blue. For example, #606060 is a grayscale color, while #FF0055 is not.

In order to correctly convert a color to grayscale, one has to use luminance Y for Red, Green and Blue components. One can calculate luminance Y through the formula introduced in the NTSC standard:

Y = 0.299 * R + 0.587 * G + 0.114 * B
This formula closely represents the average person's relative perception of the brightness of red, green, and blue light.

Given a color in 6-digit hexidecimal notation #RRGGBB in upper case, convert it to grayscale #YYYYYY. The answer should be a string representing the color code in 6-digit hexidecimal notation in upper or lower case.

Round the value of luminance Y to the closest integer.

All inputs will be valid.
 */

/*
-Parameters:

The function takes a "color" code in the 6-digit hexadecimal notation (#RRGGBB) as input.

-Return:

The function returns a string representing the grayscale color code in the same 6-digit hexadecimal notation.

-Example:

Input: "#FF0055"
Output: "#606060"

-Pseudocode:

--Remove the '#' symbol from the color code.
--Convert the color code to decimal values for the Red (R), Green (G), and Blue (B) components.
--Calculate the grayscale value (Y) using the luminance formula: Y = 0.299 * R + 0.587 * G + 0.114 * B.
--Round the grayscale value to the nearest integer.
--Convert the rounded grayscale value back to hexadecimal representation.
--Pad the hexadecimal value if necessary to ensure it has two digits.
--Construct the final grayscale color code by concatenating the hexadecimal value three times (for R, G, and B).
--Return the grayscale color code.
*/


function rgbToGrayscale(color) {
    // Remove the '#' symbol from the color code
    color = color.replace('#', '');
  
    // Convert the color code to decimal values for R, G, and B
    const red = parseInt(color.substring(0, 2), 16);
    const green = parseInt(color.substring(2, 4), 16);
    const blue = parseInt(color.substring(4, 6), 16);
  
    // Calculate the grayscale value using the luminance formula
    const grayscale = Math.round(0.299 * red + 0.587 * green + 0.114 * blue);
  
    // Convert the grayscale value back to hexadecimal representation
    const grayscaleHex = grayscale.toString(16).padStart(2, '0');
  
    // Construct the final grayscale color code
    const grayscaleColor = '#' + grayscaleHex + grayscaleHex + grayscaleHex;
  
    return grayscaleColor;
  }
  
  