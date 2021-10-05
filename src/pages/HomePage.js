import React, { useContext } from 'react'
import { CourseContext } from '../App'
import Courses from '../components/Courses'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomePage = () => {
  const { fetchCoursesFromExternal } = useContext(CourseContext)
  const { result, error, loading } = fetchCoursesFromExternal

  return (
    <>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error.message}</Message>}
      <div className='container'>
        <h1 className='text-left slideInRight'>HTML</h1>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4'>
          {result &&
            result?.html?.map((c, i) => <Courses course={c} key={i} />)}
        </div>
      </div>
      <div className='container'>
        <h1 className='text-left slideInRight'>CSS</h1>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4'>
          {result && result?.css?.map((c, i) => <Courses course={c} key={i} />)}
        </div>
      </div>
    </>
  )
}

export default HomePage
