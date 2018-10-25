export { getTimeDifference, getTimeDifference as default }

function getTimeDifference(date, { precision = 0 } = {}) {
  const startDate = typeof date === 'string' ? new Date(date) : date

  const total = parseInt(
    (Math.max(0, startDate - Date.now()) / 1000).toFixed(
      Math.max(0, Math.min(20, precision)),
    ) * 1000,
    10,
  )

  const seconds = total / 1000

  return {
    total,
    days: Math.floor(seconds / (3600 * 24)),
    hours: Math.floor((seconds / 3600) % 24),
    minutes: Math.floor((seconds / 60) % 60),
    seconds: Math.floor(seconds % 60),
    milliseconds: Number(((seconds % 1) * 1000).toFixed()),
    completed: total <= 0,
  }
}
