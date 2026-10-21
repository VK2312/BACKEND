import React from 'react'
import { useState } from 'react'
import routes from "./app.routes.jsx";
import {RouterProvider} from "react-router";
import {AuthProvider} from "../features/auth/context/AuthContext.jsx"

const App = () => {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </div>
  )
}

export default App
