export default function getDay(unixTimeStamp) {
  const dayNum = new Date(unixTimeStamp * 1000).getDay();
  if (dayNum === 0) return 'Sun';
  if (dayNum === 1) return 'Mon';
  if (dayNum === 2) return 'Tue';
  if (dayNum === 3) return 'Wed';
  if (dayNum === 4) return 'Thu';
  if (dayNum === 5) return 'Fri';
  return 'Sat';
}
