import { test, expect } from '@playwright/test'

test('こんにちは世界', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page).toHaveScreenshot({fullPage: true, scale: 'device', animations: 'disabled'})
})
