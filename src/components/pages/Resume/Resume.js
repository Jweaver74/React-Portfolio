import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PdfFile from '../../../Resume.pdf';
import './Resume.css';

export default function Resume() {
    return (
        <Box>
            <div>
                <a
                href={PdfFile}
                download='Jason Weaver Resume'
                target='_blank'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '25px',
                }}
                rel='noreferrer'
                >
                    <Button id='resume-button' className='pop-up-hover'>
                    Click Here To Download My Resume
                    </Button>
                </a>
                <h2
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textDecoration: 'underline',
                }}
                >
                    Front End Proficiencies
                </h2>
                <p
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingRight: '150px',
                    fontSize: '25px',
                
                }}
                >
                - HTML
                <br></br>- CSS
                <br></br>- JavaScript
                <br></br>- jQuery
                <br></br>- React
                <br></br>- Bootstrap
                <br></br>- Bulma
                </p>
                <h2
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textDecoration: 'underline',
                }}
                >
                    Back End Proficiencies
                </h2>
                <p
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingRight: '25px',
                    fontSize: '25px',
                }}
                >
                    - HTML
                    <br></br>- API's
                    <br></br>- Node
                    <br></br>- Express
                    <br></br>- MySQL, Sequelize
                    <br></br>- MongoDB, Mongoose
                    <br></br>- REST
                    <br></br>- GraphQL
                </p>
            </div>
        </Box>
    );
}