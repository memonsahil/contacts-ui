import { FlatList, ScrollView, Image } from 'react-native'
import renderer from 'react-test-renderer'
import { describe, it, expect } from '@jest/globals'
import AvatarSlider from '../src/components/avatarSlider/avatarSlider'
import avatar_1 from '../src/assets/avatars/avatar1.png'
import avatar_2 from '../src/assets/avatars/avatar2.png'

describe('AvatarSlider', () => {
    it('Test to see if the component renders.', () => {
        const avatarRef = { current: null } as React.RefObject<ScrollView>
        const contactRef = { current: null } as React.RefObject<FlatList>

        const isScrolling = false
        const selectedAvatarIndex = 0

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
            <AvatarSlider
                contacts={contacts}
                avatarRef={avatarRef}
                contactRef={contactRef}
                indexSetter={() => {}}
                currentIndex={selectedAvatarIndex}
                scrollSetter={() => {}}
                isScroll={isScrolling}
            />
        )

        expect(component).not.toBeNull()
    }),
        it('Test to see if the correct number of avatars are rendered.', () => {
            const avatarRef = { current: null } as React.RefObject<ScrollView>
            const contactRef = { current: null } as React.RefObject<FlatList>

            const isScrolling = false
            const selectedAvatarIndex = 0

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
                <AvatarSlider
                    contacts={contacts}
                    avatarRef={avatarRef}
                    contactRef={contactRef}
                    indexSetter={() => {}}
                    currentIndex={selectedAvatarIndex}
                    scrollSetter={() => {}}
                    isScroll={isScrolling}
                />
            )

            const instance = component.root
            const imageElements = instance.findAllByType(Image)
            expect(imageElements.length).toBe(contacts.length)
        })
})
