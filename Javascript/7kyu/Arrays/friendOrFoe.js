/**Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.

 */


const friend = (friends) => friends.filter(name => name.length === 4) 


/*
params: we receive "friends" as an array of strings.
return: we must return the "friends" array filtered with names with length === 4
example:
friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
pseudocode:

*/