import { expect, Locator, Page, test } from '@playwright/test';
import { allure } from 'allure-playwright';
 
export class BasePage {
  readonly page: Page;
  protected errors: string[] = [];
 
  constructor(page: Page) {
    this.page = page;
  }
 
  getErrors(): string[] {
    return this.errors;
  }
 
  async step(name: string, fn: () => Promise<void>) {
    try {
      await test.step(name, fn);
    } catch (error) {
      const msg = `[${name}] ❌ Step failed: ${error}`;
      console.error(msg);
      this.errors.push(msg);
    }
  }
 
  async clickElement(element: Locator, stepName = 'Click Element') {
    await this.step(stepName, async () => {
      await expect(element).toBeVisible();
      await element.click();
    });
  }
 
  async fillInput(element: Locator, value: string, stepName = 'Fill Input') {
    await this.step(stepName, async () => {
      await expect(element).toBeVisible();
      await expect(element).toBeEnabled();
      await element.fill(value);
      await expect(element).toHaveValue(value);
    });
  }
 
  async expectVisible(element: Locator, stepName = 'Expect Visible') {
    await this.step(stepName, async () => {
      await expect(element).toBeVisible();
    });
  }
 
  async expectHasAttribute(element: Locator, attr: string, value: string, stepName = 'Expect Attribute') {
    await this.step(stepName, async () => {
      await expect(element).toHaveAttribute(attr, value);
    });
  }
 
  async expectText(element: Locator, text: string, stepName = 'Expect Text') {
    await this.step(stepName, async () => {
      await expect(element).toHaveText(text);
    });
  }
 
  async assertAll() {
    if (this.errors.length > 0) {
      allure.attachment('Помилки soft assert', this.errors.join('\n'), 'text/plain');
      throw new Error(`Soft Assert помилки:\n${this.errors.join('\n')}`);
    }
  }
}