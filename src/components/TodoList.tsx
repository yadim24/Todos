import AddTaskIcon from '@mui/icons-material/AddTask';
import {
  Container,
  Divider,
  IconButton,
  List,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import { FC } from 'react';
import { TodoItem } from './TodoItem';

export const TodoList: FC = () => {
  return (
    <Container maxWidth="sm" sx={{ p: '32px' }}>
      <Paper>
        <Stack direction="row" sx={{ p: 3 }}>
          <TextField fullWidth autoFocus label="Add todo" />
          <IconButton>
            <AddTaskIcon sx={{ color: 'primary.main' }} />
          </IconButton>
        </Stack>
        <Divider variant="middle" />
        <List sx={{ px: 1 }}>
          <TodoItem />
        </List>
      </Paper>
    </Container>
  );
};
