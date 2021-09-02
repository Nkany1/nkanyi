import React from 'react';
import { DiFirebase, DiReact , DiHtml5 , DiCss3 , DiDatabase , DiMsqlServer , DiGithubBadge , DiGit } from 'react-icons/di';
import { SiMaterialUi , SiRedux , SiNextDotJs , SiJavascript , SiJava , SiCsharp , SiNodeDotJs , SiMongodb , SiNetlify , SiHeroku } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of modern technologies in the web development world.
      From Back-end To Front-end to ensure accessibility , responsive design , continuous deployment 
      and easy to maintain web application
    </SectionText>
    <List>

      <ListItem>
        <picture>
          <DiHtml5 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>HTML</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiCss3 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Css</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiMaterialUi size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Material UI</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
      <picture>
        <SiJavascript size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Javascript</ListTitle>
      </ListContainer>
    </ListItem>

    <ListItem>
      <picture>
        <DiReact size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>React</ListTitle>
      </ListContainer>
    </ListItem>

    <ListItem>
      <picture>
        <SiRedux size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Redux</ListTitle>
      </ListContainer>
    </ListItem>

    <ListItem>
    <picture>
      <SiNextDotJs size="3rem" />
    </picture>
    <ListContainer>
      <ListTitle>Next</ListTitle>
    </ListContainer>
  </ListItem>

  <ListItem>
    <picture>
      <SiCsharp size="3rem" />
    </picture>
    <ListContainer>
      <ListTitle>C#</ListTitle>
    </ListContainer>
  </ListItem>

  <ListItem>
    <picture>
      <SiJava size="3rem" />
    </picture>
    <ListContainer>
      <ListTitle>Java</ListTitle>
    </ListContainer>
  </ListItem>

  <ListItem>
  <picture>
    <SiNodeDotJs size="3rem" />
  </picture>
  <ListContainer>
    <ListTitle>NodeJs/ExpressJs</ListTitle>
  </ListContainer>
</ListItem>

<ListItem>
  <picture>
    <DiDatabase size="3rem" />
  </picture>
  <ListContainer>
    <ListTitle>Database</ListTitle>
  </ListContainer>
</ListItem>

<ListItem>
  <picture>
    <SiMongodb size="3rem" />
  </picture>
  <ListContainer>
    <ListTitle>MongoDB</ListTitle>
  </ListContainer>
</ListItem>

<ListItem>
  <picture>
    <DiFirebase size="3rem" />
  </picture>
  <ListContainer>
    <ListTitle>Firebase</ListTitle>
  </ListContainer>
</ListItem>

<ListItem>
  <picture>
    <DiMsqlServer size="3rem" />
  </picture>
  <ListContainer>
    <ListTitle>Mssql server</ListTitle>
  </ListContainer>
</ListItem>

<ListItem>
  <picture>
    <DiGit size="3rem" />
  </picture>
  <ListContainer>
    <ListTitle>Git</ListTitle>
  </ListContainer>
</ListItem>

<ListItem>
  <picture>
    <DiGithubBadge size="3rem" />
  </picture>
  <ListContainer>
    <ListTitle>Github</ListTitle>
  </ListContainer>
</ListItem>

<ListItem>
  <picture>
    <SiNetlify size="3rem" />
  </picture>
  <ListContainer>
    <ListTitle>Netlify</ListTitle>
  </ListContainer>
</ListItem>

<ListItem>
  <picture>
    <SiHeroku size="3rem" />
  </picture>
  <ListContainer>
    <ListTitle>Heroku</ListTitle>
  </ListContainer>
</ListItem>

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;