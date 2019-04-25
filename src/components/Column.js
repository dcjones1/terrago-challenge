import React from 'react'
import withStyles from 'react-jss'

const styles = {
  column: {
    marginTop:'15px',
    flex: 1,
    marginRight: '5px',
    marginLeft: '5px',
  }
}

const Column = (props) => {
  const { classes, height, color } = props
  return (
    <div
      className={classes.column}
      style={{height: `${height}px`, backgroundColor: color}}
    />
  )
}

export default withStyles(styles)(Column)
