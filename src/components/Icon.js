import React from 'react'
import withStyles from 'react-jss'

const styles = {
  svg: {
    height: '60%',
    width: 'auto',
    marginLeft: '5px'
  }
}

const Icon = ({ classes, color }) => (
  <svg
    width="52px"
    height="52px"
    viewBox="0 0 52 52"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={classes.svg}
  >
    <title>Group 2</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Test-project" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Green" transform="translate(-11.000000, -83.000000)">
        <g id="Group-2" transform="translate(11.000000, 83.000000)">
          <circle id="Oval-2" fill="#FFFFFF" cx="26" cy="26" r="26"></circle>
          <g id="Fire-Element" transform="translate(11.000000, 6.000000)" fillRule="nonzero">
            <g id="Group">
              {color==="Red" ? (
                <path d="M30,23 C30,31.395 23.394,38 14.999,38 C6.604,38 0,31.395 0,23 C0,14.605 13.479,7.6 11.959,0 C15,0 30,10.841 30,23 Z" id="Shape" fill="#f00"></path>
              ) : (
                <path d="M30,23 C30,31.395 23.394,38 14.999,38 C6.604,38 0,31.395 0,23 C0,14.605 13.479,7.6 11.959,0 C15,0 30,10.841 30,23 Z" id="Shape" fill="#4CAF50"></path>
              )}
              <path d="M24,27 C24,19.401 15,12 15,12 C15,18.08 6,20.921 6,27 C6,32.036 9.963,36 15,36 C20.037,36 24,32.036 24,27 Z" id="Shape" fill="#FF5722"></path>
              <path d="M9.999,30.406 C10,27 15,25.051 15,22 C15,22 19.999,25.832 19.999,30.406 C19.999,32.931 17.762,34.98 14.999,34.98 C12.236,34.98 9.998,32.932 9.999,30.406 Z" id="Shape" fill="#FFC107"></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default withStyles(styles)(Icon)
