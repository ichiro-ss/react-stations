// @ts-check

export const BreedsSelect = props => {
  function selectOnChange(event) {
    props.setSelectedBreed(event.target.value)
  }

  const list = props.breeds.map(breed => (
    <option key={breed.toString()} value={breed}>
      {breed}
    </option>
  ))
  return (
    <>
      <select id="select-breeds" onChange={e => selectOnChange(e)}>
        {list}
      </select>
    </>
  )
}

export default BreedsSelect
