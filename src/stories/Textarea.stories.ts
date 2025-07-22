import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "../components/ui/textarea";

const meta = {
  title: "Shadcn/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    rows: {
      control: "number",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your message...",
  },
};

export const WithValue: Story = {
  args: {
    value: "This is a pre-filled textarea with some content.",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled textarea",
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    placeholder: "Large textarea...",
    rows: 8,
  },
};
