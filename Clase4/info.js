const fs = require('fs')

const createInfo = async () =>{
  try{
    let package = await fs.promises.readFile('package.json', 'utf-8')
    let { size } = await fs.promises.stat('package.json')

    const info = {
      content: package,
      contentObj: JSON.parse(package),
      size
    }

    console.log(info)

    await fs.promises.writeFile('./info.json', JSON.stringify(info, null, '\t'))

  }
  catch(error){
    console.log(error)
  }
}

const asd = createInfo()
