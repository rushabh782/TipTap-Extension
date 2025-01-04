import { Node } from "@tiptap/core";

export const CustomTagExtension = Node.create({
  name: "customTag",

  group: "inline",

  inline: true,
  atom: true,

  addAttributes() {
    return {
      color: {
        default: "yellow",
        parseHTML: (element) => element.getAttribute("data-color"),
        renderHTML: (attributes) => {
          return { "data-color": attributes.color };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "my-tag",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["my-tag", HTMLAttributes, 0];
  },

  addCommands() {
    return {
      addCustomTag:
        (color = "yellow") =>
        ({ commands }) => {
          return commands.insertContent({
            type: "customTag",
            attrs: { color },
          });
        },
    };
  },
});
