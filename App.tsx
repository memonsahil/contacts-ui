import { StyleSheet, View } from 'react-native'
import Header from './src/components/header/header'

const App = () => {
    return (
        <View style={styles.container}>
            <Header title="Contacts" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    title: {},
})

export default App
