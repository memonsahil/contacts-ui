import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const verticalDp = (percentage: number) => {
    const value = (percentage * height) / 100
    return value
}

const horizontalDp = (percentage: number) => {
    const value = (percentage * width) / 100
    return value
}

export { height, width, verticalDp, horizontalDp }
