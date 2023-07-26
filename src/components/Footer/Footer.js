import React from 'react';
import './Footer.css';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div style={{ paddingTop: '30px', paddingBottom:'30px'}}>
            <Grid
            style={{ display:'flex', justifyContent:'center'}}
            container
            sx={{ color:'text.primary'}}
            >
                <Grid
                style={{ display:'flex', justifyContent:'space-evenly'}}
                item
                xs={4}
                >
                    <LinkedInIcon
                    id='icon'
                    className='pop-on-hover'
                    sx={{ fontSize: 50 }}
                    onClick={(event) =>
                        (window.location.href = 'https://www.linkedin.com/in/jasonweaver2/')
                    }
                    />
                    <GitHubIcon
                    id='icon'
                    className='pop-on-hover'
                    sx={{ fontSize: 50 }}
                    onClick={(event) =>
                        (window.location.href = 'https://github.com/Jweaver74')
                    }
                    />
                    <EmailIcon
                    id='icon'
                    className='pop-on-hover'
                    sx={{ fontSize: 50 }}
                    onClick={(event) =>
                        (window.location.href = 'mailto:jamaweaver@yahoo.com')
                    }
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;

    