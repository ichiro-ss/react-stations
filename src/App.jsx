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
  return (
    <body>
      <header>Dog App</header>
      <h1>犬の画像を表示するサイトです!</h1>
      <img src={dogUrl} />
    </body>
  )
}
