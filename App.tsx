import { StyleSheet, View } from 'react-native'
import Header from './src/components/header/header'
import AvatarSlider from './src/components/avatarSlider/avatarSlider'
import themeColors from './src/enums/themeColors'

const App = () => {
    const contacts: {
        userId: string
        userName: string
        avatar: { uri: string }
        occupation: string
        bio: string
    }[] = [
        {
            userId: '1',
            userName: 'John Doe',
            avatar: require('./src/assets/avatars/avatar_1.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl.',
        },
        {
            userId: '2',
            userName: 'Jane Doe',
            avatar: require('./src/assets/avatars/avatar_2.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl.',
        },
        {
            userId: '3',
            userName: 'John Smith',
            avatar: require('./src/assets/avatars/avatar_3.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl.',
        },
        {
            userId: '4',
            userName: 'Jane Smith',
            avatar: require('./src/assets/avatars/avatar_4.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl.',
        },
        {
            userId: '5',
            userName: 'John Doe',
            avatar: require('./src/assets/avatars/avatar_5.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl.',
        },
        {
            userId: '6',
            userName: 'Jane Doe',
            avatar: require('./src/assets/avatars/avatar_6.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl.',
        },
        {
            userId: '7',
            userName: 'John Smith',
            avatar: require('./src/assets/avatars/avatar_7.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl.',
        },
        {
            userId: '8',
            userName: 'Jane Smith',
            avatar: require('./src/assets/avatars/avatar_8.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl. Donec euismod, nisl eget tempor aliquam, nisl velit aliquet nunc, vitae aliquam nisi nunc vitae nisl.',
        },
        {
            userId: '9',
            userName: 'John Doe',
            avatar: require('./src/assets/avatars/avatar_9.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '10',
            userName: 'Jane Doe',
            avatar: require('./src/assets/avatars/avatar_10.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '11',
            userName: 'John Smith',
            avatar: require('./src/assets/avatars/avatar_11.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '12',
            userName: 'Jane Smith',
            avatar: require('./src/assets/avatars/avatar_12.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '13',
            userName: 'John Doe',
            avatar: require('./src/assets/avatars/avatar_13.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '14',
            userName: 'Jane Doe',
            avatar: require('./src/assets/avatars/avatar_14.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '15',
            userName: 'John Smith',
            avatar: require('./src/assets/avatars/avatar_15.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '16',
            userName: 'Jane Smith',
            avatar: require('./src/assets/avatars/avatar_16.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '17',
            userName: 'John Doe',
            avatar: require('./src/assets/avatars/avatar_17.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '18',
            userName: 'Jane Doe',
            avatar: require('./src/assets/avatars/avatar_18.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '19',
            userName: 'John Smith',
            avatar: require('./src/assets/avatars/avatar_19.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '20',
            userName: 'Jane Smith',
            avatar: require('./src/assets/avatars/avatar_20.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '21',
            userName: 'John Doe',
            avatar: require('./src/assets/avatars/avatar_21.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '22',
            userName: 'Jane Doe',
            avatar: require('./src/assets/avatars/avatar_22.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '23',
            userName: 'John Smith',
            avatar: require('./src/assets/avatars/avatar_23.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '24',
            userName: 'Jane Smith',
            avatar: require('./src/assets/avatars/avatar_24.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '25',
            userName: 'John Doe',
            avatar: require('./src/assets/avatars/avatar_25.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '26',
            userName: 'Jane Doe',
            avatar: require('./src/assets/avatars/avatar_26.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '27',
            userName: 'John Smith',
            avatar: require('./src/assets/avatars/avatar_27.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            userId: '28',
            userName: 'Jane Smith',
            avatar: require('./src/assets/avatars/avatar_28.png'),
            occupation: 'Software Engineer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ]

    const avatars = contacts.map((contact) => contact.avatar)

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
