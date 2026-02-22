import ButtonColor from "./ButtonColor";

export default {
  title: "Components/ButtonColor",
  component: ButtonColor,

  // Controls (конфігурація пропсів)
  argTypes: {
    color: {
      control: "select",
      options: [
        "red",
        "green",
        "blue",
        "yellow",
        "purple",
        "orange",
        "pink",
        "cyan",
        "celadon",
      ],
    },
    isActive: {
      control: "boolean",
    },
    onClick: {
      action: "clicked",
    },
  },
};

// Template
const Template = (args) => <ButtonColor {...args} />;


// ✅ Story 1 — активна кнопка
export const ActiveRed = Template.bind({});
ActiveRed.args = {
  color: "red",
  isActive: true,
};


// ✅ Story 2 — неактивна кнопка
export const InactiveBlue = Template.bind({});
InactiveBlue.args = {
  color: "blue",
  isActive: false,
};


// ✅ Story 3 — активна зелена
export const ActiveGreen = Template.bind({});
ActiveGreen.args = {
  color: "green",
  isActive: true,
};