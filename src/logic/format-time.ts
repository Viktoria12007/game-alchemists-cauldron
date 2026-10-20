export function formatTime(timeLeft: number) {
  if (timeLeft === 0) {
    return '00:00';
  }
  const minutes = Math.floor(timeLeft / 60).toFixed(0);
  const remainSeconds = (timeLeft % 60).toFixed(0);
  return `${minutes.length === 1 ? '0' : ''}${minutes}:${remainSeconds.length === 1 ? '0' : ''}${remainSeconds}`;
}
