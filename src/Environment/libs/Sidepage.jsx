import React from "react"
import { userStore } from "../store/store"

const Sidepage = () => {
  const { open, setClose } = userStore()

  return (
    <div
      className="sidepage"
      style={{
        // toggle sidebar open/close
        visibility: open ? "visible" : "hidden",
      }}
    >
      <div className="btn_div">
        <button className="close" onClick={() => setClose()}>
          close
        </button>
<br />
<br />
<br />
        <div>
          HERE THERE WILL BE AN EXPORT BUTTON TO TAKE IT TO THE MAIN CART.
          YOU CAN HANDLE THE ITEMS BEING PUT IN CART WITH A CONTEXT
        </div>
      </div>
    </div>
  )
}

export default Sidepage
