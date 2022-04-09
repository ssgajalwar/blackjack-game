let largestCountries = ["China","India","USA","Indonesia","Pakistan"]
//insert from beginning
largestCountries.unshift("Tuvalu");
//insert from end
largestCountries.push("Monaco");

//deletes from beginning
largestCountries.shift();
//deletes from end 
largestCountries.pop();


for (let i = 0 ; i < largestCountries.length ; i++){
    console.log(largestCountries[i]);

}
