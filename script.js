const fillcut = (str, len) => {
  if (str.length === len) {
    return str
  } else if (str.length > len) {
    return str.slice(-len)
  } else {
    const dotsToAdd = len - str.length
    const dots = ".".repeat(dotsToAdd)
    return dots + str
  }
};

document.body.innerHTML += fillcut('sarka', 8) + '<br>';
document.body.innerHTML += fillcut('sarka', 3) + '<br>'; 
document.body.innerHTML += fillcut('sarka', 5) + '<br>'; 
