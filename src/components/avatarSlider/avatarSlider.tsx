import {
    ScrollView,
    NativeSyntheticEvent,
    NativeScrollEvent,
    Platform,
    Image,
    StyleSheet,
} from 'react-native'
import { horizontalDp, height, verticalDp } from '../../utils/responsive'
import avatarSliderProps from './avatarSliderProps'

const AvatarSlider = (props: avatarSliderProps) => {
    const {
        avatarRef,
        contactRef,
        avatars,
        indexSetter,
        currentIndex,
        scrollSetter,
        isScroll,
    } = props

    return (
        <ScrollView
            ref={avatarRef}
            onMomentumScrollBegin={() => scrollSetter(true)}
            onMomentumScrollEnd={(
                event: NativeSyntheticEvent<NativeScrollEvent>
            ) => {
                if (isScroll && avatarRef.current && contactRef.current) {
                    let scrollPosition = event.nativeEvent.contentOffset.x
                    let currentAvatarIndex = Math.round(
                        scrollPosition / (75 + horizontalDp(6))
                    )

                    indexSetter(currentAvatarIndex)

                    contactRef.current.scrollToOffset({
                        offset:
                            currentAvatarIndex *
                            (Platform.OS === 'ios'
                                ? height - verticalDp(30)
                                : height - verticalDp(26)),
                        animated: true,
                    })

                    scrollSetter(false)
                }
            }}
            scrollEventThrottle={16}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            style={styles.avatars}
            contentContainerStyle={styles.avatarsContainer}
            decelerationRate="fast"
            snapToInterval={75 + horizontalDp(6)}
        >
            {avatars.map((avatar, index) => (
                <Image
                    style={
                        index === currentIndex
                            ? [
                                  styles.avatar,
                                  {
                                      borderWidth: 4,
                                      borderColor: 'lightblue',
                                      borderRadius: 100,
                                  },
                              ]
                            : styles.avatar
                    }
                    key={index}
                    source={avatar}
                />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    avatars: {
        height: verticalDp(20),
    },
    avatarsContainer: {
        alignSelf: 'center',
        paddingHorizontal: horizontalDp(40),
    },
    avatar: {
        height: 75,
        width: 75,
        marginRight: horizontalDp(6),
    },
})

export default AvatarSlider
