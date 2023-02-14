import './App.css';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import TaskList from './components/tasklists';
import red from '@mui/material/colors/red';

function App()
{
  const [tasks, setTasks] = useState([]);
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () =>
  {
    if (tasks != '')
    {
      setTaskList([...taskList, tasks]);
      setTasks('');
    }

  };

  const deleteTask = (idx) =>
  {
    const newTaskList = taskList.filter((task, index) => index !== idx);
    setTaskList(newTaskList);
  };
  const deleteAllTask = () =>
  {

    setTaskList([]);

  };

  useEffect(() =>
  {
    console.log('tasks', tasks);
    console.log('taskList', taskList);
  }, [tasks]);

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <Stack direction='row' spacing={2}>
            <TextField
              value={tasks}
              onChange={(e) => setTasks(e.target.value)}
              id='tasks'
              label='Task'
              variant='outlined'
            />
            <Button onClick={handleAddTask} variant='contained'>
              add task
            </Button>
            <Button onClick={deleteAllTask}
              style={{
                backgroundColor: 'salmon',
                color: 'white'
              }}
              variant='contained'>
              Delete all task
            </Button>
          </Stack>
        </Grid>
        <TaskList taskList={taskList} deleteTask={deleteTask} />
      </Grid>
    </div>
  );
}

export default App;
