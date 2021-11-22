import { createContext } from 'react'

const AuthContext = createContext({
    authState: {
        title: '',
        items: [],
        isSignedIn: false
    },
    authDispatch: () => {}
})

AuthContext.displayName = 'AuthContext'

export default AuthContext
