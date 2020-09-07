import React from "react"
import "./style.scss"
import HeroContent from "./HeroContent"
import Illustration from "./Illustration"
import content from "../../assets/content/HeroSection.json"
import OakAnimateElement from "../oakfly/OakAnimateElement"
import HeroCaption from "./HeroCaption"

export default function HeroSection() {
  return (
    <div className="hero-section column-layout">
      <div className="hero-section--container">
        <HeroContent data={content} />
        {/* <HeroCaption caption={content.caption} /> */}
      </div>
    </div>
  )
}
