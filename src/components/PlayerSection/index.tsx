import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import PlayerIllustrationSection from "../PlayerIllustrationSection"

interface Props {
  data: {
    alt?: boolean
    details: {
      title: string
      subtitle?: string
      description?: string
      items: {
        title: string
        description: string
      }[]
    }
    illustration?: {
      title?: string
      description?: string
    }
  }
  illustrationView?: any
}

export default function PlayerSection(props: Props) {
  return (
    <>
      {props.data.illustration && (
        <PlayerIllustrationSection
          data={props.data.illustration}
          illustrationView={props.illustrationView}
        />
      )}
      <div
        className={`player-section column-layout ${
          props.data.alt ? "alternate-theme" : ""
        }`}
      >
        <div className="player-section--left">
          <div className="player-section--left--heading">
            <h3 className="heading--emphasis player-section--left--heading--sectiontitle">
              {props.data.details.title}
            </h3>
            <h2 className="heading--2 player-section--left--heading--title">
              {props.data.details.subtitle}
            </h2>
            <p className="player-section--left--heading--subtitle">
              {props.data.details.description}
            </p>
          </div>
        </div>
        <div className="player-section--container">
          {props.data.details.items.map((item, index) => (
            <SectionTile
              title={item.title}
              description={item.description}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </>
  )
}
