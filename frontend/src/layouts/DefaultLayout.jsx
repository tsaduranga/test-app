import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from '../components/menu/mainListItems.jsx';
import { Navigate, Outlet } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useStateContext } from '../contexts/ContextProvider.js';
import {  axiosClient} from '../axios-client.js';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { getStockDetails, getStockDetailsByDate } from '../store/actions/stockDetailsActions.js';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


const mdTheme = createTheme();

function DashboardContent() {
  const dispatch = useDispatch()
  const { token, setUser, setToken  } = useStateContext();
  const [open, setOpen] = useState(true);
  const apikey = process.env.POLYGON_API_KEY

  const currentDate = new Date().toISOString().slice(0, 10);


  useEffect(() => {
    axiosClient.get('/users/profile')
        .then(({ data }) => {
          setUser(data)
        })

        dispatch(getStockDetails(apikey))
  }, [])


  if (!token) {
    return <Navigate to="/login" />
  }
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const onLogout = ev => {
    ev.preventDefault()
    setUser({})
    setToken(null)
  }

  const serchOnChangeHandler = (date) => {
    dispatch(getStockDetailsByDate(apikey,date))
  }


  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', 
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
           
            <Grid  sx={{ flexGrow: 1 }} >
            <TextField disableFuture={true} id="standard-basic" variant="outlined" type='date' style={{ backgroundColor:'white'}} defaultValue={currentDate} onChange={(e) => serchOnChangeHandler(e.target.value)} maxValue={currentDate} />
            </Grid>
            {/* </Typography> */}
            <IconButton color="inherit">
              <Button color="inherit" onClick={onLogout}>Logout</Button>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 1, mb: 1 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                  }}
                >
                  <Outlet />
                </Paper>
              </Grid>

            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function DefaultLayout() {
  return <DashboardContent />;
}