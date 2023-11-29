// @ts-check
import { useEffect, useState } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([''])

  useEffect(() => {
    getDogList()
  }, [])

  async function getDogList() {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await res.json()
    setBreeds(Object.keys(data.message))

    console.log(breeds) //　この時点ではまだbreedsは空
  }

  const list = breeds.map(breed => <li>{breed}</li>)

  return <div>{/* <ul>{list}</ul> */}</div>
}

export default DogListContainer
