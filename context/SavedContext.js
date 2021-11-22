import { createContext } from 'react'

const SavedContext = createContext({
    saved: [],
    setSaved: () => {}
})

SavedContext.displayName = 'SavedContext'

export default SavedContext
