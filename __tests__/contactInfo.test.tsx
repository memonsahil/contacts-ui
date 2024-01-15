import { FlatList, ScrollView, Text } from 'react-native'
import renderer from 'react-test-renderer'
import { describe, it, expect } from '@jest/globals'
import ContactInfo from '../src/components/contactInfo/contactInfo'
import avatar_1 from '../src/assets/avatars/avatar1.png'
import avatar_2 from '../src/assets/avatars/avatar2.png'

describe('ContactInfo', () => {
    it('Test to see if the component renders.', () => {
        const avatarRef = { current: null } as React.RefObject<ScrollView>
        const contactRef = { current: null } as React.RefObject<FlatList>

        const isScrolling = false

        const contacts = [
            {
                userId: '1',
                firstName: 'John',
                lastName: 'Doe',
                occupation: 'Software Developer',
                bio: 'I love coding!',
                avatar: avatar_1,
                phone: '1234567890',
                email: 'user@domain.com',
                links: ['https://www.linkedin.com/', 'https:/github.com/'],
            },
            {
                userId: '2',
                firstName: 'Jane',
                lastName: 'Doe',
                occupation: 'Product Manager',
                bio: 'I love managing products!',
                avatar: avatar_2,
                phone: '1234567890',
                email: 'user@domain.com',
                links: ['https://www.linkedin.com/', 'https:/github.com/'],
            },
        ]

        const component = renderer.create(
            <ContactInfo
                avatarRef={avatarRef}
                contactRef={contactRef}
                contacts={contacts}
                indexSetter={() => {}}
                scrollSetter={() => {}}
                isScroll={isScrolling}
            />
        )

        expect(component).not.toBeNull()
    }),
        it('Test to see if the correct number of contact details are rendered.', () => {
            const avatarRef = { current: null } as React.RefObject<ScrollView>
            const contactRef = { current: null } as React.RefObject<FlatList>

            const isScrolling = false

            const contacts = [
                {
                    userId: '1',
                    firstName: 'John',
                    lastName: 'Doe',
                    occupation: 'Software Developer',
                    bio: 'I love coding!',
                    avatar: avatar_1,
                    phone: '1234567890',
                    email: 'user@domain.com',
                    links: ['https://www.linkedin.com/', 'https://github.com/'],
                },
                {
                    userId: '2',
                    firstName: 'Jane',
                    lastName: 'Doe',
                    occupation: 'Product Manager',
                    bio: 'I love managing products!',
                    avatar: avatar_2,
                    phone: '1234567890',
                    email: 'user@domain.com',
                    links: ['https://www.linkedin.com/', 'https://github.com/'],
                },
            ]

            const component = renderer.create(
                <ContactInfo
                    avatarRef={avatarRef}
                    contactRef={contactRef}
                    contacts={contacts}
                    indexSetter={() => {}}
                    scrollSetter={() => {}}
                    isScroll={isScrolling}
                />
            )

            const instance = component.root
            const textElements = instance.findAllByType(Text)
            expect(textElements.length).toBe(contacts.length * 4)
        })
})
