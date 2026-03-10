export const dateFormat = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric',
        year: 'numeric'
    })
}