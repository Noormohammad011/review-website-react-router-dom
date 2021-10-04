import React from 'react'

const Accordian = ({ _id, title, body }) => {
  return (
    <div class='accordion-item'>
      <h2 class='accordion-header' id={`heading${_id}`}>
        <button
          class='accordion-button'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target={`#collapse${_id}`}
          aria-expanded='true'
          aria-controls={`collapse${_id}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${_id}`}
        class='accordion-collapse collapse show'
        aria-labelledby={`heading${_id}`}
        data-bs-parent='#accordionExample'
      >
        <div class='accordion-body'>{body}</div>
      </div>
    </div>
  )
}

export default Accordian
