import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram, faPinterestP } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { Logo } from './Logo';

const useStyles = makeStyles(theme => ({
  root: {
    height: 160,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#FFE6CD',
  },
  link: {
    textDecoration: 'none',
    letterSpacing: '2px',
    color: '#8F573B',
    fontWeight: '700',
    fontSize: '.8em',
    margin: '4px'
    // margin: '2.5vw'
  },
  // link:hover {
  //   opacity: '0.7'
  // },
  linksContainerL: {
    margin: '13vw',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
  },
  logoSocial: {
    width: '18vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5vw'
  },
  logo: {
    margin: 'auto, 5vw',
    width: '18vw'
  },
  socialCircles: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  social: {
    background: '#8F573B',
    color: 'white',
    padding: '20px',
    fontSize: '10px',
    width: '30px',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '50%',
  },
  linksContainerR: {
    margin: '13vw',
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <div className={classes.linksContainerL}>
        <Link className={classes.link} to="/">
          HOME
        </Link>
        <Link className={classes.link} to="/about">
          ABOUT
        </Link>
        <Link className={classes.link} to='/user/:id'>
          MY LIST
        </Link>
      </div>

      <div className={classes.logoSocial}>
        <Link className={classes.link} to="/">
          <Logo className={classes.logo} />
        </Link>
        <div className={classes.socialCircles}>
          <a className={classes.link} href="https://www.facebook.com/">
            {/* <FontAwesomeIcon icon={faFacebookF} className={classes.social} /> */}
          </a>
          <a className={classes.link} href="https://www.instagram.com/">
            {/* <FontAwesomeIcon icon={faInstagram} className={classes.social} /> */}
          </a>
          <a className={classes.link} href="https://www.twitter.com/">
            {/* <FontAwesomeIcon icon={faTwitter} className={classes.social} /> */}
          </a>
          <a className={classes.link} href="https://www.pinterest.com/">
            {/* <FontAwesomeIcon icon={faPinterestP} className={classes.social} /> */}
          </a>
        </div>
      </div>

      <div className={classes.linksContainerR}>
        <Link className={classes.link} to="/about">
          CONTACT
        </Link>
        <Link className={classes.link} to="/sign-in">
          SIGN IN
        </Link>
        <Link className={classes.link} to="/sign-up">
          SIGN UP
        </Link>
      </div>

    </div>
  );
  }