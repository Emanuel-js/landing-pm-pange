import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import { components } from "ComponentRenderer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";
import { ReactComponent as HandleIcon } from "images/handle-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";

import heroScreenshotImageSrc from "images/demo/MainLandingPageHero.png";
import logo from "images/logo.svg";
import useInView from "@owaiswiz/use-in-view";
import SaaSProductLandingPage from "demos/SaaSProductLandingPage";


export default ({
  features = null,
  primaryButtonUrl = "#landingPageDemos",
  primaryButtonText = "Explore Demos",
  secondaryButtonUrl = "#componentDemos",
  secondaryButtonText = "View Components",
  buttonRoundedCss = "",
  landingPages = components.landingPages,
  innerPages = components.innerPages,
  blocks = components.blocks,
  heading = "PM modern dashboard to track and manage your project.",
  description = "Easily customizable modern pm dashboard."
}) => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */

  const noOfLandingPages = Object.keys(landingPages).length;
  const noOfInnerPages = Object.keys(innerPages).length;
  const noOfComponentBlocks = Object.values(blocks).reduce((acc, block) => acc + Object.keys(block.elements).length, 0);

  features = features || [
    `${noOfLandingPages} Landing Page Demos`,
    `${noOfInnerPages} Inner Pages`,
    `${noOfComponentBlocks} Components`,
    "Uses TailwindCSS",
    "Fully Responsive",
    "Fully Customizable"
  ];

  return (
    <AnimationRevealPage disable>
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
        <SaaSProductLandingPage/>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};

