const textInput = document.getElementById("text-input")
const checkButton = document.getElementById("check-btn")
const result = document.getElementById("result")

checkButton.addEventListener("click", () => {
  const lowerReplaced = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "")
  if(textInput.value === ""){
    alert("Please input a value")
  } else if (textInput.value.length === 1){
    result.innerHTML = `<strong>${textInput.value}</strong> este un palindrom.`
  } else if (lowerReplaced === [...lowerReplaced].reverse().join("")){
    result.innerHTML = `<strong>${textInput.value}</strong> este un palindrom.`
  } else {
    result.innerHTML = `<strong>${textInput.value}</strong> nu este un palindrom.`
  }
})