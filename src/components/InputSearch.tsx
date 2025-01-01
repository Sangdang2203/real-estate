import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { projects } from "@/shared/libs/data";
import { InputSearchProps } from "@/app/interfaces";

const InputSearch: React.FC<InputSearchProps> = ({ onSearch }) => {
  const [nameSearch, setNameSearch] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameSearch(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filteredProjects = projects.filter(
      (project) =>
        project.name.toLowerCase().includes(nameSearch.toLowerCase()) ||
        project.location.toLowerCase().includes(nameSearch.toLowerCase())
    );
    onSearch(filteredProjects);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        minWidth: 300,
      }}
      onSubmit={handleSearch}
    >
      <Divider orientation="vertical" />
      <InputBase
        id="input-search"
        size="small"
        sx={{ ml: 1, flex: 1 }}
        value={nameSearch}
        onChange={handleChange}
        placeholder="Nhập tên dự án cần tìm"
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
};

export default InputSearch;
