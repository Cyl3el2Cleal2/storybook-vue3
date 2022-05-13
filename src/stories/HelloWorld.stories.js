import HelloWorld from "../components/HelloWorld.vue";

export default {
  title: "Example/HelloWorld",
  component: HelloWorld,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HelloWorld },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<hello-world v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

Primary.parameters = {
  display: {
    values: [
      { name: 'oneline'}
    ]
  }
}
