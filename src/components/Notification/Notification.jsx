import s from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return (
    <p role="alert" className={s.message}>
      {message}
    </p>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
