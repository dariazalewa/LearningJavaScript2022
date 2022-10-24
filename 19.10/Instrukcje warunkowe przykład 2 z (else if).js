let age = prompt('Ile masz lat?');

if(age < 18) {
    console.log("Niestety nie możesz pić alkoholu ani w Polsce ani USA.");
} else if(age < 21) {
    console.log("Możesz już legalnie pić alkohol w Polsce, ale w USA jeszcze nie.");
} else {
    console.log("Możesz pić alkohol i w Polsce i USA.");
}