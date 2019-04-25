import React from 'react'
import LineItems from './LineItems'
import DisplayedColumns from './DisplayedColumns'
import withStyles from 'react-jss'

const styles = {
  container: {
    display: 'flex',
    height: '100%',
  },
  col1: {
    flex: 1,
    backgroundColor: '#585858',
    height: '100%',
    border: '1px solid black'
  },
  col2: {
    flex: 3,
  }
}

const Body = (props) => {
  const { classes, color } = props
  return (
    <div className={classes.container}>
      <div className={classes.col1}>
        <LineItems color={color} />
      </div>
      <div className={classes.col2}>
        <DisplayedColumns color={color} />
      </div>
    </div>
  )
}

export default withStyles(styles)(Body)
