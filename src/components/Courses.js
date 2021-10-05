import React from 'react'
import Rating from './Rating'

const Courses = ({ course }) => {
  const characterCount = 40
  const { title, img, price, description, rating, instructor } = course
  return (
    <div className='col my-3'>
      <div className='card'>
        <img
          src={img}
          className='card-img-top'
          alt={title}
          style={{ width: '100%', height: '200px', backgroundSize: 'contain' }}
        />

        <div className='card-body'>
          <p className='card-text'>
            {description.slice(0, characterCount) +
              (description.length > characterCount ? '...' : '')}
          </p>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <span>
                Rating: <Rating value={rating} />
              </span>
            </li>
            <li className='list-group-item'>Price:{price}</li>
            <li className='list-group-item'>
              Instructor:{' '}
              {instructor?.map((m, i) => (
                <h6 key={i}> {m.name}</h6>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Courses
