import dayjs from 'dayjs';

const formatDate = (date) => dayjs(date);

const getShortDescription = (description) => {
  if (description.trim().length > 140) {
    return `${description.trim().slice(0, 139)}...`;
  }

  return description.trim();
};

const toggleButtonStyle = (evt, styleClass) => evt.target.classList.toggle(styleClass);

export {formatDate, getShortDescription, toggleButtonStyle};
