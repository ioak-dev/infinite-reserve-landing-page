import React from "react"
import "./style.scss"

interface Props {
  data: {
    title: string
    description: string
    illustration: string
  }
}
export default function SimpleSection(props: Props) {
  return (
    <div className="simple-section column-layout">
      <div className="simple-section--heading">
        <h2 className="heading--2 simple-section--heading--title">
          {props.data.title}
        </h2>
        <img src={require(`../../assets/${props.data.illustration}`)} />
        <p className="simple-section--heading--subtitle">
          {props.data.description}
        </p>
      </div>
    </div>
  )
}
