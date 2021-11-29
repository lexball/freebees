import React, { useState, useEffect } from "react"

const ItemTile = props => {
  const { item } = props

  return (
    <div className="callout secondary cell small-8 row grid-x" id="item-tile">
      <div className="small-8 cell">
    </div>

    <div className="grid-x cell medium-10">
      <div className="large-6 cell columns">
        <h3>{item.title}</h3>
        <h5>Category: {item.category}</h5>
        </div>
      </div>
    </div>
  )
}
export default ItemTile