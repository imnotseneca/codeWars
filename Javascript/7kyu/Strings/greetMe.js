/**Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!" */

const greet = name => {
    const nameFix = name.toLowerCase()
      return `Hello ${nameFix.slice(0,1).toUpperCase()}${nameFix.slice(1)}!`
  }