import React from "react"
import "./style.scss"
import irWhite from "../../assets/ir_white.svg"
import irBlack from "../../assets/ir_black.svg"
import { Link } from "gatsby"

interface Props {
  black?: boolean
}

export default function HeaderSection(props: Props) {
  return (
    <div className="header-section column-layout">
      <Link to="/" title="Go to landing page">
        <img
          className="logo"
          src={props.black ? irBlack : irWhite}
          alt="Infinite reserve logo"
        />
      </Link>
    </div>
  )
}
