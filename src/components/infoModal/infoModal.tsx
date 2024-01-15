import { useContext } from 'react'
import {
    Modal,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Linking,
} from 'react-native'
import themeColors from '../../utils/themeColors'
import { horizontalDp, verticalDp } from '../../utils/responsive'
import infoModalProps from './infoModalProps'
import fontSizes from '../../utils/fontSizes'
import Context from '../../state/context'

const InfoModal = (props: infoModalProps) => {
    const { avatar, firstName, lastName, occupation, phone, email, links } =
        props

    const { setSelectedContact } = useContext(Context)

    return (
        <Modal transparent animationType="slide">
            <View style={styles.contanier}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        style={styles.iconWrapper}
                        onPress={() => setSelectedContact(null)}
                    >
                        <Text style={styles.closeIcon}>x</Text>
                    </TouchableOpacity>
                    <Image style={styles.avatar} source={avatar} />
                    <Text
                        style={styles.name}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {firstName} {lastName}
                    </Text>
                    <Text
                        style={styles.value}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {occupation}
                    </Text>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.field}>Phone</Text>
                        <Text style={styles.value}>{phone}</Text>
                    </View>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.field}>Email</Text>
                        <TouchableOpacity>
                            <Text style={styles.value}>{email}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.field}>Links</Text>
                        {links.map((link, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => Linking.openURL(link)}
                            >
                                <Text style={styles.link}>{link}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: themeColors.BACKGROUND_SECONDARY,
        height: verticalDp(80),
        width: horizontalDp(100),
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
    },
    iconWrapper: {
        position: 'absolute',
        right: horizontalDp(5),
        top: verticalDp(2),
    },
    closeIcon: {
        fontSize: fontSizes.BUTTON,
        color: themeColors.TEXT_PRIMARY,
        fontWeight: 'bold',
    },
    avatar: {
        height: 75,
        width: 75,
        borderWidth: 3,
        borderColor: themeColors.BACKGROUND_TERTIARY,
        borderRadius: 100,
        marginTop: verticalDp(8),
    },
    name: {
        fontSize: fontSizes.HEADING,
        color: themeColors.TEXT_PRIMARY,
        fontWeight: 'bold',
        marginTop: verticalDp(2),
    },
    infoWrapper: {
        alignSelf: 'flex-start',
        marginTop: verticalDp(5),
        marginHorizontal: horizontalDp(5),
    },
    field: {
        fontSize: fontSizes.SUB_HEADING,
        color: themeColors.TEXT_PRIMARY,
        fontWeight: 'bold',
    },
    value: {
        fontSize: fontSizes.BODY,
        color: themeColors.TEXT_SECONDARY,
        fontWeight: 'bold',
        marginTop: verticalDp(0.5),
    },
    link: {
        fontSize: fontSizes.BODY,
        color: themeColors.TEXT_SECONDARY,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginTop: verticalDp(0.5),
    },
})

export default InfoModal
