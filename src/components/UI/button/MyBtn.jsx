import React from "react";
import classes from './MyBtn.module.css'

const MyBtn = ({children, ...props}) => {
  return (
    <button className={classes.button} {...props}>
      {children}
    </button>
  )
}

export default MyBtn;