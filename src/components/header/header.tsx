import { View, Text, StyleSheet, Platform } from 'react-native'
import fontSizes from '../../utils/fontSizes'
import { verticalDp } from '../../utils/responsive'
import themeColors from '../../utils/themeColors'
import headerProps from './headerProps'

const Header = (props: headerProps) => {
    const { title } = props

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default Header
