import {
    FlatList,
    NativeSyntheticEvent,
    NativeScrollEvent,
    Platform,
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { height, verticalDp, horizontalDp } from '../../utils/responsive'
import contactInfoProps from './contactInfoProps'
import fontSizes from '../../utils/fontSizes'
import themeColors from '../../utils/themeColors'
import contactType from '../../types/contactType'

const ContactInfo = (props: contactInfoProps) => {
    const {
        avatarRef,
        contactRef,
        contacts,
        indexSetter,
        scrollSetter,
        isScroll,
    } = props

    return (
        <FlatList
            ref={contactRef}
            onMomentumScrollBegin={() => scrollSetter(true)}
            onMomentumScrollEnd={(
                event: NativeSyntheticEvent<NativeScrollEvent>
            ) => {
                if (isScroll && contactRef.current && avatarRef.current) {
                    let scrollPosition = event.nativeEvent.contentOffset.y
                    let currentContactInfoIndex = Math.round(
                        scrollPosition /
                            (Platform.OS === 'ios'
                                ? height - verticalDp(30)
                                : height - verticalDp(26))
                    )

                    indexSetter(currentContactInfoIndex)

                    avatarRef.current.scrollTo({
                        x: currentContactInfoIndex * (75 + horizontalDp(6)),
                        animated: true,
                    })

                    scrollSetter(false)
                }
            }}
            scrollEventThrottle={16}
            data={contacts}
            keyExtractor={(contact: contactType) => contact.userId}
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
    )
}

const styles = StyleSheet.create({
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
        marginTop: verticalDp(0.5),
    },
})

export default ContactInfo
