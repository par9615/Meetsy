import { meet } from '@googleworkspace/meet-addons/meet.addons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// const CLOUD_PROJECT_NUMBER = process.env.CLOUD_PROJECT_NUMBER;
// const MAIN_STAGE_URL = process.env.MAIN_STAGE_URL;

const CLOUD_PROJECT_NUMBER= '597555850167';
const MAIN_STAGE_URL= 'https://par9615.github.io/Meetsy/meetsy/MainStage.html';

/**
 * Prepares the add-on Side Panel Client, and adds an event to launch the
 * activity in the main stage when the main button is clicked.
 */
export async function setUpAddon() {
    const session = await meet.addon.createAddonSession({
        cloudProjectNumber: CLOUD_PROJECT_NUMBER,
    });
    const sidePanelClient = await session.createSidePanelClient();
    document
        .getElementById('start-activity')
        .addEventListener('click', async () => {
            await sidePanelClient.startActivity({
                mainStageUrl: MAIN_STAGE_URL
            });
        });
}


export async function initializeMainStage() {
  const session = await meet.addon.createAddonSession({
    cloudProjectNumber: CLOUD_PROJECT_NUMBER,
  });
  await session.createMainStageClient();
}