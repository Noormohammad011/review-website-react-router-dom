import React from 'react'

const NotFoundPage = () => {
  return (
    <div
      className='d-flex justify-content-center align-items-center text-center'
      style={{ height: '80vh' }}
    >
      <div>
        <h1>
          404 Not <i className='fas fa-bomb'>Found</i>
        </h1>
        <h3>The page you are looking for is not available</h3>
      </div>
    </div>
  )
}

export default NotFoundPage
