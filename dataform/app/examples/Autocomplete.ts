import * as frameModule from 'tns-core-modules/ui/frame';
import { AutoCompleteDisplayMode } from 'nativescript-ui-dataform';
import { Booking } from '../data';

const data = require('../airports.json');
const description = 'Autocomplete';
let fromProviders = [];
for (let i = 0; i < data.airports.length; i++) {
  fromProviders.push(data.airports[i].FIELD2 + ', ' + data.airports[i].FIELD5);
}

export default {
  name: 'Autocomplete',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadDataForm
      :source="booking"
      :metadata="bookingMetadata">
    </RadDataForm>
  </Page>
  `,
  data () {
    return {
      title: description,
      booking: new Booking(),
      bookingMetadata: {
        'isReadOnly': false,
        'commitMode': 'Immediate',
        'validationMode': 'Immediate',
        'propertyAnnotations':
        [
          {
            'name': 'from',
            'displayName': 'From:',
            'index': 0,
            'editor': 'AutoCompleteInline',
            'editorParams': {
              'autoCompleteDisplayMode': AutoCompleteDisplayMode.Tokens
            },
            'valuesProvider': fromProviders,
          },
          {
            'name': 'to',
            'displayName': 'To:',
            'index': 1,
            'editor': 'AutoCompleteInline',
            'editorParams': {
              'autoCompleteDisplayMode': AutoCompleteDisplayMode.Plain
            },
            'valuesProvider': ['New York', 'Washington', 'Los Angeles'],
          },
        ]
      }
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
