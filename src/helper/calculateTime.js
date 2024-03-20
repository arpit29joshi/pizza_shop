export default function calculateTime(currentTimestamp, previousTimestamp) {
  const differenceInMilliseconds = Math.abs(
    currentTimestamp - previousTimestamp
  );
  const minutes = Math.floor(differenceInMilliseconds / (1000 * 60));
  const seconds = Math.floor((differenceInMilliseconds / 1000) % 60);
  return { minutes, seconds };
}
