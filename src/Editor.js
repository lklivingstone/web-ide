import React from "react";
import AceEditor from "react-ace";

import 'brace/mode/c_cpp';
import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/theme/monokai';

export default function Editor(data) {
  return (

    <AceEditor
      mode="c_cpp"
      theme="monokai"
      onChange={data.onChange}
      name="abcd"
      fontSize={14}
      width='100%'
      height='100%'
      // editorProps={{
      //   $blockScrolling: true
      // }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        tabSize: 4
      }}
    />
    
      // <AceEditor
      //   mode="javascript"
      //   width="100%"
      //   height="100%"
      //   theme="github"
      //   onChange={data.onChange}
      //   fontSize={14}
      //   showPrintMargin={true}
      //   showGutter={true}
      //   highlightActiveLine={true}
      //   value={data.value}
      //   wrapEnabled={true}
      //   setOptions={{
      //     useWorker: false,
      //     enableBasicAutocompletion: true,
      //     enableLiveAutocompletion: true,
      //     enableSnippets: true,
      //     showLineNumbers: true,
      //     tabSize: 2
      //   }}
      // />
    
  );
}
