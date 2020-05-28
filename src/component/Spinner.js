import React from 'react'
import Loader from 'react-loader-spinner'

const Spinner = () => {
  return (
      <div className="spinner">
        <Loader
         type="TailSpin"
         color="#db092f"
         height={100}
         width={100}

         />
      </div>
   );
}

export default Spinner
