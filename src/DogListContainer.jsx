// @ts-check
import BreedsSelect from './BreedsSelect'
import { useEffect, useState } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([''])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [dogImgUrls, setDogImgUrls] = useState([''])

  useEffect(() => {
    getDogList()
  }, [])

  async function getDogList() {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await res.json()
    setBreeds(Object.keys(data.message))
    setSelectedBreed(breeds[0])

    // console.log(breeds) //　この時点ではまだbreedsは空
  }

  async function getBreedList() {
    const res = await fetch(
      `https://dog.ceo/api/breed/${selectedBreed}/images/random/4`,
    )
    const data = await res.json()
    setDogImgUrls(data.message)
    // alert(dogImgUrls)
  }

  const imgList = dogImgUrls.map(dog => <img src={dog} />)

  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />
      <button className="btn-disp" onClick={getBreedList}>
        表示
      </button>
      {imgList}
    </div>
  )
}

export default DogListContainer
