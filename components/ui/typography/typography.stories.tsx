import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Typography } from "./typography";

const meta = {
  title: "UI/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "body",
        "body-sm",
        "lead",
        "muted",
        "label",
        "caption",
      ],
    },
    asChild: { control: "boolean" },
  },
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: { variant: "h1", children: "Discover your next adventure" },
};

export const Heading2: Story = {
  args: { variant: "h2", children: "Popular destinations" },
};

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "Browse curated trips, compare prices, and book with confidence. Flexible dates and secure checkout included.",
  },
};

export const Lead: Story = {
  args: {
    variant: "lead",
    children:
      "Plan less. Travel more. Hand-picked experiences for every budget.",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "Prices shown are per person, excluding taxes and fees.",
  },
};

export const Label: Story = {
  args: { variant: "label", children: "Destination" },
};

export const Caption: Story = {
  args: { variant: "caption", children: "Updated 2 hours ago" },
};

export const Scale: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex max-w-2xl flex-col gap-6">
      <Typography variant="h1">Heading 1 — Montserrat 600</Typography>
      <Typography variant="h2">Heading 2 — Montserrat 600</Typography>
      <Typography variant="h3">Heading 3 — Montserrat 600</Typography>
      <Typography variant="h4">Heading 4 — Montserrat 600</Typography>
      <Typography variant="h5">Heading 5 — Montserrat 600</Typography>
      <Typography variant="h6">Heading 6 — Montserrat 600</Typography>
      <Typography variant="lead">
        Lead — Lato. Introductory copy for hero sections and page summaries.
      </Typography>
      <Typography variant="body">
        Body — Lato. Default paragraph text for descriptions, policies, and
        content blocks.
      </Typography>
      <Typography variant="body-sm">
        Body small — Lato. Compact copy for dense UI areas.
      </Typography>
      <Typography variant="muted">
        Muted — Lato. Secondary information and helper text.
      </Typography>
      <Typography variant="label">Label — Lato medium</Typography>
      <Typography variant="caption">Caption — Lato extra small</Typography>
    </div>
  ),
};
