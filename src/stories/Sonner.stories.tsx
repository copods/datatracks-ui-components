import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toaster } from "../components/ui/sonner";
import { toast } from "sonner";
import { Button } from "../components/ui/button";

// Wrapper component to demonstrate toast functionality
const SonnerDemo = () => {
  const showSuccessToast = () => {
    toast.success("Success! Your action was completed successfully.");
  };

  const showErrorToast = () => {
    toast.error("Error! Something went wrong. Please try again.");
  };

  const showInfoToast = () => {
    toast.info("Info: Here's some useful information for you.");
  };

  const showWarningToast = () => {
    toast.warning("Warning: Please review your input before proceeding.");
  };

  const showPromiseToast = () => {
    toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
      loading: "Loading...",
      success: "Promise resolved!",
      error: "Promise rejected!",
    });
  };

  const showCustomToast = () => {
    toast("Custom toast with custom styling", {
      description: "This is a custom toast with additional description",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo clicked"),
      },
    });
  };

  return (
    <div className="space-y-4 p-4">
      <div className="grid grid-cols-2 gap-4">
        <Button onClick={showSuccessToast} variant="default">
          Success Toast
        </Button>
        <Button onClick={showErrorToast} variant="destructive">
          Error Toast
        </Button>
        <Button onClick={showInfoToast} variant="secondary">
          Info Toast
        </Button>
        <Button onClick={showWarningToast} variant="outline">
          Warning Toast
        </Button>
        <Button onClick={showPromiseToast} variant="default">
          Promise Toast
        </Button>
        <Button onClick={showCustomToast} variant="secondary">
          Custom Toast
        </Button>
      </div>
      <Toaster />
    </div>
  );
};

const meta = {
  title: "Shadcn/Sonner",
  component: SonnerDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SonnerDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const ToasterOnly: Story = {
  render: () => <Toaster />,
  args: {},
};
