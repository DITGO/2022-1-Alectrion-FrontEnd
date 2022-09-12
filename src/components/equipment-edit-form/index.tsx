import { CardContent } from '@mui/material'
import BasicTextFields from '../text-field'
import { FormStyled, StyledCard, StyledBox } from './styles'

const EquipmentEditForm = () => {
  return (
    <StyledCard>
      <CardContent>
        <FormStyled>
          <StyledBox>
            <BasicTextFields
              size="small"
              id="CPU"
              name="CPU"
              label="CPU"
              variant="outlined"
              type="cpu"
              color="primary"
            />
            <BasicTextFields
              size="small"
              id="Marca"
              name="Marca"
              label="Marca"
              variant="outlined"
              type="marca"
              color="primary"
            />
            <BasicTextFields
              size="small"
              id="Memoria RAM"
              name="Memoria RAM"
              label="Memória RAM"
              variant="outlined"
              type="Memoria ram"
              color="primary"
            />
          </StyledBox>
          <StyledBox>
            <BasicTextFields
              size="small"
              id="n-tombamento"
              name="n-tombamento"
              label="N° Tombamento"
              variant="outlined"
              type="n-tombamento"
              color="primary"
            />
            <BasicTextFields
              size="small"
              id="Modelo"
              name="Modelo"
              label="Modelo"
              variant="outlined"
              type="modelo"
              color="primary"
            />
            <BasicTextFields
              size="small"
              id="Armazenamento"
              name="Armazenamento"
              label="Armazenamento"
              variant="outlined"
              type="Armazenamento"
              color="primary"
            />
          </StyledBox>
          <StyledBox>
            <BasicTextFields
              size="small"
              id="n-serie"
              name="n-serie"
              label="N° Série"
              variant="outlined"
              type="n-serie"
              color="primary"
            />
            <BasicTextFields
              size="small"
              id="Tipo Aquisicao"
              name="Tipo Aquisicao"
              label="Tipo Aquisição"
              variant="outlined"
              type="tipo aquisicao"
              color="primary"
            />
            <BasicTextFields
              size="small"
              id="Processador"
              name="Processador"
              label="Processador"
              variant="outlined"
              type="Processador"
              color="primary"
            />
          </StyledBox>
        </FormStyled>
      </CardContent>
    </StyledCard>
  )
}

export default EquipmentEditForm
