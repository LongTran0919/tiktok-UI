import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  children,
  leftIcon,
  rightIcon,
  className,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const _props = {
    onClick,
    ...passProps,
  };

  if(disabled) {
      Object.keys(_props).forEach(key => {
        if(key.startsWith('on') && typeof _props[key]=== 'function'){
          delete _props[key];
        }
      })
  }
  if (to) {
    _props.to = to;
    Comp = Link;
  } else if (href) {
    _props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    text,
    rounded,
    disabled,
    small,
    large,
    [className]:className,
  });

  return (
    <Comp className={classes} {..._props}>
        {leftIcon && 
        <span className={cx('icon')}>
            {leftIcon}
        </span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && 
        <span className={cx('icon')}>
            {rightIcon}
        </span>}
    </Comp>
  );
}

export default Button;



if (window.Promise) {
  console.log('Promise found');

  var promise = new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();

    request.open('GET', 'http://api.icndb.com/jokes/random');
    request.onload = function() {
      if (request.status == 200) {
        resolve(request.response); // we got data here, so resolve the Promise
      } else {
        reject(Error(request.statusText)); // status is not 200 OK, so reject
      }
    };

    request.onerror = function() {
      reject(Error('Error fetching data.')); // error occurred, reject the  Promise
    };

    request.send(); //send the request
  });

  console.log('Asynchronous request made.');

  promise.then(function(data) {
    console.log('Got data! Promise fulfilled.');
    document.getElementsByTagName('body')[0].textContent = JSON.parse(data).value.joke;
  }, function(error) {
    console.log('Promise rejected.');
    console.log(error.message);
  });
} else {
  console.log('Promise not available');
}