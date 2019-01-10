import * as frameModule from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { CompletionMode, DisplayMode, SuggestMode } from 'nativescript-ui-autocomplete';
import { getCountry, getCountriesCount, getCountryWithImage } from '../data';

const description = 'Hint';

export default {
  name: 'Hint',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout ios:backgroundColor="#CDCECE" padding="5">
      <RadAutoCompleteTextView ref="autocomplete"
                               hint="select country"
                               :displayMode="displayMode"
                               :items="dataItems">
        <SuggestionView ~suggestionView suggestionViewHeight="300">
          <StackLayout v-suggestionItemTemplate orientation="vertical" padding="10">
            <v-template>
              <StackLayout orientation="horizontal">
                <Label :text="item.text" marginLeft="5" android:marginTop="15"></Label>
              </StackLayout>
            </v-template>
          </StackLayout>
        </SuggestionView>
      </RadAutoCompleteTextView>
    </StackLayout>
  </Page>
  `,
  data () {
    let dataItems = new ObservableArray();

    for (let i = 0; i < getCountriesCount(); i++) {
      dataItems.push(getCountry(i));
    }
    return {
      title: description,
      dataItems: dataItems,
      displayMode: DisplayMode.Tokens,
      suggestMode: SuggestMode.Suggest,
      completionMode: CompletionMode.StartsWith,
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onSuggestSelected(args) {
      this.suggestMode = SuggestMode.Suggest;
      this.$refs.autocomplete.resetAutocomplete();
    },
    onAppendSelected(args) {
      this.suggestMode = SuggestMode.Append;
      this.$refs.autocomplete.resetAutocomplete();
    },
    onSuggestAppendSelected(args) {
      this.suggestMode = SuggestMode.SuggestAppend;
      this.$refs.autocomplete.resetAutocomplete();
    },
    onStartsWithSelected(args) {
      this.completionMode = CompletionMode.StartsWith;
      this.$refs.autocomplete.resetAutocomplete();
    },
    onContainsSelected(args) {
      this.completionMode = CompletionMode.Contains;
      this.$refs.autocomplete.resetAutocomplete();
    },
    onPlainSelected(args) {
      this.displayMode = DisplayMode.Plain;
      this.$refs.autocomplete.resetAutocomplete();
    },
    onTokensSelected(args) {
      this.displayMode = DisplayMode.Tokens;
      this.$refs.autocomplete.resetAutocomplete();
    },
  },
};
