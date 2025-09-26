import { test, expect } from "@playwright/test";

test.describe("Random Quote Generator", () => {
  test("should generate and display a new quote when Generate button is clicked", async ({
    page,
  }) => {
    // Step 1: Navigate to localhost:5174
    await page.goto("http://localhost:5174");

    // Verify the page has loaded correctly
    await expect(page).toHaveTitle("random-quote-generator");
    await expect(page.locator("h1")).toHaveText("Random Quotes Generator");

    // Step 2: Click the Generate button
    await page.getByRole("button", { name: "Generate" }).click();

    // Step 3: Verify that a new quote is displayed on the card
    const quoteText = page
      .locator("div")
      .filter({ hasText: "💬" })
      .locator("p")
      .first();
    await expect(quoteText).toBeVisible();
    await expect(quoteText).not.toBeEmpty();

    // Step 4: Verify that the author name is displayed at the bottom of the card
    const authorElement = page
      .locator("div")
      .filter({ hasText: "💬" })
      .locator("p")
      .filter({ hasText: /^by / });
    await expect(authorElement).toBeVisible();
    await expect(authorElement).toContainText("by ");

    // Additional verification: Test multiple quote generations
    const firstQuote = await quoteText.textContent();
    const firstAuthor = await authorElement.textContent();

    // Click Generate again
    await page.getByRole("button", { name: "Generate" }).click();

    // Verify that the quote and author are still displayed (may be the same or different)
    await expect(quoteText).toBeVisible();
    await expect(quoteText).not.toBeEmpty();
    await expect(authorElement).toBeVisible();
    await expect(authorElement).toContainText("by ");
  });
});
