import type { Meta, StoryObj } from '@storybook/react';
import { cartItems } from 'stub/cart-items';

import { PageTemplate } from './PageTemplate';

export default {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof PageTemplate>;

// Just to make the story a bit more undrestandable for the users
const DummyComponent: React.FC = ({ children }) => <div style={{ padding: 60 }}>{children}</div>;

type Story = StoryObj<typeof PageTemplate>;

export const Default: Story = {
  args: {
    children: (
      <DummyComponent>
        Default template with scrollable header and navigation items + Footer
      </DummyComponent>
    ),
  },
};

export const WithItemsInTheCart: Story = {
  parameters: {
    store: {
      initialState: {
        cart: {
          items: cartItems,
        },
      },
    },
  },
};

export const StickyHeader: Story = {
  args: {
    type: 'sticky-header',
    children: (
      <DummyComponent>
        Template with sticky header on desktop and navigation items. Try scrolling!
      </DummyComponent>
    ),
  },
};

export const Basic: Story = {
  args: {
    type: 'basic',
    children: (
      <DummyComponent>
        Simple template with scrollable header and no navigation items and no footer
      </DummyComponent>
    ),
  },
};
