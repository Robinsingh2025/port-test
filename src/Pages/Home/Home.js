import React from 'react';
import './Home.style.scss';
import { Button } from '@material-ui/core';
import Face from '@material-ui/icons/Face';
import Folder from '@material-ui/icons/Folder';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='container'>
      <div className='title'>
        <h1>Robin Singh</h1>
        <h3>Software Developer </h3>
        <div className='buttons'>
        <Link to="/about" >
        <Button
            variant='contained'
            color='secondary'
            className='button'
            endIcon={<Face />}
          >
            About Me
          </Button>
        </Link>
          
          <Link to="/portfolio">
          <Button
            variant='contained'
            color='primary'
            className='button'
            endIcon={<Folder />}
          >
            Projects
          </Button>
          </Link>
       
        </div>
      </div>
    </div>
  );
}
export default Home;
