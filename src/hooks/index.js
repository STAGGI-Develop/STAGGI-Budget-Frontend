import { useState } from 'react'

export const useInput = type => {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)

  const onChange = event => {
    setValue(event.target.value)
    setTouched(true)
  }

  const reset = () => {
    setValue('')
  }

  return {
    type,
    value,
    onChange,
    reset,
    touched,
    setValue,
  }
}
