import { useState } from "react"

import Tag from "./Tag"

const Tags = (props) => {
  const [showChair, setShowChair] = useState(false)

  return (
    <>
      <div
        className="tag-div"
        onMouseEnter={() => setShowChair(true)}
        onMouseLeave={() => setShowChair(false)}
        onClick={() => setShowChair(true)}
      >
        <div className="point-blink"></div>
        <div
          style={{
            // toggle show button class
            visibility: showChair ? "visible" : "hidden",
          }}
        >
          <Tag value={props.value} />
        </div>
      </div>
    </>
  )
}

export default Tags
