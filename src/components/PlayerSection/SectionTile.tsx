import React from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  title: string
  description: string
  index: number
}
export default function PlayerSection(props: Props) {
  return (
    <OakAnimateElement>
      <div className="player-sectiontile">
        <div className="player-sectiontile--index">{props.index}</div>
        <div className="player-sectiontile--content">
          <p className="player-sectiontile--content--title">{props.title}</p>
          <p className="player-sectiontile--content--description">
            {props.description}
          </p>
        </div>
      </div>
    </OakAnimateElement>
  )
}
