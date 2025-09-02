// IMPORTANT: ACTION REQUIRED TO MAKE REGISTRATION SAVE DATA
// The registration form is currently pointed to a mock API for demonstration.
// To save submissions to a Google Sheet, you must deploy a Google Apps Script.

// === INSTRUCTIONS ===
// 1.  **Open the Google Sheet** for registrations: https://docs.google.com/spreadsheets/d/1pBdvmV42RYNvc3onyt4WzUCdqk6ot_Z2wyydrBWhG7o/edit
// 2.  In the menu, go to **Extensions > Apps Script**.
// 3.  Delete any existing code in the script editor.
// 4.  There should be a `google-apps-script.gs` file provided with this project's code.
// 5.  **Copy the entire contents** of `google-apps-script.gs` and paste it into the Apps Script editor.
// 6.  Click **"Deploy"** > **"New deployment"**.
// 7.  Set the type to **"Web app"**.
// 8.  Configure it:
//     -   Description: "SLAC Hackathon Registration"
//     -   Execute as: "Me"
//     -   Who has access: "Anyone"  <-- CRITICAL!
// 9.  Click **"Deploy"**.
// 10. **Authorize access**, following the prompts (you may need to click "Advanced" and "Go to... (unsafe)").
// 11. After deployment, copy the **Web app URL**.
// 12. **PASTE THE NEW URL BELOW**, replacing the mock URL.

// NOTE: Using a mock API endpoint for demonstration purposes.
// Replace this with your actual Google Apps Script URL to save registration data.
export const SCRIPT_URL = 'https://jsonplaceholder.typicode.com/posts';
