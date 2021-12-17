import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UseAuth from '../../Hooks/UseAuth';
import { Link, Outlet } from 'react-router-dom';

const drawerWidth = 240;


const Dashboard = (props) => {
    const {user,admin,logOut}=UseAuth()

    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div>
      <Toolbar>
      <div className='user-info'>
<img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/50/000000/external-user-interface-kiranshastry-gradient-kiranshastry.png" alt=''/>
    <h3>{user.displayName}</h3>
    <h4>{user.email}</h4>
</div>
      </Toolbar>
      <Divider sx={{backgroundColor:'#fff',}} />


     { admin && <List>


          {admin &&  <Link style={{color:'#fff',textDecoration:'none'}} to='/dashboard/makeAdmin'>
              <ListItem>
                <ListItemIcon><img src="https://img.icons8.com/color/30/000000/dashboard-layout.png" alt=''/></ListItemIcon>
                <ListItemText >
                Make Admin 
                </ListItemText>
              </ListItem>
              </Link>}

          {admin &&  <Link style={{color:'#fff',textDecoration:'none'}} to='/dashboard/addProduct'>
              <ListItem>
                <ListItemIcon><img alt='' src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/30/000000/external-product-logistics-delivery-icongeek26-outline-gradient-icongeek26.png"/></ListItemIcon>
                <ListItemText >
                Add Product
                </ListItemText>
              </ListItem>
              </Link>}

            {admin &&<Link style={{color:'#fff',textDecoration:'none'}} to='/dashboard/mAllProducts'>
              <ListItem>
                <ListItemIcon><img alt='' src="https://img.icons8.com/external-soft-fill-juicy-fish/30/000000/external-product-crisis-management-soft-fill-soft-fill-juicy-fish-2.png"/></ListItemIcon>
                <ListItemText >
                Manage All Products
                </ListItemText>
              </ListItem>
              </Link>}

            {admin &&<Link style={{color:'#fff',textDecoration:'none'}} to='/dashboard/mAllOrders'>
              <ListItem>
                <ListItemIcon><img src="https://img.icons8.com/external-wanicon-two-tone-wanicon/30/000000/external-product-design-art-and-design-wanicon-two-tone-wanicon.png" alt=''/></ListItemIcon>
                <ListItemText >
                Manage All Orders
                </ListItemText>
              </ListItem>
              </Link>
}
            { admin && <Link style={{color:'#fff',textDecoration:'none'}} to='/home'>
              <ListItem>
                <ListItemIcon><img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/30/000000/external-home-miscellaneous-kiranshastry-gradient-kiranshastry.png" alt=''/></ListItemIcon>
                <ListItemText >
               back Home
                </ListItemText>
              </ListItem>
              </Link>}

              <button  onClick={logOut} style={{color:'#fff',textDecoration:'none',backgroundColor:'transparent',border:0,margin:0,padding:0}}>
              <ListItem>
                <ListItemIcon><img src="https://img.icons8.com/nolan/30/exit.png" alt=''/></ListItemIcon>
                <ListItemText >
               Log Out
                </ListItemText>
              </ListItem>
              </button>

     </List>}


{ !admin && <List>
          <Link style={{color:'#fff',textDecoration:'none'}} to='/dashboard/MyOrders'>
              <ListItem>
                <ListItemIcon><img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/30/000000/external-shopping-cart-medical-kiranshastry-gradient-kiranshastry.png" alt=''/></ListItemIcon>
                <ListItemText >
                My Orders
                </ListItemText>
              </ListItem>
              </Link>

          <Link style={{color:'#fff',textDecoration:'none'}} to='/dashboard/Review'>
              <ListItem>
                <ListItemIcon><img src="https://img.icons8.com/external-wanicon-flat-wanicon/30/000000/external-review-influencer-marketing-wanicon-flat-wanicon.png" alt=''/></ListItemIcon>
                <ListItemText >
                Review
                </ListItemText>
              </ListItem>
              </Link>

          <Link style={{color:'#fff',textDecoration:'none'}} to='/home'>
              <ListItem>
                <ListItemIcon><img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/30/000000/external-home-miscellaneous-kiranshastry-gradient-kiranshastry.png" alt=''/></ListItemIcon>
                <ListItemText >
               back Home
                </ListItemText>
              </ListItem>
              </Link>

          <button  onClick={logOut} style={{color:'#fff',textDecoration:'none',backgroundColor:'transparent',border:0,margin:0,padding:0}}>
              <ListItem>
                <ListItemIcon><img src="https://img.icons8.com/nolan/30/exit.png" alt=''/></ListItemIcon>
                <ListItemText >
               Log Out
                </ListItemText>
              </ListItem>
              </button>
      </List>
      
      }
     

   
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


    return (
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, backgroundColor:'#111827',padding:'9px'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <div className='header-logo'>
     <img alt='' src='https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/logo.png' />
     DASHBOARD
   </div>
            </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'#111827', color:'#fff' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor:'#111827', color:'#fff'},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`,backgroundColor:'#000',color:'#fff' } }}
      >
        <Toolbar />
        <Typography>
       <Outlet/>
        </Typography>
        
      </Box>
    </Box>
    );
};

export default Dashboard;