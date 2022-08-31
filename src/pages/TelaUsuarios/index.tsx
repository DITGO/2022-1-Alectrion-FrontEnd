import React, { useEffect, useState } from 'react'
import { StyledTextField, Container, FindContainer } from './styles'
import UserTables from '../../components/User-Tables'
import { Typography } from '@mui/material'
import { Button } from '../../components/button'
import { theme } from '../../styles/theme'
import api from '../../api/config'
import { toast } from 'react-toastify'
import { AxiosResponse } from 'axios'

interface user {
  createdAt: string
  updatedAt: string
  username: string
  name: string
  email: string
  role: string
  job: string
}

export default function ScreenUser() {
  const [users, setUsers] = useState<user[]>([])
  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data }: AxiosResponse<user[]> = await api.get(
          '/user/get?allUsers=true'
        )
        setUsers(data)
        console.log(data)
      } catch (error) {
        toast.error('Aconteceu algum erro.')
      }
    }
    getUsers()
  }, [])
  console.log({ users })
  return (
    <div>
      <Container>
        <Typography variant="h3">Usuários</Typography>
        <FindContainer>
          <StyledTextField
            size="small"
            id="username-input"
            label="Nome do usuário"
            data-testId="username-input"
            type="text"
            name="name"
            variant="outlined"
            disabled
          />
          <div></div>
          <Button
            href="/user-register"
            styledColor={theme.palette.primary.dark}
            textColor="white">
            Cadastrar usuário
          </Button>
        </FindContainer>
        <div></div>
        <UserTables users={users} />
      </Container>
    </div>
  )
}
