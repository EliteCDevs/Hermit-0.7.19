import { defineConfig, devices } from '@playwright/test';

// Always start this checkout's server. Never attach to an older Hermit copy on port 3000.
const port = 3187;
export default defineConfig({
  testDir: './tests/browser',
  fullyParallel: false,
  workers: 1,
  timeout: 60_000,
  expect: { timeout: 15_000 },
  reporter: [['list'], ['html', { open: 'never' }]],
  outputDir: 'test-results/browser',
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    channel: process.env.BROWSER_CHANNEL || (process.platform === 'darwin' ? 'chrome' : undefined),
    launchOptions: { executablePath: process.env.HERMIT_CHROME_PATH },
    timezoneId: 'UTC',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'node scripts/dev-server.mjs',
    url: `http://127.0.0.1:${port}`,
    reuseExistingServer: false,
    timeout: 60_000,
    env: { PORT: String(port), LOCAL_LLM_ENABLED: 'false', LOCAL_LLM_PROVIDER: 'none' },
  },
  projects: [{ name: 'desktop', use: { ...devices['Desktop Chrome'] } }],
});
