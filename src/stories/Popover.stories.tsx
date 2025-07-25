import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { Button } from "../components/ui/button";

const meta = {
  title: "Shadcn/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="width">Width</label>
              <input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8 px-3 text-sm border border-input bg-background rounded-md"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="maxWidth">Max. width</label>
              <input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8 px-3 text-sm border border-input bg-background rounded-md"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="height">Height</label>
              <input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8 px-3 text-sm border border-input bg-background rounded-md"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="maxHeight">Max. height</label>
              <input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8 px-3 text-sm border border-input bg-background rounded-md"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Simple: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Click me</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>This is a simple popover with just text content.</p>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Edit Profile</h4>
            <p className="text-sm text-muted-foreground">
              Make changes to your profile here.
            </p>
          </div>
          <div className="grid gap-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              defaultValue="John Doe"
              className="h-8 px-3 text-sm border border-input bg-background rounded-md"
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              defaultValue="john@example.com"
              className="h-8 px-3 text-sm border border-input bg-background rounded-md"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm">
              Cancel
            </Button>
            <Button size="sm">Save</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
