import React, { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";

const formats = [
  "font",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "align",
  "color",
  "background",
  "size",
  "h1",
];

const TextEditor = ({ valueName, onChange }) => {
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          // [{ size: ["small", false, "large", "huge"] }],
          // [{ align: [] }],
          ["bold", "italic", "underline", "strike"],
          // [{ list: "ordered" }, { list: "bullet" }],
          [
            {
              color: [],
            },
            { background: [] },
          ],
        ],
      },
    };
  }, []);

  const handleChange = (content) => {
    onChange(valueName, content);
  };

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      onChange={handleChange}
    />
  );
};

export default TextEditor;
