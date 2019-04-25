import React from 'react'
import redApp from '../assets/My app red @2x.png'
import greenApp from '../assets/My app green @2x.png'
import face from '../assets/face.jpg'
import withStyles from 'react-jss'

const styles = {
  header: {
    display: 'flex',
    height: '80px',
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    borderBottom: '2px solid #E0E0E0'
  },
  button: {
    height: '40%',
    width: '18vw',
    backgroundColor: '#ffffff',
    borderRadius: '0%',
    fontSize: '1rem',
  },
  logo: {
    marginLeft: '2vw',
    marginRight: '30vw',
    height: '40%',
    width: 'auto',
  },
  avatar: {
    borderRadius: '50%',
    marginLeft: 'auto',
    marginRight: '2vw',
    height: '80%',
    width: 'auto',
  }
}

const Header = (props) => {
  const { classes, handleColorChange, color } = props
  return (
    <header className={classes.header}>
      {color==="Red" ? (
        <React.Fragment>
          <img className={classes.logo} src={redApp} alt="app logo" />
          <button
            className={classes.button}
            onClick={handleColorChange}
            style={{
              color: color,
              border: `1px solid ${color}`
            }}
          >
            Green
          </button>
          <button
            className={classes.button}
            onClick={handleColorChange}
            style={{
              color: 'white',
              backgroundColor: color,
              border: `1px solid ${color}`
            }}
          >
            Red
          </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <img className={classes.logo} src={greenApp} alt="app logo" />
          <button
            className={classes.button}
            onClick={handleColorChange}
            style={{
              color: 'white',
              backgroundColor: color,
              border: `1px solid ${color}`
            }}
          >
            Green
          </button>
          <button
            className={classes.button}
            onClick={handleColorChange}
            style={{
              color: color,
              border: `1px solid ${color}`
            }}
          >
            Red
          </button>
        </React.Fragment>
      )}
      <img className={classes.avatar} src={face} alt="avatar" />
    </header>
  )
}

export default withStyles(styles)(Header)
