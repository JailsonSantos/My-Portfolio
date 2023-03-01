import {
  Container,
  TextContainer,
  InfosContainer,
  CodeItem
} from './styles';

export function HomeHero() {
  return (
    <Container data-aos="fade-left">
      <img src="/images/perfil.webp" alt="Foto de perfil, camisa azul e calça cinza." />

      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Seja bem vindo!</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">🧑‍💻Sobre mim</span>
            <span className="purple">Infos</span> {'\u007B'} {/* Abre Chaves */}
            <div>
              Nome: <span className="blue">Jailson,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Lins</span>
            </div>
            <div>
              Graduação: <span className="blue">Sistemas de Informação</span>
            </div>
            <div>
              Instituição: <span className="blue">Centro Universitário UNDB</span>
            </div>
            {'\u007D'} {/* Fecha Chaves */}
          </CodeItem>

          <CodeItem data-aos="zoom-in">
            <span className="comment">👨‍💻 Sobre meu trabalho</span>
            <span className="purple">Job</span> {'\u007B'}
            <div>
              Função: <span className="blue">Developer FullStack</span>
            </div>
            <div>
              Empresa: <span className="blue">Moroh Software</span>
            </div>
            <div>
              Atividades: <span style={{ textAlign: 'justify' }} className="blue">
                Desenvolvimento de softwares.
              </span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>

      </div>
    </Container>
  );
};