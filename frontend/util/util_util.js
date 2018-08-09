const renderAudioLength = (sec) => {
  function formatLeadingZero(num) {
    if (num < 10) {
      return `0${num}`;
    }
    return `${num}`;
  }

  const hr = Math.floor(sec / 3600);
  const hrRemainder = sec % 3600;
  const min = Math.floor(hrRemainder / 60);
  const minRemainder = Math.floor(hrRemainder % 60);

  if (hr > 0) {
    return `${hr}:${formatLeadingZero(min)}:${formatLeadingZero(minRemainder)}`;
  } else if (min > 0) {
    return `${min}:${formatLeadingZero(minRemainder)}`;
  } else {
    return `0:${formatLeadingZero(minRemainder)}`;
  }
};

export default renderAudioLength;

// const convertToKebabCase = (string) => {
//   return string.replace(/\s+/g, '-').toLowerCase();
// };
//
// export default convertToKebabCase;
