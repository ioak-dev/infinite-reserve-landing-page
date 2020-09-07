import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import CallToAction from "../HeroSection/CallToAction"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  data: {
    title: string
    subtitle: string
    description?: string
  }
}
export default function SpecialitySection(props: Props) {
  return (
    <div className="column-layout speciality-section">
      <OakAnimateElement direction="right">
        <div className="speciality-section--container">
          <p
            className="speciality-section--container--heading heading--emphasis"
            dangerouslySetInnerHTML={{ __html: props.data.title }}
          />
          <h2
            className="speciality-section--container--content heading--2"
            dangerouslySetInnerHTML={{ __html: props.data.subtitle }}
          />
          {props.data.description && (
            <p
              className="speciality-section--container--description"
              dangerouslySetInnerHTML={{ __html: props.data.description }}
            />
          )}
        </div>
      </OakAnimateElement>
    </div>
  )
}
