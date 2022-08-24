import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  TextField,
  Select,
  Button,
  Grid,
} from "@mui/material";

// 가상의 연구분야 목록
const fieldSelect = [
  { id: 10, fieldName: "연구분야1" },
  { id: 20, fieldName: "연구분야2" },
  { id: 30, fieldName: "연구분야3" },
];

// 가상의 참여자 목록
const members = [
  { id: 10, name: "참여자1" },
  { id: 20, name: "참여자2" },
  { id: 30, name: "참여자3" },
];

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-08-16
 *@description 논문 자세히보기 및 수정, 삭제가 가능함
 */

export default function ThesisDetail() {
  const navigate = useNavigate();

  const [thesis, setThesis] = useState({
    fieldName: "",
    title: "",
    koName: "",
    enName: "",
    url: "",
    journal: "",
    publishDate: "",
    members: [
      {
        id: "",
        name: "",
      },
    ],
  });

  const titleChange = (event) => {
    setThesis((cur) => {
      let newTitle = { ...cur };
      newTitle.title = event.target.value;
      return newTitle;
    });
  };

  const koNameChange = (event) => {
    setThesis((cur) => {
      let newKoName = { ...cur };
      newKoName.koName = event.target.value;
      return newKoName;
    });
  };

  const enNameChange = (event) => {
    setThesis((cur) => {
      let newEnName = { ...cur };
      newEnName.enName = event.target.value;
      return newEnName;
    });
  };

  const urlsChange = (event) => {
    setThesis((cur) => {
      let newUrl = { ...cur };
      newUrl.url = event.target.value;
      return newUrl;
    });
  };

  const journalsChange = (event) => {
    setThesis((cur) => {
      let newJournal = { ...cur };
      newJournal.journal = event.target.value;
      return newJournal;
    });
  };

  const dateChange = (event) => {
    setThesis((cur) => {
      let newDate = { ...cur };
      newDate.publishDate = event.target.value;
      return newDate;
    });
  };

  const handleChange = (event) => {
    setThesis((cur) => {
      let newFieldName = { ...cur };
      newFieldName.fieldName = event.target.value;
      return newFieldName;
    });
  };

  const memberChange = (event) => {
    setThesis((cur) => {
      let newMember = { ...cur };
      newMember.members.name = event.target.value;
      return newMember;
    });
  };

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt={15}
      >
        {/* 연구분야, 제목, 참여자 등 자세한 정보를 출력함 */}
        <Grid item sx={{ width: { xs: "90%", md: "80%" } }}>
          <FormControl fullWidth>
            <InputLabel id="fieldSelect-label">연구분야</InputLabel>
            <Select
              labelId="fieldSelect-label"
              id="select"
              value={thesis.fieldName}
              label="field"
              onChange={handleChange}
            >
              {fieldSelect.map((name) => (
                <MenuItem value={name.id}>{name.fieldName}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="제목"
            multiline
            maxRows={4}
            value={thesis.title}
            onChange={titleChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="한글이름"
            multiline
            maxRows={4}
            value={thesis.krName}
            onChange={koNameChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="영문이름"
            multiline
            maxRows={4}
            value={thesis.enName}
            onChange={enNameChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="저널"
            multiline
            maxRows={4}
            value={thesis.journal}
            onChange={journalsChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="출판일"
            multiline
            maxRows={4}
            value={thesis.publishDate}
            onChange={dateChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="url"
            multiline
            maxRows={4}
            value={thesis.url}
            onChange={urlsChange}
          />
          <FormControl fullWidth sx={{ marginTop: 1 }}>
            <InputLabel id="members-label">참여자</InputLabel>
            <Select
              labelId="members-label"
              id="memberSelect"
              value={thesis.members.name}
              label="participants"
              onChange={memberChange}
            >
              {members.map((name) => (
                <MenuItem value={name.id}>{name.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* 취소, 수정, 삭제 버튼. 취소 버튼을 누르면 이전 페이지로 이동 */}
      <Grid container justifyContent="flex-end" alignItems="center" mt={10}>
        <Grid item>
          <Button
            variant="contained"
            sx={{ mr: 3, height: 55 }}
            onClick={() => {
              navigate("/admin/research/thesis");
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
