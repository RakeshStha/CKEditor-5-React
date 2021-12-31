
import './App.css';
import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App() {
  const [addData, setVal] = useState("");
  const [addedData, showData] = useState(0);
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setVal(data);
  }
  return (
    <div className="">
      <h1 class="head">CKEditor5 practise</h1>
      <CKEditor editor={ClassicEditor} data = {addData} onChange={handleChange}/>
        <div class="btns">
            <button type="button" onClick={()=> showData(!addedData)}>{addedData ? "Hide Data" : "Show Data"}</button>
        </div>
      <div className="datas" dangerouslySetInnerHTML={{__html: addedData ? addData : ''}}>
      </div>

    </div>
  );
}

export default App;
