import React, { useState, useEffect } from "react"
import ItemTile from "./ItemTile"

const ItemShow = (props) => {
  
  const [item, setItem] = useState("")

  const getItem = async () => {
    try{
      let itemId = props.match.params.id
      const response = await fetch(`/api/v1/items/${itemId}`)

      if (!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const fetchItem = await response.json()
      setItem(fetchItem.items)
    }
    catch (err) {
      console.log(`Error in fetch: ${err.message}`)
    }
  }

    useEffect(() => {
      getItem()
    }, [])

  return (
    <div className="cell large-auto large-cell-block-container">
      <div className="grid-x grid-padding-x">
        <div className="callout secondary cell medium-6 large-cell-block-y item-show">
          <h3>{item.title}</h3>
          <h4>{item.category}</h4>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemShow