const fs = require('fs')

class UserManager {
  constructor(fileName){
    if(fs.existsSync(fileName)){
      this.users = JSON.parse(fs.readFileSync(fileName, 'utf-8'))
    }
    else{
      this.users = []
    }
  }

  async createUser(firstName, lastName, age, course){
    const user = {
      firstName,
      lastName,
      age,
      course,
      date: new Date().toString()
    }

    this.users.push(user)
    await fs.promises.writeFile('./Users.json', JSON.stringify(this.users, null, '\t'))
    console.log('User Created Successfully!')
  }

  async getUsers(){
    return JSON.parse(await fs.promises.readFile('Users.json', 'utf-8'))
  }
}