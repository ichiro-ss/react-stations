// @ts-check
import { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  async function updateImage() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const changeUrl = await res.json()
    setDogUrl(changeUrl.message)
  }
  return (
    <div>
      <h1 className="title">犬の画像を表示するサイトです!</h1>
      <DogImage imageUrl={dogUrl} />
      <button className="btn_update" onClick={updateImage}>
        更新
      </button>
    </div>
  )
}

export default Description
