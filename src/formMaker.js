import React from 'react'

const formMaker = ({formData}) => {
    const apiUrl=formData.createurl
  return (
  
    <div>api url:{apiUrl}
          {console.log(formData)}
    </div>
  )
}

export default formMaker