// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  async function updateImage() {
    setDogUrl('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg')
  }
  return (
    <div>
      <header>Dog App</header>
      <h1>犬の画像を表示するサイトです!</h1>
      <img src={dogUrl} />
      <button onClick={updateImage}>更新</button>
    </div>
  )
}
