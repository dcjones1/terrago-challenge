import React from 'react'
import Screw from './Screw'
import withStyles from 'react-jss'

const styles ={
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '1vh',
  },
  screws: {
    display: 'flex',
    width: '175px',
    marginLeft: '2%',
  },
  text: {
    fontSize: '14px',
    color: 'white',
  }
}

const Footer = (props) => {
  const { classes } = props
  return (
    <footer className={classes.footer}>
      <div className={classes.screws}>
        <Screw />
        <p className={classes.text}>Fixed to the bottom</p>
        <Screw />
      </div>
    </footer>
  )
}

export default withStyles(styles)(Footer)
