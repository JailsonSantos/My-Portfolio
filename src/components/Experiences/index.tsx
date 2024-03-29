import SectionTitle from '../SectionTitle';
import { ExperienceItem } from './ExperienceItem';
import { Container } from './styles';


export function Experiences() {
  return (
    <Container>
      <SectionTitle title="Minhas" description="experiências" />
      <section>
        <ExperienceItem year="2022 & 2023" title="Developer FullStack" description="Desenvolvimento de softwares responsivos" />
        <ExperienceItem year="2021" title="Developer FrontEnd" description="Desenvolvimento de Interefaces Modernas" />
        <ExperienceItem year="2020" title="Developer BackEnd" description="Desenvolvimento de APIs e Webservices" />
        <ExperienceItem year="2019" title="Developer Trainee" description="Desenvolvimento de Aplicações Web" />
      </section>
    </Container>
  );
};
