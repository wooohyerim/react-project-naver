import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta = {
  component: Button
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const 기본표시: Story = {
  args: {
    type: 'button',
    onClick: action('클릭'),
    children: '플러스'
  }
}
