export const formatDate = (date) => `Due: ${date.toLocaleDateString}`

export const validateTask = ({ title, dueDate }) => Boolean(title && dueDate);