# 🧪 PlaywrightAssignmentKIWI

This is a **Playwright automation framework** built with **TypeScript** to validate the **Kiwi Calculator** workflow. It supports cross-browser execution, environment-based test execution, and headless/headed runs.

---

## 📁 Project Structure

```
PlaywrightAssignmentKIWI/
├── node_modules/
├── env/
│   └── dev.env (environment-specific variables)
├── tests/
│   └── specs(Your Test files)
│   └── pageObjects(Your Page Objects)
│   └── testData(Test Data)
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└──README.md
```

---

## 🛠 Prerequisites

- **Node.js** (v22)
- **npm** (comes with Node.js)

---

## ⚙️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/PlaywrightAssignmentKIWI.git
cd PlaywrightAssignmentKIWI
```

2. **Install dependencies**

```bash
npm install
```

3. **Install Playwright browsers**

```bash
npx playwright install
```

---

## 🚀 Running Tests

### 1. Run all tests in **headless mode** (default):

```bash
npm test
```

### 2. Run tests in **headed mode** (with visible browser UI):

```bash
npm run test:headed
```

### 3. Run only **Chromium-based** tests:

```bash
npm run test:chrome
```

### 4. Run with custom environment (e.g., `dev.env`)

```bash
npm run ga
```

- This command uses the `TEST_ENV=dev` variable and loads the corresponding `.env` file.

---

## 📦 Environment Configuration

Environment variables are managed using the `dotenv` package.

- To add or update environment-specific configurations, edit the files under the `env/` directory.
- Example:
  ```bash
  BASE_URL=<Your URL>
  ```

These are dynamically loaded from this line in `playwright.config.ts`:

```ts
const environment = process.env.TEST_ENV ? `${process.env.TEST_ENV}.env` : "dev.env";
dotenv.config({ path: path.resolve(__dirname, `env/${environment}`) });
```

---

## 🧪 Example Test Command with Environment

```bash
TEST_ENV=dev npx playwright test
```

---

## 🧹 Clean Up

To remove installed dependencies:

```bash
rm -rf node_modules package-lock.json
```

---

## 👤 Author

**Arvind Atmuri**