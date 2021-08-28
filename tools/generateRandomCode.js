function sample(data){
const index = Math.floor(Math.random() * data.length)

return data[index]
}

function generateRandomCode(){
  const numbers = "1234567890"
  const lowercases = "abcdefghijklmnopqrstuvwxyz"
  const uppercases = lowercases.toUpperCase()
  const collection = numbers + lowercases + uppercases

  let randomCode = ""
  for(let i = 0; i < 5; i++ ){
     randomCode += sample(collection)
  }

  return randomCode
}

module.exports = generateRandomCode