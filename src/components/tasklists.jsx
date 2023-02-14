import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const tasklists = ({ taskList, deleteTask }) =>
{

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {taskList.map((task, idx) => (
          <ListItem
            key={idx}
            disableGutters
            secondaryAction={
              <IconButton onClick={(e) => deleteTask(idx)} aria-label="comment">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`${task}`} />
          </ListItem>
        ))}
      </List>


      {/* {taskList.map((task, idx) => (
        <Stack direction='column' spacing={2}>
          <Typography key={idx} variant='h6'>
            <Button onClick={(e) => deleteTask(idx)} variant='contained'>
              delete
            </Button>
            {task}
          </Typography>
        </Stack>
      ))} */}
    </>
  );
};

export default tasklists;
