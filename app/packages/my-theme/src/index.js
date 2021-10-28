import Root from "./Root"

export default {
  name: "my-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {
      beforeSSR: async({actions}) => { await actions.source.fetch("/pets"); }

    }
  }
};
