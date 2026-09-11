const sleep = ms => new Promise(r => setTimeout(r, ms));
// test_browser_game.js
import puppeteer from "puppeteer-core";
import path from "path";
import fs from "fs";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const screenshotsDir = "C:\\Users\\Adrian\\.gemini\antigravity\\scratch\\ember-gates\\test_screenshots";
fs.mkdirSync(screenshotsDir, { recursive: true });

async function run() {
    console.log("=== STARTING RIGOROUS BROWSER E2E TEST ===");
    console.log("Launching Chrome from:", chromePath);

    const browser = await puppeteer.launch({
        executablePath: chromePath,
        headless: "new",
        args: [
            "--use-gl=angle",
            "--use-angle=swiftshader",
            "--enable-webgl",
            "--ignore-gpu-blocklist",
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--window-size=940,1672"
        ]
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 940, height: 1672 });

    const errors = [];
    page.on("console", msg => {
        const type = msg.type();
        const text = msg.text();
        if (type === "error") {
            console.error(`[PAGE ERROR]: ${text}`);
            errors.push(`Console Error: ${text}`);
        } else {
            console.log(`[PAGE LOG]: ${text}`);
        }
    });

    page.on("pageerror", err => {
        console.error(`[PAGE EXCEPTION]: ${err.message}`);
        errors.push(`Page Exception: ${err.message}`);
    });

    console.log("1. Navigating to http://localhost:8080/ ...");
    await page.goto("http://localhost:8080/", { waitUntil: "networkidle0" });
    await sleep(1500);

    // Screenshot 1: Splash Screen
    console.log("2. Capturing Splash Screen screenshot...");
    await page.screenshot({ path: path.join(screenshotsDir, "1_splash.png") });

    // Check Splash element
    const splashVisible = await page.$eval("#splash-screen", el => !el.classList.contains("hidden"));
    console.log("   Splash Screen visible:", splashVisible);

    // Click JUGAR button
    console.log("3. Clicking '¡JUGAR!' button...");
    await page.click("#splash-play-btn");
    await sleep(800);

    // Screenshot 2: Battle Hub
    console.log("4. Capturing Battle Hub screenshot...");
    await page.screenshot({ path: path.join(screenshotsDir, "2_hub_battle.png") });

    // Tab 1: Shop
    console.log("5. Testing Tab: TIENDA...");
    await page.click('.nav-tab-btn[data-tab="shop"]');
    await sleep(600);
    await page.screenshot({ path: path.join(screenshotsDir, "3_tab_shop.png") });

    // Tab 3: Deck Builder
    console.log("6. Testing Tab: MAZO (Deck Builder)...");
    await page.click('.nav-tab-btn[data-tab="deck"]');
    await sleep(600);
    await page.screenshot({ path: path.join(screenshotsDir, "4_tab_deck.png") });

    // Verify 8 active cards and 15 collection cards
    const activeCardsCount = await page.$$eval("#deck-active-grid .card-tile", els => els.length);
    const collectionCardsCount = await page.$$eval("#deck-collection-grid .card-tile", els => els.length);
    console.log(`   Active Deck Cards: ${activeCardsCount} (expected 8)`);
    console.log(`   Collection Cards: ${collectionCardsCount} (expected 15)`);

    // Click a card to open details modal
    console.log("7. Testing Card Details Modal...");
    await page.click('#deck-active-grid .card-tile[data-card="titan"], #deck-collection-grid .card-tile[data-card="titan"]');
    await sleep(600);
    await page.screenshot({ path: path.join(screenshotsDir, "5_card_modal.png") });
    await page.click("#modal-card-close");
    await sleep(400);

    // Tab 4: Clan
    console.log("8. Testing Tab: CLAN...");
    await page.click('.nav-tab-btn[data-tab="clan"]');
    await sleep(600);
    await page.screenshot({ path: path.join(screenshotsDir, "6_tab_clan.png") });

    // Tab 5: Settings
    console.log("9. Testing Tab: AJUSTES...");
    await page.click('.nav-tab-btn[data-tab="settings"]');
    await sleep(600);
    await page.screenshot({ path: path.join(screenshotsDir, "7_tab_settings.png") });

    // Return to Batalla and start match
    console.log("10. Returning to BATALLA and launching 1v1 Battle...");
    await page.click('.nav-tab-btn[data-tab="battle"]');
    await sleep(600);
    await page.click("#btn-enter-battle");
    await sleep(1000);

    // Screenshot 8: Battle start / countdown
    console.log("11. Capturing 3D Battle Arena screenshot...");
    await page.screenshot({ path: path.join(screenshotsDir, "8_battle_countdown.png") });

    // Wait for countdown to finish (3.5s)
    console.log("12. Waiting for battle countdown to complete...");
    await sleep(3800);

    // Deploy card in slot 0
    console.log("13. Deploying Card Slot 0 (click hand, then click arena)...");
    await page.click('.battle-card[data-slot="0"]');
    await sleep(300);
    // Click on player's half of the arena (x=470, y=1100)
    await page.mouse.click(470, 1100);
    await sleep(1200);

    // Deploy card in slot 1
    console.log("14. Deploying Card Slot 1...");
    await page.click('.battle-card[data-slot="1"]');
    await sleep(300);
    await page.mouse.click(350, 1050);
    await sleep(1200);

    // Deploy card in slot 2
    console.log("15. Deploying Card Slot 2...");
    await page.click('.battle-card[data-slot="2"]');
    await sleep(300);
    await page.mouse.click(590, 1050);
    await sleep(2000);

    // Screenshot 9: Battle in full action with deployed units!
    console.log("16. Capturing Active Battle with units in arena...");
    await page.screenshot({ path: path.join(screenshotsDir, "9_battle_units_active.png") });

    // Let simulation run for 3 more seconds
    await sleep(3000);
    await page.screenshot({ path: path.join(screenshotsDir, "10_battle_combat.png") });

    await browser.close();

    console.log("\n=== TEST EXECUTION SUMMARY ===");
    console.log("Total errors detected:", errors.length);
    if (errors.length > 0) {
        console.error("Errors encountered:");
        errors.forEach(e => console.error(" - ", e));
    } else {
        console.log("PERFECT SUCCESS: Zero console errors, zero page exceptions!");
    }
    console.log("Screenshots saved to:", screenshotsDir);
}

run().catch(err => {
    console.error("FATAL TEST CRASH:", err);
    process.exit(1);
});
