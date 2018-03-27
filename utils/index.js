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


const scss = (colors) => {
  return `${colors.map((color, i) => `$color-${i}: ${color};
`).join('')}`
}

const sass = (colors) => {
  return `${colors.map((color, i) => `$color-${i}: ${color}
`).join('')}`
}

const less = (colors) => {
  return `${colors.map((color, i) => `@color-${i}: ${color};
`).join('')}`
}

const css = (colors) => {
  return `:root {
${colors.map((color, i) => `  --color-${i}: ${color};
`).join('')}}`
}

export const colorCode = ({type, colors}) => {
  let code
  switch (type) {
    case 'scss':
      code = scss(colors)
      break
    case 'sass':
      code = sass(colors)
      break
    case 'less':
      code = less(colors)
      break
    case 'css':
      code = css(colors)
      break
  }

  return code
}
