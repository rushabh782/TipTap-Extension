import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FancyHighlight } from "./extensions/FancyHighlight";
import "./styles.css";

const App = () => {
  const [color, setColor] = useState("#ffeb3b");

  const editor = useEditor({
    extensions: [StarterKit, FancyHighlight],
    content: "<p>Try highlighting this text!</p>",
  });

  return (
    <div>
      <h2>🎨 Fancy Highlight Editor</h2>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button
        onClick={() => editor.chain().focus().setFancyHighlight(color).run()}
      >
        Highlight Selected Text
      </button>
      <EditorContent editor={editor} />
    </div>
  );
};

export default App;
