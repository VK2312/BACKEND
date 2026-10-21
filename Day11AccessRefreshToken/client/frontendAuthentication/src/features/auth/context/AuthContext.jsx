import React from 'react'
import { useState  } from 'react'
import { createContext, useCallback, useContext } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);
      const [accessToken, setAccessToken] = useState(null);
      const [loading, setLoading] = useState(true);

      const value = {
        user,
        accessToken,
        loading,
        isAuthenticated:!!user,
        setUser,
        setLoading,
        setAccessToken
      }

  return (
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if(!context){
    throw new Error("useAuth must be used within an Authprovider");
  }

  return context 
}

export default AuthContext
