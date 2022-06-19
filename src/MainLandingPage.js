import React, {  } from "react";
import { components } from "ComponentRenderer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";


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
    <AnimationRevealPage >
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
        <SaaSProductLandingPage/>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};

