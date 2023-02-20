import { Link } from 'react-router-dom'
import { Stack, Image, Container } from 'react-bootstrap'
import { logo } from '../utils/constants'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <Container
      fluid
      className='position-fixed top-0 w-100 shadow-lg'
      style={{ zIndex: 10, backgroundColor: '#0f0f0f' }}
    >
      <Stack
        direction='horizontal'
        className='py-3 px-2 justify-content-between'
      >
        <Link to='/'>
          <Image
            src={logo}
            alt='logo'
            style={{ width: '40px', height: '40px' }}
          />
        </Link>
        <Searchbar />
      </Stack>
    </Container>
  )
}
