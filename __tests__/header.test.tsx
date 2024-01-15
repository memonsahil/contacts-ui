import renderer from 'react-test-renderer'
import { describe, it, expect } from '@jest/globals'
import Header from '../src/components/Header/Header'

describe('Header', () => {
    it('Test to see if the component renders.', () => {
        const title = 'Test Header'

        const component = renderer.create(<Header title={title} />)

        expect(component).not.toBeNull()
    })
})
