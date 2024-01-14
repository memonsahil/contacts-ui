import { StyleSheet, View } from 'react-native'
import Header from './src/components/header/header'
import AvatarSlider from './src/components/avatarSlider/avatarSlider'
import themeColors from './src/enums/themeColors'

const App = () => {
    const avatars: { uri: string }[] = [
        require('./src/assets/avatars/avatar_1.png'),
        require('./src/assets/avatars/avatar_2.png'),
        require('./src/assets/avatars/avatar_3.png'),
        require('./src/assets/avatars/avatar_4.png'),
        require('./src/assets/avatars/avatar_5.png'),
        require('./src/assets/avatars/avatar_6.png'),
        require('./src/assets/avatars/avatar_7.png'),
        require('./src/assets/avatars/avatar_8.png'),
        require('./src/assets/avatars/avatar_9.png'),
        require('./src/assets/avatars/avatar_10.png'),
        require('./src/assets/avatars/avatar_11.png'),
        require('./src/assets/avatars/avatar_12.png'),
        require('./src/assets/avatars/avatar_13.png'),
        require('./src/assets/avatars/avatar_14.png'),
        require('./src/assets/avatars/avatar_15.png'),
        require('./src/assets/avatars/avatar_16.png'),
        require('./src/assets/avatars/avatar_17.png'),
        require('./src/assets/avatars/avatar_18.png'),
        require('./src/assets/avatars/avatar_19.png'),
        require('./src/assets/avatars/avatar_20.png'),
        require('./src/assets/avatars/avatar_21.png'),
        require('./src/assets/avatars/avatar_22.png'),
        require('./src/assets/avatars/avatar_23.png'),
        require('./src/assets/avatars/avatar_24.png'),
        require('./src/assets/avatars/avatar_25.png'),
        require('./src/assets/avatars/avatar_26.png'),
        require('./src/assets/avatars/avatar_27.png'),
        require('./src/assets/avatars/avatar_28.png'),
    ]

    return (
        <View style={styles.container}>
            <Header title="Contacts" />
            <AvatarSlider avatars={avatars} currentAvatar={avatars[0]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.BACKGROUND_SECONDARY,
    },
})

export default App
