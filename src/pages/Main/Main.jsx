import React, { useState } from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa'
import { Container, Form, SubmitButton } from './Styles'

export default function Main(){
  const [newRepo, setNewRepo] = useState('')

  return(
    <Container>

      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar Repos" value={newRepo} onChange={e => setNewRepo(e.target.value)}/>

        <SubmitButton>
          <FaPlus color="#fff" size={14}/>
        </SubmitButton>
      </Form>

    </Container>
  )
}