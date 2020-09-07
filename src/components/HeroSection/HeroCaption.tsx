import React from "react"
import "./style.scss"

interface Props {
  caption: string
}
export default function HeroCaption(props: Props) {
  return <h2 className="hero-caption heading--3">{props.caption}</h2>
}
