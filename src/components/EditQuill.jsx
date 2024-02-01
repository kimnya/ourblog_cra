import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useCallback, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { storage } from "../firebase/Firebase";

//모듈을 useMemo로 감싸지 않으면 렌더링이 발생할 때마다 모듈 객체가 새로 생성되면서 focus가 에디터에서 벗어난다. 위 코드처럼 module 객체를 useMemo로 감싸주도록 하자.

const EditQuill = ({ values, setValues }) => {
  const quillRef = useRef(null);

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const editor = quillRef.current.getEditor();
      const file = input.files[0];
      const range = editor.getSelection(true);
      try {
        // 파일명을 "image/Date.now()"로 저장
        const storageRef = ref(storage, `image/${Date.now()}`);

        // Firebase Method : uploadBytes, getDownloadURL
        await uploadBytes(storageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            // 이미지 URL 에디터에 삽입
            editor.insertEmbed(range.index, "image", url);
            // URL 삽입 후 커서를 이미지 뒷 칸으로 이동
            editor.setSelection(range.index + 1);
            console.log(url);
          });
        });
      } catch (error) {
        alert("오류");
      }
    });
  };

  const modules = useCallback(
    {
      toolbar: {
        container: [
          ["link", "image", "video"],
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
      },
      clipboard: {
        matchVisual: false,
      },
    },
    []
  );

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
    "indent",
    "background",
    "color",
    "link",
    "image",
    "video",
    "width",
  ];

  return (
    <>
      <ReactQuill
        ref={quillRef}
        style={{ height: "74vh", width: "50vw" }}
        theme="snow"
        modules={modules}
        formats={formats}
        onChange={setValues}
        value={values}
        placeholder="내용을 입력해주세요"
      />
    </>
  );
};

export default EditQuill;
