import React, { Component } from 'react'
import Column from './Column'
import withStyles from 'react-jss'

const styles = {
  form: {
    marginLeft: '5%',
    marginTop: '20px',
  },
  input: {
    marginLeft: '10px',
    width: '50px',
    fontSize: '0.9rem',
    border: 'none',
    borderBottom: '1px solid #E8E8E8'
  },
  columns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '92%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}

class DisplayedColumns extends Component {
  state = {
    columns: 3,
    rowHeight: '100',
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getColumns = () => {
    let columns = []
    for(let i = 0; i < this.state.columns; i++) {
      columns.push(<Column key={i} height={this.state.rowHeight} color={this.props.color} />)
    }
    return columns
  }


  render() {
    const { classes } = this.props
    return (
      <div>
        <form className={classes.form}>
          <label>
            Number of columns:
          </label>
          <input
            name="columns"
            className={classes.input}
            value={this.state.columns}
            onChange={this.handleInputChange}
          />
          <label>
            Row height:
          </label>
          <input
            name="rowHeight"
            className={classes.input}
            value={this.state.rowHeight}
            onChange={this.handleInputChange}
          /><span style={{marginLeft: '-20px', color: '#909090'}}>px</span>
        </form>
        <div className={classes.columns}>
          {this.getColumns()}
        </div>
      </div>

    )
  }
}

export default withStyles(styles)(DisplayedColumns)
