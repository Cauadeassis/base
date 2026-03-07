interface HandleCreateAccountProps {
  email: string;
  password: string;
}

function validatePassword(password: string): string | null {
  const checks = [
    {
      isValid: password.length >= 8,
      errorMessage: 'A senha deve ter pelo menos 8 caracteres',
    },
    {
      isValid: /[A-Z]/.test(password),
      errorMessage: 'A senha deve ter pelo menos uma letra maiúscula',
    },
    {
      isValid: /[!@#$%^&*]/.test(password),
      errorMessage: 'A senha deve ter pelo menos um símbolo (!@#$%^&*)',
    },
  ];
  const failedCheck = checks.find((check) => !check.isValid);
  return failedCheck?.errorMessage ?? null;
}

function validateEmail(email: string): string | null {
  const isValid = email.endsWith('@gmail.com');
  return isValid ? null : 'O email deve terminar com @gmail.com';
}

export async function handleCreateAccount({
  email,
  password,
}: HandleCreateAccountProps) {
  console.log(email);
  console.log(password);
  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);

  if (emailError) return emailError;
  if (passwordError) return passwordError;

  const response = await fetch('../api/create-account', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  console.log(response.status, response.statusText);
  const data = await response.json();

  if (!response.ok) {
    return data.error;
  }
  console.log(data);
  return null;
}
