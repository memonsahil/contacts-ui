import { useRef, useState } from 'react'
import {
    ScrollView,
    FlatList,
    StyleSheet,
    Text,
    View,
    Platform,
} from 'react-native'
import themeColors from './src/utils/themeColors'
import fontSizes from './src/utils/fontSizes'
import { verticalDp } from './src/utils/responsive'
import contacts from './src/data/contacts'
import AvatarSlider from './src/components/avatarSlider/avatarSlider'
import ContactInfo from './src/components/contactInfo/contactInfo'

const App = () => {
    const avatarScrollViewRef = useRef<ScrollView>(null)
    const contactInfoScrollViewRef = useRef<FlatList>(null)

    const [isScrolling, setIsScrolling] = useState<boolean>(false)
    const [selectedAvatarIndex, setSelectedAvatarIndex] = useState<number>(0)

    const avatars = contacts.map((contact) => contact.avatar)
    const contactInfo = contacts.map((contact) => ({
        userId: contact.userId,
        firstName: contact.firstName,
        lastName: contact.lastName,
        occupation: contact.occupation,
        bio: contact.bio,
    }))

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Contacts</Text>
            </View>
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
    header: {
        paddingTop: Platform.OS === 'ios' ? verticalDp(8) : verticalDp(4),
        paddingBottom: verticalDp(2),
        backgroundColor: themeColors.BACKGROUND_SECONDARY,
        borderBottomWidth: verticalDp(0.1),
        borderBottomColor: themeColors.BORDER,
    },
    headerTitle: {
        fontSize: fontSizes.TITLE,
        color: themeColors.TEXT_PRIMARY,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default App
