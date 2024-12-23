import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function InputSearch() {
  const [nameSearch, setNameSearch] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameSearch(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement your search logic here
    console.log("Searching for:", nameSearch);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        minWidth: 400,
      }}
      onSubmit={handleSearch} // Handle form submission
    >
      <Divider orientation="vertical" />
      <InputBase
        id="input-search"
        size="small"
        sx={{ ml: 1, flex: 1 }}
        value={nameSearch}
        onChange={handleChange} // Use onChange instead of onSubmit
        placeholder="Nhập tên dự án cần tìm"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
