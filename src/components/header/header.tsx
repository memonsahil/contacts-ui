import { StyleSheet, View, Text, Platform } from 'react-native'
import headerProps from './headerProps'
import themeColors from '../../enums/themeColors'
import fontSizes from '../../enums/fontSizes'

const Header = (props: headerProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: themeColors.BACKGROUND_PRIMARY,
        paddingTop: Platform.OS === 'ios' ? '20%' : '5%',
        paddingBottom: '5%',
    },
    title: {
        fontSize: fontSizes.TITLE,
        color: themeColors.TEXT_PRIMARY,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default Header
