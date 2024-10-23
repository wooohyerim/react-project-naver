import type { Meta, StoryObj } from '@storybook/react'

import Table from './Table'

const meta = {
  component: Table
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const 데이터가_없을때: Story = {
  args: {
    columns: ['1', '2'],
    data: []
  }
}

export const 데이터가_있을때: Story = {
  args: {
    columns: ['1', '2'],
    data: [
      { 컬럼이름: '1', 컬럼값: '1' },
      { 컬럼이름: '2', 컬럼값: '2' }
    ]
  }
}
