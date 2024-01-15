import { useRef, useState } from 'react'
import { ScrollView, FlatList, StyleSheet, View } from 'react-native'
import themeColors from './src/utils/themeColors'
import avatars from './src/data/avatars'
import contacts from './src/data/contacts.json'
import contactType from './src/types/contactType'
import AvatarSlider from './src/components/avatarSlider/avatarSlider'
import ContactInfo from './src/components/contactInfo/contactInfo'
import Header from './src/components/header/header'
import InfoModal from './src/components/infoModal/infoModal'
import Context from './src/state/context'

const App = () => {
    const avatarScrollViewRef = useRef<ScrollView>(null)
    const contactInfoScrollViewRef = useRef<FlatList>(null)

    const [selectedContact, setSelectedContact] = useState<contactType | null>(
        null
    )
    const [isScrolling, setIsScrolling] = useState<boolean>(false)
    const [selectedAvatarIndex, setSelectedAvatarIndex] = useState<number>(0)

    const contactsList = contacts.map((contact: contactType, index) => ({
        ...contact,
        avatar: avatars[index],
    }))

    return (
        <Context.Provider value={{ selectedContact, setSelectedContact }}>
            <View style={styles.container}>
                <Header title="Contacts" />
                <AvatarSlider
                    avatarRef={avatarScrollViewRef}
                    contactRef={contactInfoScrollViewRef}
                    contacts={contactsList}
                    indexSetter={setSelectedAvatarIndex}
                    currentIndex={selectedAvatarIndex}
                    scrollSetter={setIsScrolling}
                    isScroll={isScrolling}
                />
                <ContactInfo
                    avatarRef={avatarScrollViewRef}
                    contactRef={contactInfoScrollViewRef}
                    contacts={contactsList}
                    indexSetter={setSelectedAvatarIndex}
                    scrollSetter={setIsScrolling}
                    isScroll={isScrolling}
                />
                {selectedContact ? (
                    <InfoModal
                        avatar={selectedContact.avatar}
                        firstName={selectedContact.firstName}
                        lastName={selectedContact.lastName}
                        occupation={selectedContact.occupation}
                    />
                ) : null}
            </View>
        </Context.Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.BACKGROUND_PRIMARY,
    },
})

export default App
