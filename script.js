function makeid(l) {
  // write your code here
	 // Define the characters to use for the random string (alphanumeric characters)
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let result = '';

  // Loop to generate a string of length l
  for (let i = 0; i < l; i++) {
    // Select a random character from the characters string
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters[randomIndex];
  }

  return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
