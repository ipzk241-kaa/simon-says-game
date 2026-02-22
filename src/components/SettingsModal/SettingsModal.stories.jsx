import SettingsModal from "./SettingsModal";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

/**
 * Fake Redux store for Storybook
 */
const store = configureStore({
  reducer: {
    gameSettings: () => ({
      difficulty: "medium",
      settingsByDifficulty: {
        easy: {},
        medium: {},
        hard: {},
      },
    }),
  },
});

/**
 * Decorator:
 * - Redux Provider
 * - modal-root portal container
 */
const ModalDecorator = (Story) => {
  let modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.id = "modal-root";
    document.body.appendChild(modalRoot);
  }

  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};

const meta = {
  title: "Components/SettingsModal",
  component: SettingsModal,

  decorators: [ModalDecorator],

  argTypes: {
    isOpen: {
      control: "boolean",
    },

    onClose: {
      action: "closed",
    },
  },
};

export default meta;

/**
 * Stories
 */

export const ClosedModal = {
  args: {
    isOpen: false,
  },
};

export const Interactive = {
  args: {
    isOpen: true,
  },
};