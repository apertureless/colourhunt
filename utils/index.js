export const graphQLErrorMessages = (errorsFromCatch) => {
  const errors = errorsFromCatch.graphQLErrors[0]
  const messages = []

  if (errors.hasOwnProperty('functionError')) {
    const customErrors = errors.functionError
    messages.push(customErrors)
  } else {
    messages.push(errors.message)
  }

  return messages
}
