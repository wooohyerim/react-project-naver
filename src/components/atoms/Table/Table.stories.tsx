import type { Meta, StoryObj } from '@storybook/react'

import Table from './Table'

const meta = {
  component: Table
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const 데이터가_없을때: Story = {
  args: {
    columns: ['#', 'Heading'],
    data: []
  }
}

export const 데이터가_있을때: Story = {
  args: {
    columns: ['#', 'Heading'],
    data: [{ '#': '1', Heading: '2' }]
  }
}
