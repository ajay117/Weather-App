// Convert a timeStr
export default function showOnlyHour(timeStr) {
  const amPm = timeStr[timeStr.length - 2] + timeStr[timeStr.length - 1];
  let hour = '';
  for (let i = 0; i < timeStr.length; i += 1) {
    if (timeStr[i] === ':') {
      break;
    }
    hour += timeStr[i];
  }
  return hour + amPm;
}
