import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import Logo from '../logo-feira.png';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3' className='text-warning'>
                <img src={Logo} alt="logotipo" style={{width : "50px"}}/>
                Feira On-line
            </Typography>
            <div>
                <Link to="/">
                    <Button variant="contained" color="success">Home</Button>
                </Link>
                <Link to="/fruta">
                    <Button variant="contained" color="success">Fruta</Button>
                </Link>
                <Link to="/diversos">
                    <Button variant="contained" color="success">Diversos</Button>
                </Link>
                <Link to="/verdura">
                    <Button variant="contained" color="success">Verdura</Button>
                </Link>
                <Link to="/legume">
                    <Button variant="contained" color="success">Legume</Button>
                </Link>
                <Link to="/contato">
                    <Button variant="contained" color="success">Contato</Button>
                </Link>
            </div>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
