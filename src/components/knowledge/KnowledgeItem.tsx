import { ReactNode } from "react";

import { ConhecimentoContainer } from './styles'

// ConhecimentosProps
interface KnowledgeItemProps {
  title: string;
  icon: ReactNode;
}


export function KnowledgeItem({ title, icon }: KnowledgeItemProps) {
  return (
    <ConhecimentoContainer data-aos="fade-up">
      <p style={{ textAlign: 'center' }}>{title}</p>
      {icon}
    </ConhecimentoContainer>
  )
}