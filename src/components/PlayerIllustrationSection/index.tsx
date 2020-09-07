import React from "react"
import "./style.scss"
import SectionTile from "../PlayerSection/SectionTile"
import PlayerOneIllustration from "./PlayerOneIllustration"

interface Props {
  data: {
    title?: string
    subtitle?: string
    description?: string
  }
  illustrationView?: any
}

export default function PlayerIllustrationSection(props: Props) {
  return (
    <div className="player-illustration-section column-layout">
      <div className="player-illustration-section--container">
        {props.data.title && (
          <h3
            className="player-illustration-section--container--heading heading--emphasis"
            dangerouslySetInnerHTML={{ __html: props.data.title }}
          />
        )}
        {props.data.subtitle && (
          <h2
            className="player-illustration-section--container--content heading--2"
            dangerouslySetInnerHTML={{ __html: props.data.subtitle }}
          />
        )}
        {props.data.description && (
          <p
            className="player-illustration-section--container--description"
            dangerouslySetInnerHTML={{ __html: props.data.description }}
          />
        )}
      </div>
      {/* <PlayerOneIllustration /> */}
      {props.illustrationView}
    </div>
  )
}
