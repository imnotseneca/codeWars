/**
 * The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

-PREP:
-PARAMETERS: we receive "sperm" as a string of letters who represent choromosomes, it could hold "XX" or "XY"
-RETURN: we must return a string message that is conditioned by "sperm" value, if its "XX" we send "Congratulations! You\'re going to have a daughter.", else "Congratulations! You\'re going to have a son."

 */

const chromosomeCheck = sperm => sperm === "XX" ? "Congratulations! You\'re going to have a daughter." : "Congratulations! You\'re going to have a son."