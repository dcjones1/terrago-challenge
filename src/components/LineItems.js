import React from 'react'
import Icon from './Icon'
import withStyles from 'react-jss'

const styles = {
  item: {
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    borderBottom: '1px solid white',
  },
  lineItem: {
    height: 'auto',
    marginLeft: '15px',
    flex: 1,
    textAlign: 'left',
    fontSize: '1rem',
  },
  detail: {
    height: 'auto',
    flex: 0.5,
    fontSize: '0.8rem',
  }
}

const LineItems = (props) => {
  const { classes, color } = props
  return (
    <React.Fragment>
      <div className={classes.item}>
        <Icon color={color} />
        <p className={classes.lineItem}>
          Line item title
          <br />
          <b>Subheader here</b>
        </p>
        <p className={classes.detail}>
          A detail
        </p>
      </div>
      <div className={classes.item}>
        <Icon color={color} />
        <p className={classes.lineItem}>
          Line item title
          <br />
          <b>Subheader here</b>
        </p>
        <p className={classes.detail}>
          A detail
        </p>
      </div>
      <div className={classes.item}>
        <Icon color={color} />
        <p className={classes.lineItem}>
          Line item title
          <br />
          <b>Subheader here</b>
        </p>
        <p className={classes.detail}>
          A detail
        </p>
      </div>
    </React.Fragment>
  )
}

export default withStyles(styles)(LineItems)
