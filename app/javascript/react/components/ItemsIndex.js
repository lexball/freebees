import React, {useState, useEffect } from "react"
import ItemTile from "./ItemTile"

const ItemsIndex = () => {

  const [fetchedItems, setFetchedItems] = useState ([])
  
  const fetchItems = async () => {
    try {
      const response = await fetch("/api/v1/items")
      if(!response.ok) {
        throw new Error(`${response.status}: (${response.statusText})`)
      }
      const responseBody = await response.json()
      setFetchedItems(responseBody.items)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const items = fetchedItems.map((items) => {
    return <ItemTile key={items.id} item={items} />
  })
  return (
    <div className="grid-container">
      <div className="text-center">
      <h1>List of FreeBees</h1>
    </div>
    <div className="grid-x grid-margin-x">
      {items}
      </div>
    </div>
  )
}

export default ItemsIndex