import React, { useCallback, useEffect, useState } from 'react'
//
import './main.scss'
// --------- >
const App = ({

}) => {
  
  return (
    <>

        <div className='Romick_Content'>

          <div className='Romick_Text'>
            <p className='parahraph'>Romick app</p>
          </div>

          <img
            style={{ width: '100%', height: '100vh', position: 'absolute', top: '0', zIndex: '-1'}}
            src='https://media-management-service.s3.amazonaws.com/media/images/a4d94a1e4a4caca58f31a490c8db8445_large_cover.26.original.png' 
          />

        </div>

    </>
  )
  
}


export default React.memo(App);