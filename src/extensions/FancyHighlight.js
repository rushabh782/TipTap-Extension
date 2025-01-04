import { Mark } from "@tiptap/core";

export const FancyHighlight = Mark.create({
  name: "fancyHighlight",

  addAttributes() {
    return {
      color: {
        default: "#ffeb3b", // Default highlight color (yellow)
        parseHTML: (element) => element.getAttribute("data-color"),
        renderHTML: (attributes) => ({ "data-color": attributes.color }),
      },
    };
  },

  parseHTML() {
    return [{ tag: "span[data-fancy-highlight]" }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      {
        ...HTMLAttributes,
        "data-fancy-highlight": "",
        class: "fancy-highlight",
        style: `background-color: ${HTMLAttributes.color};`,
      },
      0,
    ];
  },

  addCommands() {
    return {
      setFancyHighlight:
        (color = "#ffeb3b") =>
        ({ chain }) => {
          return chain().focus().toggleMark("fancyHighlight", { color }).run();
        },
    };
  },
});
