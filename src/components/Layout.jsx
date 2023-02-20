import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Layout({ selectedCategory, setSelectedCategory }) {
  return (
    <>
      <div style={{ backgroundColor: '#0f0f0f' }}>
        <Navbar />
        <Container fluid className='mt-5 py-5'>
          <Row>
            <Col lg={2}>
              <div className='d-lg-flex flex-column justify-content-between px-lg-2 sidebarFixed'>
                <Sidebar
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
                <p className='d-none d-lg-block text-white'>Copyright 2023</p>
              </div>
            </Col>
            <Col lg={10}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
