import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"

interface Props {
  data: {
    title: string
  }
}

export default function ContentContainer(props: Props) {
  return (
    <div className="key-section--container">
      {props.data.map(item => (
        <SectionTile data={item} key={item.title} />
      ))}
    </div>
  )
}
