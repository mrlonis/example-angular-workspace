import { expect, test } from '@playwright/test';

test.describe('App', () => {
  test('shows the application title in the document title', async ({ page }) => {
    await page.goto('');

    await expect(page).toHaveTitle(/App/);
  });

  test('redirects unknown routes to home', async ({ page }) => {
    await page.goto('/not-a-real-route');

    await expect(page.getByLabel('Filter')).toBeVisible();
    await expect(page).toHaveURL(/\/$/);
  });

  test('filters table rows from the filter input', async ({ page }) => {
    await page.goto('');

    const dataRows = page.locator('tr.example-element-row');

    await page.getByLabel('Filter').fill('Hydrogen');
    await expect(dataRows).toHaveCount(1);
    await expect(page.locator('tr.example-element-row td.cdk-column-name').first()).toHaveText(
      'Hydrogen',
    );
  });

  test('expands and collapses a row from the expand button', async ({ page }) => {
    await page.goto('');

    const firstRow = page.locator('tr.example-element-row').first();
    const firstRowExpandButton = firstRow.getByRole('button', { name: 'expand row' });

    await firstRowExpandButton.click();
    await expect(firstRow).toHaveClass(/example-expanded-row/);
    await expect(page.locator('.example-element-detail-wrapper-expanded').first()).toBeVisible();

    await firstRowExpandButton.click();
    await expect(firstRow).not.toHaveClass(/example-expanded-row/);
  });

  test('renders the paginator for the table', async ({ page }) => {
    await page.goto('');

    await expect(
      page.locator('mat-paginator[aria-label="Select page of periodic elements"]'),
    ).toBeVisible();
  });
});
