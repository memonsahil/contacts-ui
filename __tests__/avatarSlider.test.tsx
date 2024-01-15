import { FlatList, ScrollView, Image } from 'react-native'
import renderer from 'react-test-renderer'
import { describe, it, expect } from '@jest/globals'
import AvatarSlider from '../src/components/avatarSlider/avatarSlider'
import avatar_1 from '../src/assets/avatars/avatar1.png'
import avatar_2 from '../src/assets/avatars/avatar2.png'
import avatar_3 from '../src/assets/avatars/avatar3.png'

describe('AvatarSlider', () => {
    it('Test to see if the component renders.', () => {
        const avatarRef = { current: null } as React.RefObject<ScrollView>
        const contactRef = { current: null } as React.RefObject<FlatList>

        const isScrolling = false
        const selectedAvatarIndex = 0

        const avatars = [avatar_1, avatar_2, avatar_3]

        const component = renderer.create(
            <AvatarSlider
                avatars={avatars}
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

            const avatars = [avatar_1, avatar_2, avatar_3]

            const component = renderer.create(
                <AvatarSlider
                    avatars={avatars}
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
            expect(imageElements.length).toBe(avatars.length)
        })
})
