import React from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa'
import { Container, Form, SubmitButton } from './Styles'

export default function Main(){
  return(
    <Container>

      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar Repos"/>

        <SubmitButton>
          <FaPlus color="#fff" size={14}/>
        </SubmitButton>
      </Form>

    </Container>
  )
}