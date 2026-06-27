import "../app/globals.css";

import type { Preview } from "@storybook/nextjs-vite";
import { Lato, Montserrat } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "600", "700"],
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        className={`${lato.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
