import type { Meta, StoryObj } from "@storybook/react";
import Header from "@packages/ui/components/common/header";

const meta = {
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
