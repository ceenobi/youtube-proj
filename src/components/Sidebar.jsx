import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { categories } from '../utils/constants'

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div
      className='d-flex flex-lg-column gap-2 scrollbody sidebar'
      style={{ height: 'auto', overflowY: 'auto' }}
    >
      {categories.map((category, i) => (
        <div
          key={i}
          className='d-flex gap-3 align-items-center py-2 px-2'
          style={{
            backgroundColor: category.name === selectedCategory && '#2d2d2f',
            color: 'white',
            borderRadius: '10px',
            transition: 'all 0.5s ease-in-out',
            cursor: 'pointer',
          }}
          onClick={() => {
            setSelectedCategory(category.name)
            location.pathname !== '/' ? navigate('/') : ''
          }}
        >
          <div
            style={{
              color: category.name === selectedCategory ? 'white' : 'white',
            }}
          >
            {category.icon}
          </div>
          <span
            style={{
              opacity: category.name === selectedCategory ? '1' : '0.8',
            }}
            className='d-flex ms-2'
            title={category.name}
          >
            {category.name}
          </span>
        </div>
      ))}
    </div>
  )
}
