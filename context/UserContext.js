import { createContext } from 'react'

const UserContext = createContext({
    user: null,
    setUser: () => {}
})

UserContext.displayName = 'UserContext'

export default UserContext
