import classNames from "classNames";
import React, { PropTypes } from "react";

const Button = props =>
  props.href
    ? <a {...props} className={classNames("Button", props.className)} />
    : <Button {...props} className={classNames("Button", props.className)} />;

Button.propTypes = {
  href: PropTypes.string
};

export default Button;
