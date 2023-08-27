import type { Meta, StoryFn } from '@storybook/react'

import { ToastProvider, Toast } from '.'
import { useToast } from '../../../core/stores'
import { Button } from '../../form'

const ToastStory = {
  title: 'UI/Toast',
  component: Toast,
} as Meta

const ToastComponent: React.FC<{ message: string }> = ({ message }) => {
  const { toggle } = useToast()

  const handleToggle = () => {
    toggle(true)(message)
  }

  return (
    <ToastProvider>
      <Toast />
      <Button onClick={handleToggle}>Toast Click</Button>
    </ToastProvider>
  )
}

const Template: StoryFn<{ message: string }> = (args) => (
  <ToastComponent {...args} />
)

export const Default = Template.bind({})

Default.args = { message: 'Hello: Toast Message' }

export default ToastStory
