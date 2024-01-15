import { FlatList, ScrollView } from 'react-native'
import renderer from 'react-test-renderer'
import { describe, it, expect } from '@jest/globals'
import ContactInfo from '../src/components/contactInfo/contactInfo'

describe('ContactInfo', () => {
    it('Test to see if the component renders.', () => {
        const avatarRef = { current: null } as React.RefObject<ScrollView>
        const contactRef = { current: null } as React.RefObject<FlatList>

        const isScrolling = false

        const contactDetails = [
            {
                userId: '1',
                firstName: 'John',
                lastName: 'Doe',
                occupation: 'Software Developer',
                bio: 'I love coding!',
            },
            {
                userId: '2',
                firstName: 'Jane',
                lastName: 'Doe',
                occupation: 'Product Manager',
                bio: 'I love managing products!',
            },
        ]

        const component = renderer.create(
            <ContactInfo
                avatarRef={avatarRef}
                contactRef={contactRef}
                contactDetails={contactDetails}
                indexSetter={() => {}}
                scrollSetter={() => {}}
                isScroll={isScrolling}
            />
        )

        expect(component).not.toBeNull()
    })
})
