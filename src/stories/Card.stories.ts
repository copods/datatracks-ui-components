import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "../components/ui/card";

const meta = {
  title: "Shadcn/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Card Content",
    className: "w-[350px] p-6",
  },
};

export const WithCustomStyling: Story = {
  args: {
    children: "Card with custom styling",
    className: "w-[350px] p-6 bg-blue-50 border-blue-200",
  },
};
