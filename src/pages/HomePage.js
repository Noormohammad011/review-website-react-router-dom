import React, { useEffect, useState } from 'react'
import Courses from '../components/Courses'
const HomePage = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('./courses.JSON')
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, [])
  console.log(courses.html)

  return (
    <>
      <div className='container'>
        <h1 className='text-left slideInRight'>Html</h1>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4'>
          {courses &&
            courses?.html?.map((c, i) => <Courses course={c} key={i} />)}
        </div>
      </div>
      <div className='container'>
        <h1 className='text-left slideInRight'>Css</h1>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4'>
          {courses &&
            courses?.css?.map((c, i) => <Courses course={c} key={i} />)}
        </div>
      </div>
    </>
  )
}

export default HomePage
