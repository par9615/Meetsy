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
let meetingId;

export async function setUpAddon() {
    const session = await meet.addon.createAddonSession({
        cloudProjectNumber: CLOUD_PROJECT_NUMBER,
    });

    const sidePanelClient = await session.createSidePanelClient();
    console.log("code: " + (await sidePanelClient.getMeetingInfo()).meetingCode)
    console.log("id: " + (await sidePanelClient.getMeetingInfo()).meetingId)
    // document
    //     .getElementById('start-activity')
    //     .addEventListener('click', async () => {
    //         await sidePanelClient.startActivity({
    //             mainStageUrl: MAIN_STAGE_URL
    //         });
    //     });
}


export async function initializeMainStage() {
  const session = await meet.addon.createAddonSession({
    cloudProjectNumber: CLOUD_PROJECT_NUMBER,
  });
  await session.createMainStageClient();
}

function oauthSignIn() {
  console.log('OAUTHING');
  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': '597555850167-9vptt8pa3i7m5jheb59jrbu2m31ag9r7.apps.googleusercontent.com',
                'redirect_uri': 'https://par9615.github.io/Meetsy/meetsy/SidePanel.html',
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/meetings.space.readonly',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'};

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}