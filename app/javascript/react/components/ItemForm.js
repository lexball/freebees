import React, { useState } from "react"
import _ from "lodash"
import { Redirect } from "react-router-dom"
import ErrorList from './ErrorList'

const categories = ["Auto", "Baby", "Clothes", "Electronics", "Garden", "Gaming", "Home", "Kitchen", "Music", "Office", "Tools" ]
const ItemForm = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
  })

  const categoryOptions = [""].concat(categories).map(category =>{
    return (
      <option key={category} value={category}>
        {category}
      </option>
    )
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateSubmission()) {
      postNewItem()
    }
  }

  const [errors, setErrors] = useState({})

  const validateSubmission = () => {
    let submitErrors= {}
    const requiredFields = ["category", "title", "description"]
    requiredFields.forEach((field) => {
      if (formData[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank!"
        }
      }
    })
    if (formData.description.length < 25) {
      submitErrors = {
        ...submitErrors,
        description: "is too short!"
      }
    }

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }
  
  const postNewItem = async () => {
    try {
      const response = await fetch("/api/v1/items", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({item: formData})
      })
      if(!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const parsedResponse = await response.json()
      setShouldRedirect(true)
    } catch (error) {
      console.error(error)
    }
  }

  if(shouldRedirect) {
    return <Redirect to= "/" />
  }

  return (
    <div>
      <h2 className="text-center">Post your Item!</h2>
      <ErrorList errors ={errors}/>
      <form onSubmit={handleSubmit}>
        <label>Select a Category</label>
        <select id="category" name="category" onChange={handleChange} value={formData.category}>
          {categoryOptions}
        </select>

        <label className="field">
          Category:
          <input type="text" name="title" onChange={handleChange} value={formData.title} placeholder="Title" />
        </label>

        <label className="field">
          Description:
          <input type="text" name="description" onChange={handleChange} value={formData.description} placeholder="Description" />
        </label>

        <div>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default ItemForm