import React from "react"
import "./style.scss"
import OakButton from "../oakfly/OakButton"
import content from "../../assets/content/HeroSection.json"
import HeaderSection from "../HeaderSection"
import CallToAction from "./CallToAction"

interface Props {
  data: {
    title: string
    subtitle: string
    callToAction: {
      label: string
      faIcon: string
    }
    secondaryCallToAction?: {
      label: string
      faIcon: string
    }
  }
}
export default function HeroContent(props: Props) {
  return (
    <div className="hero-content">
      <h1
        className="heading--1 hero-content--title"
        dangerouslySetInnerHTML={{ __html: props.data.title }}
      />
      <p className="hero-content--subtitle">{props.data.subtitle}</p>
      <div className="hero-content--cta">
        <CallToAction data={props.data.callToAction} />
        {props.data.secondaryCallToAction && (
          <CallToAction
            data={props.data.secondaryCallToAction}
            theme="default"
          />
        )}
      </div>
    </div>
  )
}
