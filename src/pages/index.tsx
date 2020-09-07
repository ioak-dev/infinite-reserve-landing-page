import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import KeySection from "../components/KeySection"
import DemoSection from "../components/DemoSection"
import OnboardSection from "../components/OnboardSection"
import ContactSection from "../components/ContactSection"
import FaqSection from "../components/FaqSection"
import FooterSection from "../components/FooterSection"
import CopyrightSection from "../components/CopyrightSection"
import FeatureSection from "../components/FeatureSection"
import SpecialitySection from "../components/SpecialitySection"
import AiSection from "../components/AiSection"
import ResponsiveSection from "../components/ResponsiveSection"
import BusinessFlowSection from "../components/BusinessFlowSection"

import HighlightSectionOne from "../assets/content/HighlightSectionOne.json"
import HighlightSectionTwo from "../assets/content/HighlightSectionTwo.json"
import HighlightSectionThree from "../assets/content/HighlightSectionThree.json"
import simpleSectionParticipant from "../assets/content/SimpleSectionParticipant.json"
import PlayerOneSectionData from "../assets/content/PlayerOneSection.json"
import PlayerTwoSectionData from "../assets/content/PlayerTwoSection.json"
import PlayerThreeSection from "../assets/content/PlayerThreeSection.json"
import PlayerFourSection from "../assets/content/PlayerFourSection.json"
import PlayerFiveSection from "../assets/content/PlayerFiveSection.json"
import PlayerSection from "../components/PlayerSection"
import SimpleSection from "../components/SimpleSection"
import HeaderSection from "../components/HeaderSection"
import PlayerSectionData from "../assets/content/PlayerSection.json"
import PlayerOneIllustration from "../components/PlayerIllustrationSection/PlayerOneIllustration"
import PlayerTwoIllustration from "../components/PlayerIllustrationSection/PlayerTwoIllustration"
import PlayerThreeIllustration from "../components/PlayerIllustrationSection/PlayerThreeIllustration"
import PlayerFourIllustration from "../components/PlayerIllustrationSection/PlayerFourIllustration"

const IndexPage = () => (
  <div className="page-home">
    <SEO title="Features" />
    <HeaderSection black />
    <HeroSection />
    <SpecialitySection data={HighlightSectionOne} />
    <KeySection />
    <SpecialitySection data={HighlightSectionTwo} />
    <PlayerSection data={PlayerSectionData} />
    {/* <SpecialitySection data={HighlightSectionThree} /> */}
    {/* <SimpleSection data={simpleSectionParticipant} /> */}
    <PlayerSection
      data={PlayerOneSectionData}
      illustrationView={<PlayerOneIllustration />}
    />
    <PlayerSection
      data={PlayerTwoSectionData}
      illustrationView={<PlayerTwoIllustration />}
    />
    <PlayerSection
      data={PlayerThreeSection}
      illustrationView={<PlayerThreeIllustration />}
    />
    <PlayerSection
      data={PlayerFourSection}
      illustrationView={<PlayerFourIllustration />}
    />
    <PlayerSection data={PlayerFiveSection} />
    {/* <SpecialitySection data={highlightContentOne} />
    <BusinessFlowSection />
    <SpecialitySection data={highlightContentTwo} />
    <KeySection />
    <SpecialitySection data={highlightContentThree} /> */}

    {/* <AiSection />
    <KeySection />
    <BusinessFlowSection />
    <FeatureSection />
    <OnboardSection />
    <FaqSection />
    <ContactSection />
    <DemoSection /> */}
    <FooterSection />
    <CopyrightSection />
  </div>
)

export default IndexPage
