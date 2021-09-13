export default function toLocaleTimeString(unixTimeStamp) {
  const toTimeStr = new Date(unixTimeStamp * 1000);
  return toTimeStr.toLocaleTimeString();
}
