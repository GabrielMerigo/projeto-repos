import React, { useState, useCallback } from 'react';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import { Container, Form, SubmitButton, List, DeleteButton } from './Styles'

import api from '../../services/api'

export default function Main() {
  const [newRepo, setNewRepo] = useState('')
  const [repositorios, setRepositorios] = useState([])
  const [loading, setLoading] = useState(false)


  async function handleSubmit() {
    setLoading(true)
    try {

      if(newRepo === ''){
        throw new Error('Você precisa indicar um repositório.')
      }

      const response = await api.get(`repos/${newRepo}`)

      const hasRepo = repositorios.find(repo => repo.name === newRepo)

      const data = {
        name: response.data.full_name
      }
      console.log(data)
      setRepositorios([...repositorios, data])
      setNewRepo('')
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = useCallback(repo => {
    const find = repositorios.filter(r => r.name !== repo);
    setRepositorios(find);
  }, [repositorios])

  return (
    <Container>

      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>

      <Form>
        <input
          type="text"
          placeholder="Adicionar Repos"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />

        <SubmitButton onClick={handleSubmit} loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#fff" size={14} />
          ) : (
            <FaPlus color="#fff" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositorios.map(repo => (
          <li key={repo.name} >
            <span>
              <DeleteButton onClick={() => handleDelete(repo.name)} >
                <FaTrash size={14} />
              </DeleteButton>
              {repo.name}
            </span>
            <a href="">
              <FaBars size={20} />
            </a>
          </li>
        ))}
      </List>

    </Container>
  )
}