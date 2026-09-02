import type { ReactNode } from 'react';
import Button from 'react-bootstrap/Button';

interface BotaoProps {
  texto: string;
  cor: string;
  tamanho?: string;
  onClick?: () => void;
  icone?: ReactNode;
}

export function BotaoLifeDesign({ texto, cor, tamanho, onClick, icone }: BotaoProps) {
  
  let largura = '10rem'; //por padrão vem no pequeno
  if (tamanho === 'grande') largura = '18rem';
  if (tamanho === 'gigante') largura = '30rem';

  if (cor === 'editar') {
    return <Button variant="warning" style={{ width: largura }} onClick={onClick}>{texto}</Button>;
  }

  if (cor === 'informativo') {
    return <Button variant="info" style={{ width: largura }} onClick={onClick}>{texto}</Button>;
  }

  let corFundo = '';
  if (cor === 'verde') corFundo = 'var(--verde-secundario)';
  if (cor === 'verdeEscuro') corFundo = 'var(--verde-terciario)';
  if (cor === 'verdeClaro') corFundo = '#0f766e';
  if (cor === 'cinza') corFundo = 'var(--cinza-primario)';
  if (cor === 'vermelho') corFundo = 'var(--vermelho-perigo)';

  return (
    <Button 
      onClick={onClick}
      style={{ 
        width: largura, 
        backgroundColor: corFundo, 
        borderColor: corFundo, 
        color: 'var(--branco)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}
    >
      {icone}
      {texto}
    </Button>
  );
}