export const truncateMessage = (message: string, maxCount: number) => {
  if (message.length > maxCount) {
    return message.substring(0, maxCount) + "....";
  }

  return message;
};
