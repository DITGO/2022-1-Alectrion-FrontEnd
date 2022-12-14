import { styled as styledSystem } from '@mui/system'
import { TextField } from '@mui/material'

export const StyledTextField = styledSystem(TextField)(({ theme }) => ({
  height: '40px',
  marginTop: '0px',
  marginBottom: '0px',
  '& .MuiOutlinedInput-input': {
    backgroundColor: theme.palette.background.default,
    borderRadius: '15px !important'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px'
  },
  '& .MuiInputLabel-shrink': {
    marginTop: '-7px',
    color: theme.palette.background.default,
    textShadow: '0 0px 1px rgba(0,0,0,1), 0 0px 1px rgba(0,0,0,1)'
  }
}))
