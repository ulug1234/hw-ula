let stars = 1;




for (let i = 0; i < 12; i++) {
console.log("*".repeat(stars)); 
  if (stars < 4) {
    stars++;
  } else {
    stars--;
  }
}
