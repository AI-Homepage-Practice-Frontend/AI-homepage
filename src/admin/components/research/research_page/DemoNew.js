import * as React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Grid } from "@mui/material";
import { useState } from "react";

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-08-16
 *@description 데모를 추가하는 등록창
 */

export default function DemoNew() {
  const navigate = useNavigate();

  // 제목, 요약, 내용, url, 참여자 변수
  const [demo, setDemo] = useState({
    name: "",
    description: "",
    content: "",
    url: "",
    participants: "",
  });

  const nameChange = (event) => {
    setDemo((cur) => {
      let newName = { ...cur };
      newName.name = event.target.value;
      return newName;
    });
  };
  const descriptionChange = (event) => {
    setDemo((cur) => {
      let newDescription = { ...cur };
      newDescription.description = event.target.value;
      return newDescription;
    });
  };
  const contentsChange = (event) => {
    setDemo((cur) => {
      let newContent = { ...cur };
      newContent.content = event.target.value;
      return newContent;
    });
  };
  const urlChange = (event) => {
    setDemo((cur) => {
      let newUrl = { ...cur };
      newUrl.url = event.target.value;
      return newUrl;
    });
  };

  const participantsChange = (event) => {
    setDemo((cur) => {
      let newParticipants = { ...cur };
      newParticipants.participants = event.target.value;
      return newParticipants;
    });
  };

  // 제출 기능. state값을 body로 모아서 post를 날린다.
  // const Submit = (event) => {
  //   event.preventDefault();

  //   let body = {
  //     name: name,
  //     description: description,
  //     content: content,
  //     url: url
  //     participants: participants
  //   };

  //   axios
  //     .post("http://localhost:3000/admin/demo/new", body)
  //     .then((res) => console.log(res));
  // };

  return (
    <div>
      {/* <form onSubmit={Submit}> */}
      {/* 제목, 요약, 내용, url, 참여자를 입력할 수 있는 TextField */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt={15}
      >
        <Grid item sx={{ width: { xs: "90%", md: "80%" } }}>
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="제목"
            multiline
            maxRows={4}
            value={demo.name}
            onChange={nameChange}
          />

          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="요약"
            multiline
            maxRows={4}
            value={demo.description}
            onChange={descriptionChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="내용"
            multiline
            maxRows={4}
            value={demo.content}
            onChange={contentsChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="url"
            multiline
            maxRows={4}
            value={demo.url}
            onChange={urlChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="참여자"
            multiline
            maxRows={4}
            value={demo.participants}
            onChange={participantsChange}
          />
        </Grid>
      </Grid>

      {/* 취소, 등록 버튼. 취소 버튼을 누르면 이전 페이지로 돌아감 */}
      <Grid container justifyContent="flex-end" alignItems="center" mt={10}>
        <Grid item>
          <Button
            variant="contained"
            sx={{ mr: 3, height: 55 }}
            onClick={() => {
              navigate("/admin/research/demo");
            }}
          >
            취소
          </Button>
          <Button variant="outlined" sx={{ mr: 3, height: 55 }} type="submit">
            등록
          </Button>
        </Grid>
      </Grid>
      {/* </form> */}
    </div>
  );
}
