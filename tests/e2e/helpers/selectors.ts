export function byTestId(testId: string) {
  return `[data-testid="${testId}"]`;
}

export function byAriaLabel(label: string) {
  return `[aria-label="${label}"]`;
}

export function byRoleHint(role: string, name: string) {
  return `${role}[name="${name}"]`;
}