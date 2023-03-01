import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import { AiFillHtml5 } from 'react-icons/ai';
import { KnowledgeItem } from './KnowledgeItem';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiTypescript,
  SiPrismic,
  SiMysql,
  SiStyledcomponents,
  SiRedux
} from 'react-icons/si';
import {
  FaCss3Alt,
  FaReact,
  FaSass,
  FaBootstrap,
  FaNodeJs,
  FaGitSquare,
  FaFigma,
  FaDocker,
  FaPhp,
  FaStripe
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiInsomnia,
  SiPrisma,
  SiGithub
} from 'react-icons/si';

import { RiReactjsLine } from 'react-icons/ri';

export function Knowledge() {
  return (
    <Container>
      <SectionTitle title="Minhas Habilidades" />
      <section>
        <KnowledgeItem title="HTML5" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="Css3" icon={<FaCss3Alt />} />
        <KnowledgeItem title="Sass" icon={<FaSass />} />
        <KnowledgeItem title="Bootstrap" icon={<FaBootstrap />} />
        <KnowledgeItem title="Styled components" icon={<SiStyledcomponents />} />
        <KnowledgeItem title="TailwindCSS" icon={<SiTailwindcss />} />

        <KnowledgeItem title="JavaScript" icon={<IoLogoJavascript />} />
        <KnowledgeItem title="TypeScript" icon={<SiTypescript />} />
        <KnowledgeItem title="React" icon={<FaReact />} />
        <KnowledgeItem title="NextJS" icon={<SiNextdotjs />} />
        <KnowledgeItem title="ViteJS" icon={<SiVite />} />

        <KnowledgeItem title="React Native" icon={<RiReactjsLine />} />
        <KnowledgeItem title="NodeJs" icon={<FaNodeJs />} />
        <KnowledgeItem title="PHP" icon={<FaPhp />} />

        <KnowledgeItem title="Redux" icon={<SiRedux />} />

        <KnowledgeItem title="Docker" icon={<FaDocker />} />
        <KnowledgeItem title="Mysql" icon={<SiMysql />} />
        <KnowledgeItem title="PostgreSQL" icon={<SiPostgresql />} />
        <KnowledgeItem title="MongoDB" icon={<SiMongodb />} />
        <KnowledgeItem title="Firebase" icon={<SiFirebase />} />

        <KnowledgeItem title="Stripe" icon={<FaStripe />} />

        <KnowledgeItem title="Prismic" icon={<SiPrismic />} />
        <KnowledgeItem title="Prisma" icon={<SiPrisma />} />
        <KnowledgeItem title="Insomnia" icon={<SiInsomnia />} />

        <KnowledgeItem title="Git" icon={<FaGitSquare />} />
        <KnowledgeItem title="Github" icon={<SiGithub />} />
        <KnowledgeItem title="Figma" icon={<FaFigma />} />


        {/* Novos */}




      </section>
    </Container>
  );
};

