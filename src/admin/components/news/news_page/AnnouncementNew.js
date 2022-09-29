import { Button, Box, Typography, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import { changeMainHeaderContext } from "../../../AdminMain";
import TitleTextField from "../../TitleTextField";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-09-28
 *@description 공지사항 등록하기 페이지
 *             사용자로부터 데이터를 입력받아 등록
 */

const AnnouncementNew = () => {
  const { changeMainText } = useContext(changeMainHeaderContext);

  const navigate = useNavigate();

  /* useRef */
  const editorRef = useRef(); // Editor DOM 선택용
  const fileInput = useRef(null); // 첨부파일 업로드

  /* useState */
  const [post, setPost] = useState({
    boardName: "announcement",
    title: "",
    content: "",
    author: "관리자",
    images: [],
    attach: [],
  });

  const [attaches, setAttaches] = useState([]);

  /* function */
  // toast-ui-editor 등록 버튼 핸들러
  const handleRegisterButton = () => {
    // 입력창에 입력한 내용을 HTML 태그 형태로 취득
    // console.log(editorRef.current?.getInstance().getHTML());
    // 입력창에 입력한 내용을 MarkDown 형태로 취득
    // console.log(editorRef.current?.getInstance().getMarkdown());

    setPost({
      ...post,
      content: editorRef.current?.getInstance().getMarkdown(),
      attach: attaches,
    });

    console.log(post);

    // post 객체를 전송하는 코드
  };

  const handleFileUploadButtonClick = (e) => {
    fileInput.current.click();
  };

  const handleFileUploadChange = (e) => {
    console.log(e.target.files[0]);
    const newAttach = {
      fileName: e.target.files[0].name,
      filePath: "",
    };

    // 이미 첨부하지 않은 파일일 때만 추가
    if (
      attaches.filter((attach) => attach.fileName === newAttach.fileName)
        .length === 0
    ) {
      setAttaches([...attaches, newAttach]);
    }
  };

  const attachRemove = (fileName) => {
    setAttaches(attaches.filter((attach) => attach.fileName !== fileName));
  };

  const titleChange = (event) => {
    setPost({
      ...post,
      title: event.target.value,
    });
  };

  /* useEffect */
  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("소식 > 소식통 > 등록하기");
    } else {
      navigate("/admin/signin");
    }
  }, []);

  return (
    <div
      style={{
        paddingTop: "3%",
        paddingBottom: "3%",
        paddingLeft: "7.5%",
        paddingRight: "7.5%",
      }}
    >
      {/* title 입력 */}
      <TitleTextField onChange={titleChange} value={post.title} />

      {/* content 입력 */}
      <Editor
        ref={editorRef} // DOM 선택용 useRef
        placeholder="내용을 입력해주세요."
        previewStyle="vertical" // 미리보기 스타일 지정
        height="800px" // 에디터 창 높이
        initialEditType="wysiwyg" //
        toolbarItems={[
          // 툴바 옵션 설정
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
        useCommandShortcut={false} // 키보드 입력 컨트롤 방지
      ></Editor>

      {/* 첨부파일 등록 */}
      <Box sx={{ my: "2%", display: "flex" }}>
        {/* 파일 업로드 버튼 */}
        <Box sx={{ width: "10%" }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleFileUploadButtonClick}
          >
            파일 업로드
          </Button>
          <input
            type="file"
            ref={fileInput}
            onChange={handleFileUploadChange}
            style={{ display: "none" }}
          />
        </Box>

        {/* 첨부파일 Stack */}
        <Stack
          direction="column"
          spacing={1}
          sx={{
            ml: "1%",
            width: "90%",
            alignItems: "flex-start",
            display: "flex",
            border: "1px solid #D3D3D3",
            borderRadius: "10px",
          }}
        >
          {attaches.map((attach) => (
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* 파일명 */}
              <Typography sx={{ ml: "1%" }}>{attach.fileName}</Typography>

              {/* 삭제버튼 */}
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => attachRemove(attach.fileName)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box sx={{ display: "flex", my: "2%", justifyContent: "flex-end" }}>
        <Button
          sx={{ mx: "1%" }}
          variant="contained"
          size="large"
          onClick={() => navigate("./../")}
        >
          취소하기
        </Button>
        <Button variant="contained" size="large" onClick={handleRegisterButton}>
          등록하기
        </Button>
      </Box>
    </div>
  );
};

export default AnnouncementNew;
