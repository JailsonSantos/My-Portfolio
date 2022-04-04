import Head from "next/head";
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPrismicClient } from '../../../services/prismic';

// Components
import BannerProject from "../../../components/BannerProject";
import { LoadingScreen } from "../../../components/LoadingScreen";

// Styles
import { ProjectsContainer } from "../../../styles/ProjectDescriptionStyles";

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectProps {
  project: IProjeto;
}

export default function Project({ project }: ProjectProps) {

  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />
  }

  return (
    <ProjectsContainer>
      <Head>
        <title>{project.title}</title>
        <meta
          name="description"
          content={project.description}
        />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta name="twitter:image" content={project.thumbnail} />
        <meta name="twitter:image:src" content={project.thumbnail} />
        <meta
          property="og:description"
          content={project.description}
        />
      </Head>
      <BannerProject
        title={project.title}
        type={project.type}
        imgUrl={project.thumbnail}
      />
      <main>
        <p>{project.description}</p>
        <button type="button">
          <a href={project.link} target="_blank">Ver projeto online</a>
        </button>
      </main>
    </ProjectsContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projects = await prismic.query([
    Prismic.predicates.at('document.type', 'project')
  ]);

  const paths = projects.results.map(project => ({
    params: {
      slug: project.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug }: any = context.params;

  const response = await prismic.getByUID('project', String(slug), {});

  const project = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.project_online.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: { project },
    revalidate: 86400
  };
};
