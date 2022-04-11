import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useAppSelector } from '../../storeConfig/hooks';
import { selectTvShows } from '../../reducers/tvShowReducer';

interface SearchBarProps {
  search: string;
  onSearch: (search: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const tvShow = useAppSelector(selectTvShows);
  const [value, setValue] = useState(tvShow.search || 'Powerpuff');

  const handleChange = (inputValue: string) => {
    if (value === inputValue) return;
    setValue(inputValue);
  };

  return (
    <Paper
      component="form"
      onSubmit={(ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        onSearch(value);
      }}
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        minWidth: '30rem'
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        value={value}
        onChange={(ev) => handleChange(ev.target.value)}
        placeholder="Search TV Show"
        inputProps={{ 'aria-label': 'Search TV Show' }}
      />
      <IconButton
        onClick={() => onSearch(value)}
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
