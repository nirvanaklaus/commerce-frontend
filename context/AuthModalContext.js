import { createContext } from 'react'

const AuthModalContext = createContext({
    authModalOpen: false,
    setAuthModalOpen: () => {}
})

AuthModalContext.displayName = 'AuthModalContext'

export default AuthModalContext
