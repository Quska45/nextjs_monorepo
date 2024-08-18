import type { Meta, StoryObj } from "@storybook/react";
import Blockquote from "@packages/ui/components/common/blockquote";
// 어떤 레포에서 사용되느냐에 따라 스타일을 다르게 가고 싶기 때문에
import "@guide/layout.css";

const meta = {
  component: Blockquote,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        id: "1",
        text: "1",
      },
      {
        id: "2",
        text: "2",
      },
      {
        id: "3",
        text: "3",
      },
    ],
    title: "title",
  },
};

export const Depth: Story = {
  args: {
    data: [
      {
        id: "1",
        text: "1",
        depth: "1",
      },
      {
        id: "2",
        text: "2",
        depth: "2",
      },
      {
        id: "3",
        text: "3",
        depth: "3",
      },
      {
        id: "4",
        text: "4",
        depth: "4",
      },
      {
        id: "5",
        text: "5",
        depth: "5",
      },
      {
        id: "6",
        text: "6",
        depth: "6",
      },
      {
        id: "7",
        text: "7",
        depth: "7",
      },
      {
        id: "8",
        text: "8",
        depth: "8",
      },
    ],
    title: "title",
  },
};
