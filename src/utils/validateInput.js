const validateInput = (value, input) => {
  let isError = false
  let error = ''

  const nameRegex = /^[a-zA-Z\s]{3,}$/
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

  if (input === 'firstName') {
    if (value === '') {
      isError = true
      error = 'First name is required'
    } else if (value.length < 3) {
      isError = true
      error = 'First name must be at least three characters long'
    } else if (!input.match(nameRegex)) {
      isError = true
      error = 'Invalid first name'
    } else {
      isError = false
      error = ''
    }
  } else if (input === 'lastName') {
    if (value === '') {
      isError = true
      error = 'Last name is required'
    } else if (value.length < 3) {
      isError = true
      error = 'Last name must be at least three characters long'
    } else if (!input.match(nameRegex)) {
      isError = true
      error = 'Invalid last name'
    } else {
      isError = false
      error = ''
    }
  } else if (input === 'email') {
    if (value === '') {
      isError = true
      error = 'Email is required'
    } else if (!value.match(emailRegex)) {
      isError = true
      error = 'Invalid email'
    } else {
      isError = false
      error = ''
    }
  } else if (input === 'password') {
    if (value === '') {
      isError = true
      error = 'Password is required'
    } else if (!value.match(passwordRegex)) {
      isError = true
      error = 'Invalid password'
    } else {
      isError = false
      error = ''
    }
  }

  return { isError, error }
}

export default validateInput
