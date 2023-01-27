/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

PREP:
-PARAMTERES: we get "month" as an integer from 1 to 12.
-RETURN: which quarter of the year "month" belongs as an integer number
-EXAMPLE: (quarterOf(3), 1)
*/

const quarterOf = month => {
    return Math.ceil(month/3)
    }
  