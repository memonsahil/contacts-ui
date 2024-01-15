import { RefObject } from 'react'
import { ScrollView, FlatList } from 'react-native'

type contactInfoProps = {
    avatarRef: RefObject<ScrollView>
    contactRef: RefObject<FlatList>
    contactDetails: {
        userId: string
        firstName: string
        lastName: string
        occupation: string
        bio: string
    }[]
    indexSetter: (value: number) => void
    scrollSetter: (value: boolean) => void
    isScroll: boolean
}

export default contactInfoProps
