import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

function Input () {
  const [form, setForm] = useState('')

  function handleChange (event) {
    const { name } = event.target
    const newForm = name
    console.log(event.target)
    setForm(newForm)
  }
  function handleSubmit () {
    return null
  }
  return (
    <>
      <form>
        <input type="text" name='' onChange={handleChange} value={form.name}/>
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default Input
