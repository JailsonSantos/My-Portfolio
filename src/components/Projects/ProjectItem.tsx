import Link from 'next/link'
import { ProjectContainer } from './styles'
import { AiOutlineRightCircle } from 'react-icons/ai'

interface ProjectItemPros {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export function ProjectItem({ title, type, slug, img }: ProjectItemPros) {
  return (
    <ProjectContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2> - {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projects/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  )
}