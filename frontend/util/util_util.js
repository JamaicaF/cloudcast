const renderAudioLength = (secs) => {
  function formatLeadingZero(num) {
    if (num < 10) {
      return `0${num}`;
    }
    return `${num}`;
  }

  const hours = Math.floor(secs / 3600);
  const hoursRemainder = secs % 3600;
  const mins = Math.floor(hoursRemainder / 60);
  const minsRemainder = Math.floor(hoursRemainder % 60);

  if (hours > 0) {
    return `${hours}:${formatLeadingZero(mins)}:${formatLeadingZero(minsRemainder)}`;
  } else if (mins > 0) {
    return `${mins}:${formatLeadingZero(minsRemainder)}`;
  } else {
    return `0:${formatLeadingZero(minsRemainder)}`;
  }
};

export default renderAudioLength;

// const convertToKebabCase = (string) => {
//   return string.replace(/\s+/g, '-').toLowerCase();
// };
//
// export default convertToKebabCase;
