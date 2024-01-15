import { RefObject } from 'react'
import { FlatList, ScrollView } from 'react-native'
import contactType from '../../types/contactType'

type avatarSliderProps = {
    avatarRef: RefObject<ScrollView>
    contactRef: RefObject<FlatList>
    contacts: contactType[]
    indexSetter: (value: number) => void
    currentIndex: number
    scrollSetter: (value: boolean) => void
    isScroll: boolean
}

export default avatarSliderProps
