import * as frameModule from 'tns-core-modules/ui/frame';
import SwitchAtRuntime from './Switch-at-runtime';
import Horizontal from './Horizontal';
import Wrap from './Wrap';

const description = 'Token Layouts';

export default {
  name: 'Token Layouts',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <ListView for="example in examples"
              @itemTap="goToExample">
      <v-template>
        <StackLayout class="item" orientation="vertical">
          <Label :text="example.description">
          </Label>
        </StackLayout>
      </v-template>
    </ListView>
  </Page>
  `,
  data () {
    return {
      title: description,
      examples: [
        SwitchAtRuntime,
        Horizontal,
        Wrap
      ],
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    goToExample ({ item }) {
      this.$navigateTo(item);
    },
  },
};
