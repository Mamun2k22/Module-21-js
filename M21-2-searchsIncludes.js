// 1. Apply to srarch any elemennt from array
/*
const lyrics ='I Love allah';
const doesExit = lyrics.includes ('allah');
console.log(doesExit);
*/
// 2. Apply to srarch any elemennt from array and show all lowercase with (multiple variable):

/*
const lyrics ='I Love allah';
const searchSreing = 'Allah';
const searchSreinglower = searchSreing.toLocaleLowerCase();
const doesExit = lyrics.includes(searchSreinglower);
console.log(doesExit);
*/
// Index of element
const lyrics ='I Love allah';
const searchSreing = 'Allah';
const searchSreinglower = searchSreing.toLocaleLowerCase();
const doesExit = lyrics.includes(searchSreinglower);
console.log(doesExit);
console.log(lyrics.indexOf('Loveou'));//check of element index
console.log(lyrics.startsWith('Ai')); // Start Hoiche kinka check kore
// Endswith()