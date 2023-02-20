import { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export default function Searchbar() {
  const [searchquery, setSearchQuery] = useState('')
  const navigate = useNavigate()
 
  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchquery) {
      navigate(`/search/${searchquery}`)
      setSearchQuery('')
    }
  }

  return (
    <Form style={{ width: '250px' }} onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type='text'
          placeholder='Search videos'
          className='styleinput bg-dark text-white'
          value={searchquery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <InputGroup.Text id='basic-addon2' className='styleinputB bg-dark'>
          <FiSearch type='submit' className='text-white' />
        </InputGroup.Text>
      </InputGroup>
    </Form>
  )
}
