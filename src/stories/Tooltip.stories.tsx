import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip";

const meta = {
  title: "Shadcn/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    delayDuration: {
      control: "number",
      defaultValue: 0,
      description: "The delay duration before showing the tooltip",
    },
    defaultOpen: {
      control: "boolean",
      defaultValue: false,
      description: "Whether the tooltip is open by default",
    },
    open: {
      control: "boolean",
      description: "Controlled open state",
    },
    onOpenChange: {
      description: "Callback when open state changes",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithDelay: Story = {
  render: (args) => (
    <Tooltip delayDuration={500} {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me (500ms delay)</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip has a 500ms delay</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const DefaultOpen: Story = {
  render: (args) => (
    <Tooltip defaultOpen {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline">Always visible tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip is open by default</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const CustomContent: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline">Custom content</Button>
      </TooltipTrigger>
      <TooltipContent className="bg-destructive text-destructive-foreground">
        <p>Custom styled tooltip content</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="sm">
          ℹ️
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Information tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const MultipleTooltips: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Tooltip 1</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>First tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Tooltip 2</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Second tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Tooltip 3</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Third tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};
