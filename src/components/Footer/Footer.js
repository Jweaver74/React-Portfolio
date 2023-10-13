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
                    onClick={() =>
                        window.open('https://www.linkedin.com/in/jasonweaver2/', '_blank')
                    }
                    />
                    <GitHubIcon
                    id='icon'
                    className='pop-on-hover'
                    sx={{ fontSize: 50 }}
                    onClick={() =>
                        window.open('https://github.com/Jweaver74', '_blank')
                    }
                    />
                    <EmailIcon
                    id='icon'
                    className='pop-on-hover'
                    sx={{ fontSize: 50 }}
                    onClick={() =>
                        window.open('mailto:jamaweaver@yahoo.com', '_blank')
                    }
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;

    