import React from "react"
import "./style.scss"

interface Props {
  title: string
  description: string
}
export default function PlayerSection(props: Props) {
  return (
    <div className="player-sectiontile">
      <p className="player-sectiontile--title">{props.title}</p>
      <p className="player-sectiontile--description">{props.description}</p>
    </div>
  )
}
