import toast from 'react-hot-toast';
import ReactLoading from "react-loading";

import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';

import { senderContactMail } from '../../services/sendMail';
import { FormContainer, Input, TextArea } from './styles';

export function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { colors } = useContext(ThemeContext);

  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();

    if (!name || !email || !message) {
      toast("Preencha todos os campos para enviar sua mensagem!", {
        style: {
          background: colors.primary,
          color: '#fff',
        }
      });
      return;
    }

    try {
      setLoading(true);
      await senderContactMail(name, email, message);
      setName('');
      setEmail('');
      setMessage('');

      toast("Mensagem enviada com sucesso!", {
        style: {
          background: colors.success,
          color: '#fff',
        }
      });

    } catch (error) {
      toast("Error ao enviar sua mensagem. Tente novamente", {
        style: {
          background: colors.error,
          color: '#fff',
        }
      });

      //console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={name}
        placeholder="Nome..."
        onChange={({ target }) => setName(target.value)}
      />
      <Input
        type="email"
        value={email}
        placeholder="E-mail"
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        value={message}
        placeholder="Mensagem"
        onChange={({ target }) => setMessage(target.value)} />

      <button type="submit">
        {loading ? <ReactLoading type="spokes" height="25px" width="25px" color="#fff" /> : 'ENVIAR'}
      </button>

    </FormContainer>
  )
}