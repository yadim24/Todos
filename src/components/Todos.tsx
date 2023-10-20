import { AppBar, Avatar, Box, Typography } from '@mui/material';
import { FC } from 'react';
import { TodoList } from './TodoList';

export const Todos: FC = () => {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Box
          component="header"
          sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
        >
          <Typography variant="h4" component="h1">
            TODOS
          </Typography>
          <Avatar alt="Дмитрий Яковец" src="public/Ava_2x2.jpg" />
        </Box>
      </AppBar>
      <TodoList />
    </>
  );
};
