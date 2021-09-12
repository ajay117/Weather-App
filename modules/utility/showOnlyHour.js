// Convert a timeStr
export default function showOnlyHour(timeStr) {
  let str = timeStr[timeStr.length - 2] + timeStr[timeStr.length - 1];
  for (let i = 0; i < timeStr.length; i += 1) {
    if (timeStr[i] === ':') {
      break;
    }
    str = timeStr[i] + str;
  }
  return str;
}
