import React from "react";
import { EditorState } from "draft-js";
import Editor from "@draft-js-plugins/editor"
import "draft-js/dist/Draft.css";


export default function MyEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );


  return (
    <div
      style={{ border: "1px solid black", minHeight: "6em", cursor: "text", width: "60%", margin: "0 auto"}}
    >
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Write something!"
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
}