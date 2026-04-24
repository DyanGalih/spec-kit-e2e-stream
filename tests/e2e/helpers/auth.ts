export async function bootstrapAuth(options: {
  storageStatePath?: string;
  userRole?: string;
} = {}) {
  return {
    userRole: options.userRole ?? 'default',
    storageStatePath: options.storageStatePath ?? null,
    description: options.storageStatePath
      ? `storage state from ${options.storageStatePath}`
      : 'anonymous test context',
  };
}