import '@testing-library/jest-dom'
import { render, screen, waitFor, getByRole } from '@testing-library/react'
import Providers from '../../utils/test-utils'
import userEvent from '@testing-library/user-event'
import axios from 'axios'

import UserRegister from './index'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

test('should register new user', async () => {
  mockedAxios.post.mockResolvedValue({
    email: 'elerzinho@teste.com',
    job: 'Admin'
  })
  render(
    <Providers>
      <UserRegister />
    </Providers>
  )

  expect(await screen.findByText('Cadastro Usuário')).toBeInTheDocument()

  const nameInput = screen.getByLabelText('Nome completo')
  userEvent.type(nameInput, 'lucas eler')

  const emailInput = screen.getByLabelText('Email')
  userEvent.type(emailInput, 'elerzinho@teste.com')

  const userNameInput = screen.getByLabelText('Nome de usuário')
  userEvent.type(userNameInput, 'elerzinho')

  const jobInput = getByRole(screen.getByTestId('job-select'), 'button')
  userEvent.click(jobInput)
  await waitFor(() => userEvent.click(screen.getByText(/Escrivão/i)))

  const profileInput = getByRole(screen.getByTestId('profile-select'), 'button')
  userEvent.click(profileInput)
  await waitFor(() => userEvent.click(screen.getByText(/Admin/i)))

  const passwordInput = screen.getByTestId('password-input')
  userEvent.type(passwordInput, 'eler123')

  const confirmPasswordInput = screen.getByLabelText('Confirmar senha')
  userEvent.type(confirmPasswordInput, 'eler123')

  const RegisterButton = screen.getByRole('button', { name: 'Cadastrar' })
  userEvent.click(RegisterButton)
})

test('should render register user page and back to users when back button clicked', async () => {
  render(
    <Providers>
      <UserRegister />
    </Providers>
  )

  expect(await screen.findByText('Cadastro Usuário')).toBeInTheDocument()

  const RegisterButton = screen.getByRole('button', { name: 'Voltar' })
  userEvent.click(RegisterButton)
})
