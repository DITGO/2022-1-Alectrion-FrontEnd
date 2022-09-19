import { render } from '@testing-library/react'
import { OrderServices } from './index'
import Providers from './../../utils/test-utils'

test('should render equipments data', async () => {
  render(
    <Providers>
      <OrderServices />
    </Providers>
  )
})
