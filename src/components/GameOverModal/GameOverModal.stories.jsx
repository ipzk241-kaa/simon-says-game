import GameOverModal from "./GameOverModal";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";


// Fake Redux store (для Storybook)
const store = configureStore({
  reducer: {
    user: () => ({
      userId: "storybook-user",
      nickname: "StoryPlayer",
    }),
  },
});


// portal root
const PortalDecorator = (Story) => {
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

export default {
  title: "Components/GameOverModal",
  component: GameOverModal,
  decorators: [PortalDecorator],

  argTypes: {
    isOpen: {
      control: "boolean",
    },
    score: {
      control: {
        type: "number",
        min: 0,
        max: 100,
      },
    },
    onRestart: {
      action: "restart-clicked",
    },
  },
};

const Template = (args) => <GameOverModal {...args} />;


// ✅ Story 1 — низький результат
export const LowScore = Template.bind({});
LowScore.args = {
  isOpen: true,
  score: 3,
};


// ✅ Story 2 — високий результат
export const HighScore = Template.bind({});
HighScore.args = {
  isOpen: true,
  score: 25,
};


// ✅ Story 3 — модалка закрита
export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  score: 10,
};