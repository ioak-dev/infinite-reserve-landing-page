import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/KeySection.json"
import ContentContainer from "./ContentContainer"

export default function KeySection() {
  return (
    <div className="key-section column-layout">
      <div className="key-section--left">
        <div className="key-section--left--heading">
          <h3 className="heading--emphasis key-section--left--heading--sectiontitle">
            Key benefits
          </h3>
          <h2 className="heading--2">{content.title}</h2>
          <p className="">{content.description}</p>
        </div>
        <ContentContainer data={content.dataLeft} />
      </div>
      <div className="key-section--right">
        <ContentContainer data={content.dataRight} />
      </div>
    </div>
  )
}
