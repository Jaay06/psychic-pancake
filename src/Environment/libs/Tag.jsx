import React from "react"
import { userStore } from "../store/store"

// basically, you will want to have an array with object properties. then you will just pass it to the tags in the living room page
const Tag = (prop) => {
  const { setOpen } = userStore()
  return (
    <div className="each-tag">
      <div>
       <small> {prop.value}</small>
        <button className="button" onClick={() => setOpen()}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Tag
