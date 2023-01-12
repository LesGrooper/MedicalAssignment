import React from 'react'
import { Outlet } from 'react-router-dom'

const Doctor = () => {
  return (
    <>
    <div className="container my-3 home">
        <div className="w-100 my-3 text-center">
          <div className="flex">
            <h2>Doctor's Page</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quam quod quas, molestiae inventore minus, fuga corporis non
              incidunt laudantium vel voluptatem nemo sit dignissimos
              laboriosam? Nulla iste excepturi atque dolor magni quibusdam
              quaerat odio.
            </p>
          </div>
        </div>
        <Outlet/>
      </div>
    </>
  )
}

export default Doctor