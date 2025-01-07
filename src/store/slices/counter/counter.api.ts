type Options = {
  triggerError: boolean;
};

export function fetchCount(
  currentCount = 0,
  amount = 1,
  options: Options = { triggerError: false }
) {
  return new Promise<{ data: number }>((resolve, reject) =>
    setTimeout(() => {
      if (options.triggerError) {
        reject(new Error('Error fetching count'));
      } else {
        resolve({ data: currentCount + amount });
      }
    }, 1000)
  );
}
