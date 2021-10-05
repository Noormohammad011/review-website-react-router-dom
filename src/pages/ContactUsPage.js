import React from 'react'

const ContactUsPage = () => {
  return (
    <div
      className='d-flex flex-column align-items-center'
      style={{ height: '80vh', width: '100%' }}
    >
      <h1>Contact Us</h1>
      <form className='row g-3'>
        <div className='col-md-6'>
          <label htmlFor='inputEmail4' className='form-label'>
            Email
          </label>
          <input type='email' className='form-control' id='inputEmail4' />
        </div>
        <div className='col-md-6'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input type='text' className='form-control' id='name' />
        </div>
        <div className='col-12'>
          <label htmlFor='inputAddress' className='form-label'>
            Address
          </label>
          <input
            type='text'
            className='form-control'
            id='inputAddress'
            placeholder='1234 Main St'
          />
        </div>

        <div className='col-12'>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlTextarea1' className='form-label'>
              Fill Free to submit
            </label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
            ></textarea>
          </div>
        </div>

        <div className='col-12'>
          <div className='d-grid '>
            <button className='btn btn-primary' type='button'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactUsPage
