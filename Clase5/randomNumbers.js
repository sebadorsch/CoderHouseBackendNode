const randomNumbers = () => {
  let objects = {}
  for (let i=0 ; i<10000 ; i++){
    const randNum = Math.floor(Math.random() * 21);

    if (objects[randNum])
      objects[randNum]++
    else
      objects[randNum] = 1
  }
  console.log(objects)
}

randomNumbers()