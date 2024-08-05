import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

interface SearchBarProps {
  value?: string;
  setValue: (value: string) => void;
  searchButtonOnPress: () => void;
}

const SearchBar = ({ value, setValue, searchButtonOnPress }: SearchBarProps) => {
  return (
    <Box
      marginTop={3}
      marginBottom={2}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <TextField
        id="input-search"
        label="Search for an advice"
        placeholder="Type anything you want"
        variant="outlined"
        size="small"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{ flex: 1, marginRight: 1 }}
      />
      <Button
        variant="contained"
        size="medium"
        color="info"
        endIcon={<Search />}
        onClick={searchButtonOnPress}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
