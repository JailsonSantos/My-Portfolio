import { Container } from './styles';
import { AiOutlineWhatsApp, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

export function Footer() {

  function handleRedirect(url: string) {
    window.open(url)
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineWhatsApp
            onClick={() => handleRedirect("https://api.whatsapp.com/send?phone=5598988565096&text=Olá tudo bem?")}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect("https://github.com/JailsonSantos")}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect("https://www.linkedin.com/in/jailson-santos-726395104/")}
          />
        </section>
      </div>
    </Container>
  );
};
