import Head from "next/head";
import { GetStaticProps } from "next";
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';

import { ProjectDescription } from "../../components/ProjectDescription";
import { ProjectsContainer, AreaProjectItem } from "../../styles/ProjectsStyles";

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectsProps {
  projects: IProject[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <ProjectsContainer>
      <Head>
        <title>Projects | Portfólio</title>
        <meta
          name="description"
          content="Nesta página estão disponíveis todos os projetos que eu desenvolvi durante minha tragetória como Developer Front-End."
        />
        <meta property="og:image" content="/images/ogimage.png" />
        <meta property="og:image:secure_url" content="/images/ogimage.png" />
        <meta name="twitter:image" content="/images/ogimage.png" />
        <meta name="twitter:image:src" content="/images/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um Developer Front-end e aqui apresento alguns dos meus projetos já desenvolvidos!"
        />
      </Head>
      <AreaProjectItem>
        {projects.map(project => (
          <ProjectDescription
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </AreaProjectItem>
    </ProjectsContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'project')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.project_online.url,
    thumbnail: project.data.thumbnail.url
  }))

  return {
    props: {
      projects,
    },
    revalidate: 86400
  }
}