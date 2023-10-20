import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {
  Checkbox,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Stack,
} from '@mui/material';
import { FC } from 'react';

export const TodoItem: FC = () => {
  return (
    <ListItem
    // sx={{
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   gap: '16px',
    // }}
    >
      <Checkbox sx={{ color: 'primary.main' }} />
      <ListItemText sx={{ mx: 1 }}>Задача номер 1</ListItemText>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <IconButton color="primary">
          <EditOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: '#EB6F52' }}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
};
