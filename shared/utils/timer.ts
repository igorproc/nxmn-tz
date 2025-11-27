export async function timer(seconds = 1) {
  const timerDuration = seconds * 1000

  return new Promise<boolean>((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      resolve(true)
    }, timerDuration)
  })
}
