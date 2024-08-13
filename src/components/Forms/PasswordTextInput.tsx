import TextInput, { TextInputProps } from './TextInput'
import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import Container from '../Container/Container'

type Props = TextInputProps
export default function PasswordTextInput({
  label,
  mode = 'default',
  type,
  ...rest
}: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <Container className="relative">
      <TextInput
        type={showPassword ? 'text' : type}
        label={label}
        {...rest}
        mode={mode}
      />

      {showPassword ? (
        <EyeIcon
          className="absolute bottom-2 right-4 w-6 h-6 text-grey-200"
          onClick={toggleShowPassword}
        />
      ) : (
        <EyeSlashIcon
          className="absolute bottom-2 right-4 w-6 h-6 text-grey-200"
          onClick={toggleShowPassword}
        />
      )}
    </Container>
  )
}

export type { Props as PasswordTextInputProps }
