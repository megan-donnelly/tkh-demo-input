const strShortner = () => {
    let s = document.getElementById("my-unique-input").value;

    let output = ''
    for (let i = 0; i < s.length; i += 7) {
      const letter = s[i]
      output += letter
    }
    
    document.getElementById("my-unique-output").innerText = output
    return output
  }
  
//   const beforeString = '0123456789'
//   const afterString = strShortner(beforeString)
//   console.log(`This is the output: "${afterString}"`)