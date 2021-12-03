import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ItemTile = props => {
  const { item } = props

  return (
      <div className="item-tile callout secondary cell small-4 row grid-x">
        <div className="grid-x cell small-8">
          <div className="mediume-8 cell columns">
            <h3><Link to={`items/${item.id}`}>{item.title}</Link></h3>
            <h4>{item.category}</h4>
        </div>
      </div>
    </div>
  )
}

export default ItemTile