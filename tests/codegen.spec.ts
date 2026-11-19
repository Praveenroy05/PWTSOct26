// Codegen - Code Generation

// To open the codegen - npx playwright codegen

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page1 = await page1Promise;

  await page1.getByRole('link', { name: 'Downloads' }).click();
  await expect(page1.locator('#bindings')).toContainText('WebDriver Language Bindings');
 
  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toBeVisible();
});



test('Frames', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');

  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').click();
  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').fill('Test');
  await expect(page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox')).toHaveValue('Test');
  await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
  await page.frameLocator().getByRole('textbox').click();
  await page.frameLocator().getByRole('textbox').fill('Nested Frames');
  await expect(page.frameLocator().getByRole('textbox')).toHaveValue('Nested Frames');
});