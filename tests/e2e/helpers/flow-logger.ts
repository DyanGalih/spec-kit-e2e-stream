export type FlowLogger = ReturnType<typeof createFlowLogger>;

export function createFlowLogger(flowName: string) {
  const startedAt = new Date();

  function write(message: string) {
    const timestamp = new Date().toISOString();
    console.log(`[e2e] ${timestamp} ${flowName} :: ${message}`);
  }

  return {
    step(message: string) {
      write(message);
    },
    note(message: string) {
      write(`note: ${message}`);
    },
    success(message: string) {
      write(`success: ${message}`);
    },
    fail(message: string) {
      write(`fail: ${message}`);
    },
    elapsed() {
      return Date.now() - startedAt.getTime();
    },
  };
}