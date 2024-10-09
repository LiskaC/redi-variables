const twinSistersAges = 26
const brothersAge = 17

// example: Log the total age of the sisters:

const totalAgeOfTwinSisters = twinSistersAges * 2

console.log(totalAgeOfTwinSisters)
// OR:
console.log('the total age of the twin sisters is: ' + totalAgeOfTwinSisters)
// (would actually usually do this:):
console.log(`the total age of the twin sisters is: ${totalAgeOfTwinSisters}`)

// ________________________________________________________________________

// 1. Log the age difference between the sisters and the brother:
const ageDifference = twinSistersAges - brothersAge
console.log(ageDifference)

// ________________________________________________________________________
const ageToGetIntoClub = 18

// 2. Log whether the sisters can get into the club:
const sistersCanEnter = twinSistersAges >= ageToGetIntoClub
console.log(sistersCanEnter)

// ________________________________________________________________________

// 3. Log the total age of all the siblings, with the text 'The total age of all the siblings is': 
const totalAge = (twinSistersAges * 2) + brothersAge
console.log('The total age of all the siblings is :', totalAge)

// ________________________________________________________________________

// 4. Log whether the brother and sisters can all get into the club together:
const everyoneCanGo = (twinSistersAges > ageToGetIntoClub) && (brothersAge > ageToGetIntoClub)
console.log('Can everyone get into the club together? The answer is...', everyoneCanGo)

// ________________________________________________________________________

// 5. Log whether the total age of the sisters, divided by the total number of siblings, is greater
//    than the brother's age:
const isGreater = ((twinSistersAges * 2) / 3) > brothersAge
console.log('is it greater? ', isGreater)

// ________________________________________________________________________

// 6. Log whether the brother's age, multiplied by the total number of siblings, is 'smaller than
//    or equal to' the sisters' combined age:
const isSmallerOrEqualTo = (brother * 3) <= (twinSistersAges * 2)
console.log('So, is it?', isSmallerOrEqualTo)

// ________________________________________________________________________

// 7. Log a sister saying her age in the sentence 'Hurrah, I am xxxxx years old, I can go in da Club!'
console.log('Hurrah, I am ' + twinSistersAges + ' years old, I can go in da Club!')

