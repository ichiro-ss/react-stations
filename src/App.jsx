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
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const url = await res.json()
    setDogUrl(url.message)
  }
  return (
    <div>
      <header className="header">Dog App</header>
      <h1 className="title">犬の画像を表示するサイトです!</h1>
      <img src={dogUrl} />
      <button onClick={updateImage}>更新</button>
    </div>
  )
}
