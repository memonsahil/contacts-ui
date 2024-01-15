import { RefObject } from 'react'
import { ScrollView, FlatList } from 'react-native'
import contactType from '../../types/contactType'

type contactInfoProps = {
    avatarRef: RefObject<ScrollView>
    contactRef: RefObject<FlatList>
    contacts: contactType[]
    indexSetter: (value: number) => void
    scrollSetter: (value: boolean) => void
    isScroll: boolean
}

export default contactInfoProps
