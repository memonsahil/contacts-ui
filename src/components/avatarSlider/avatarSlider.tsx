import { StyleSheet, ScrollView, Image } from 'react-native'
import avatarSliderProps from './avatarSliderProps'

const AvatarSlider = (props: avatarSliderProps) => {
    const { avatars, currentAvatar } = props

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            {avatars.length !== 0
                ? avatars.map((avatar, index) => (
                      <Image
                          style={styles.avatar}
                          key={index}
                          source={avatar}
                      />
                  ))
                : null}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '15%',
        paddingHorizontal: 150,
        paddingVertical: '5%',
    },
    avatar: {
        width: 75,
        height: 75,
        marginRight: 20,
    },
})

export default AvatarSlider
