import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-08-17
 *@description 논문을 추가하는 등록창
 */

export default function DemoNew() {
  const navigate = useNavigate();

  // 이름, 요약, 설명, url, 참여자 변수
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContents] = useState("");
  const [urls, setUrl] = useState("");
  const [participants, setparticipants] = useState("");

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const descriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const contentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };
  const urlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const participantsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setparticipants(event.target.value);
  };

  return (
    <div>
      {/* 제목, 내용, 요약, 참여자, url을 볼 수 있는 TextField */}
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
            value={name}
            onChange={nameChange}
          />

          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="요약"
            multiline
            maxRows={4}
            value={description}
            onChange={descriptionChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="내용"
            multiline
            maxRows={4}
            value={content}
            onChange={contentsChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="url"
            multiline
            maxRows={4}
            value={urls}
            onChange={urlChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="참여자"
            multiline
            maxRows={4}
            value={participants}
            onChange={participantsChange}
          />
        </Grid>
      </Grid>

      {/* 취소, 수정, 삭제 버튼. 취소 버튼을 클릭하면 이전 페이지로 돌아감 */}
      <Grid container justifyContent="flex-end" alignItems="center" mt={10}>
        <Grid item>
          <Button
            variant="contained"
            sx={{ mr: 3, height: 55 }}
            onClick={() => {
              navigate("/admin/demo");
            }}
          >
            취소
          </Button>
          <Button variant="outlined" sx={{ mr: 3, height: 55 }}>
            수정
          </Button>
          <Button variant="outlined" sx={{ mr: 3, height: 55 }}>
            삭제
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
