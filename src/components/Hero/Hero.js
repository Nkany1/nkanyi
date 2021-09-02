import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there , <br />
          
        </SectionTitle>
        <SectionText>
          My name is Nkanyiso,software Engineer and Web App developer  based in KZN,Pietermaritzburg <br />
          Bsc Computer Science and Information System graduate at the University of Kwazul-Natal <br /> 
          I am passionate about building projects and learning new concept, empowering my knowledge, and sharing it
        </SectionText>
        <Button onClick={() => window.location = "mailto:nkanyisomncwabe31@gmail.com"}>Request Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;