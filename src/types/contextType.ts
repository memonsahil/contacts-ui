import contactType from './contactType'

type contextType = {
    selectedContact: contactType | null
    setSelectedContact: (contactInfo: contactType | null) => void
}

export default contextType
