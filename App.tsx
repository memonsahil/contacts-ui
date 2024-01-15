import { useRef, useState } from 'react'
import { ScrollView, FlatList, StyleSheet, View } from 'react-native'
import themeColors from './src/utils/themeColors'
import avatars from './src/data/avatars'
import contacts from './src/data/contacts.json'
import contactType from './src/types/contactType'
import AvatarSlider from './src/components/avatarSlider/avatarSlider'
import ContactInfo from './src/components/contactInfo/contactInfo'
import Header from './src/components/header/header'

const App = () => {
    const avatarScrollViewRef = useRef<ScrollView>(null)
    const contactInfoScrollViewRef = useRef<FlatList>(null)

    const [isScrolling, setIsScrolling] = useState<boolean>(false)
    const [selectedAvatarIndex, setSelectedAvatarIndex] = useState<number>(0)

    const contactInfo = contacts.map((contact: contactType) => ({
        userId: contact.userId,
        firstName: contact.firstName,
        lastName: contact.lastName,
        occupation: contact.occupation,
        bio: contact.bio,
    }))

    return (
        <View style={styles.container}>
            <Header title="Contacts" />
            <AvatarSlider
                avatarRef={avatarScrollViewRef}
                contactRef={contactInfoScrollViewRef}
                avatars={avatars}
                indexSetter={setSelectedAvatarIndex}
                currentIndex={selectedAvatarIndex}
                scrollSetter={setIsScrolling}
                isScroll={isScrolling}
            />
            <ContactInfo
                avatarRef={avatarScrollViewRef}
                contactRef={contactInfoScrollViewRef}
                contactDetails={contactInfo}
                indexSetter={setSelectedAvatarIndex}
                scrollSetter={setIsScrolling}
                isScroll={isScrolling}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.BACKGROUND_PRIMARY,
    },
})

export default App
