const fs = require('fs')

const fsPromises = async(fileName) => {
  try{
    await fs.promises.writeFile(fileName, "Hello")

    let text = await fs.promises.readFile(fileName, 'utf-8')
    console.log(text)

    await fs.promises.appendFile(fileName, '\nGood night')

    text = await fs.promises.readFile(fileName, 'utf-8')
    console.log(text)

    await fs.promises.unlink(fileName)

  }
  catch(error){
    console.log(error)
  }
}

console.log("Start...")
fsPromises('text.txt')
console.log("End...")