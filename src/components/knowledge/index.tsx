import { Container } from './styles';
import SectionTitle from '../SectionTitle';

import { AiFillHtml5 } from 'react-icons/ai';
import { KnowledgeItem } from './KnowledgeItem';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiPrismic, SiMysql, SiStyledcomponents, SiRedux } from 'react-icons/si';
import { FaCss3Alt, FaReact, FaSass, FaBootstrap, FaNodeJs, FaGitSquare, FaFigma } from 'react-icons/fa';

export function Knowledge() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <KnowledgeItem title="HTML5" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="Css3" icon={<FaCss3Alt />} />
        <KnowledgeItem title="Sass" icon={<FaSass />} />
        <KnowledgeItem title="St-components" icon={<SiStyledcomponents />} />
        <KnowledgeItem title="Bootstrap" icon={<FaBootstrap />} />
        <KnowledgeItem title="JavaScript" icon={<IoLogoJavascript />} />
        <KnowledgeItem title="TypeScript" icon={<SiTypescript />} />
        <KnowledgeItem title="React" icon={<FaReact />} />
        <KnowledgeItem title="Redux" icon={<SiRedux />} />
        <KnowledgeItem title="NodeJs" icon={<FaNodeJs />} />
        <KnowledgeItem title="Prismic" icon={<SiPrismic />} />
        <KnowledgeItem title="Mysql" icon={<SiMysql />} />
        <KnowledgeItem title="Git" icon={<FaGitSquare />} />
        <KnowledgeItem title="Figma" icon={<FaFigma />} />
      </section>
    </Container>
  );
};

