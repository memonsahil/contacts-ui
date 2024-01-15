import React from 'react'
import contextType from '../types/contextType'

const Context = React.createContext<contextType>({
    selectedContact: null,
    setSelectedContact: () => {},
})

export default Context
