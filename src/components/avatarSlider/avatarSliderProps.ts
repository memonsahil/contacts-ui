import { RefObject } from 'react'
import { FlatList, ScrollView } from 'react-native'

type avatarSliderProps = {
    avatarRef: RefObject<ScrollView>
    contactRef: RefObject<FlatList>
    avatars: { uri: string }[]
    indexSetter: (value: number) => void
    currentIndex: number
    scrollSetter: (value: boolean) => void
    isScroll: boolean
}

export default avatarSliderProps
