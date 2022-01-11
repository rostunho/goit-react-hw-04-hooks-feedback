import PropTypes from 'prop-types';
import { Notice, NoticeBox } from './Notification.styled';

function Notification({ message }) {
  return (
    <NoticeBox>
      <Notice>{message}</Notice>
    </NoticeBox>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
