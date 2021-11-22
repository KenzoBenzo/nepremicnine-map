export const DateFormatter = (rawDate: Date) => {
  const date = new Date(rawDate);
  return date.toLocaleDateString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'short',
  });
};
