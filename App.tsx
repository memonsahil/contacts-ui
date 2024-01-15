import { useRef, useState } from 'react'
import {
    ScrollView,
    FlatList,
    StyleSheet,
    Text,
    View,
    Platform,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from 'react-native'
import themeColors from './src/utils/themeColors'
import fontSizes from './src/utils/fontSizes'
import { height, horizontalDp, verticalDp } from './src/utils/responsive'
import contacts from './src/data/contacts'
import AvatarSlider from './src/components/avatarSlider/avatarSlider'

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
            <FlatList
                ref={contactInfoScrollViewRef}
                onMomentumScrollBegin={() => setIsScrolling(true)}
                onMomentumScrollEnd={(
                    event: NativeSyntheticEvent<NativeScrollEvent>
                ) => {
                    if (isScrolling && avatarScrollViewRef.current) {
                        let scrollPosition = event.nativeEvent.contentOffset.y
                        let currentContactInfoIndex = Math.round(
                            scrollPosition /
                                (Platform.OS === 'ios'
                                    ? height - verticalDp(30)
                                    : height - verticalDp(26))
                        )

                        setSelectedAvatarIndex(currentContactInfoIndex)

                        avatarScrollViewRef.current.scrollTo({
                            x: currentContactInfoIndex * (75 + horizontalDp(6)),
                            animated: true,
                        })

                        setIsScrolling(false)
                    }
                }}
                scrollEventThrottle={16}
                data={contactInfo}
                keyExtractor={(contact) => contact.userId}
                renderItem={({ item: contact }) => (
                    <View style={styles.contactInfo}>
                        <View style={styles.contactContent}>
                            <View style={styles.nameInfo}>
                                <Text style={styles.heading}>
                                    {contact.firstName} {contact.lastName}
                                </Text>
                                <Text style={styles.body}>
                                    {contact.occupation}
                                </Text>
                            </View>
                            <View style={styles.aboutInfo}>
                                <Text style={styles.subHeading}>About Me</Text>
                                <Text style={styles.body}>{contact.bio}</Text>
                            </View>
                        </View>
                    </View>
                )}
                pagingEnabled
                decelerationRate="fast"
                snapToInterval={
                    Platform.OS === 'ios'
                        ? height - verticalDp(30)
                        : height - verticalDp(26)
                }
                showsVerticalScrollIndicator={false}
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
    contactInfo: {
        height:
            Platform.OS === 'ios'
                ? height - verticalDp(30)
                : height - verticalDp(26),
    },
    contactContent: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    nameInfo: {
        marginTop: verticalDp(5),
        alignItems: 'center',
    },
    heading: {
        fontSize: fontSizes.HEADING,
        color: themeColors.TEXT_PRIMARY,
        fontWeight: 'bold',
    },
    subHeading: {
        fontSize: fontSizes.SUB_HEADING,
        color: themeColors.TEXT_PRIMARY,
        fontWeight: 'bold',
    },
    aboutInfo: {
        marginTop: verticalDp(5),
        marginHorizontal: horizontalDp(5),
    },
    body: {
        fontSize: fontSizes.BODY,
        color: themeColors.TEXT_SECONDARY,
        fontWeight: 'bold',
    },
})

export default App
