import Aos from 'aos';
import 'aos/dist/aos.css';

import Head from 'next/head';
import { useEffect } from "react";
import { GetStaticProps } from "next";
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';

// Components and Styles
import Projects from "../components/Projects";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomeHero } from "../components/HomeHero";
import { Knowledge } from "../components/knowledge";
import { HomeContainer } from "../styles/HomeStyles";
import { FormContact } from "../components/FormContact";
import { Experiences } from "../components/Experiences";

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projects: IProject[];
}

import { setCookie, parseCookies } from 'nookies';
import { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { combineTheme, dark, light } from '../styles/themes';

export default function Home({ projects }: HomeProps) {

  const cookies = parseCookies();
  const { USER_THEME } = cookies;

  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light));
  const activeTheme = theme;

  const toggleTheme = () => {

    if (theme.title === 'light') {
      setTheme(combineTheme(dark))
      setCookie(null, 'USER_THEME', 'dark', {
        maxAge: 86400,
        path: '/'
      });
    } else {
      setTheme(combineTheme(light))
      setCookie(null, 'USER_THEME', 'light', {
        maxAge: 86400,
        path: '/'
      });
    }
  };

  useEffect(() => {
    USER_THEME === 'light' ? setTheme(light) : setTheme(dark);
  }, [theme]);


  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Portfólio</title>

        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/images/ogimage.png" />
        <meta property="og:image:secure_url" content="/images/ogimage.png" />
        <meta name="twitter:image" content="/images/ogimage.png" />
        <meta name="twitter:image:src" content="/images/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />

      </Head>

      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects projects={projects} />
        <Knowledge />
        <FormContact />
      </main>
      <Footer />
    </HomeContainer>
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