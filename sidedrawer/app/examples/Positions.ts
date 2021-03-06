import * as frameModule from 'tns-core-modules/ui/frame';
import { SideDrawerLocation } from 'nativescript-ui-sidedrawer';

const description = 'Position';

export default {
  name: 'Position',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadSideDrawer ref="drawer" :drawerLocation="currentLocation">
      <StackLayout ~drawerContent class="sideStackLayout">
          <StackLayout class="sideTitleStackLayout">
              <Label text="Navigation Menu"></Label>
          </StackLayout>
          <ScrollView>
              <StackLayout class="sideStackLayout">
                  <Label text="Primary" class="sideLabel sideLightGrayLabel"></Label>
                  <Label text="Social" class="sideLabel"></Label>
                  <Label text="Promotions" class="sideLabel"></Label>
                  <Label text="Labels" class="sideLabel sideLightGrayLabel"></Label>
                  <Label text="Important" class="sideLabel"></Label>
                  <Label text="Starred" class="sideLabel"></Label>
                  <Label text="Sent Mail" class="sideLabel"></Label>
                  <Label text="Drafts" class="sideLabel"></Label>
                  <Button text="Close Drawer" @tap="onCloseDrawerTap()"></Button>
              </StackLayout>
          </ScrollView>
      </StackLayout>
      <StackLayout ~mainContent class="mainContent">
          <ScrollView>
              <StackLayout>
                  <Label text="SideDrawer for NativeScript is shown from the left side of the app window by default.You can change this behavior by setting the drawerLocation property to Left, Top, Right or Bottom."
              textWrap="true" class="drawerContentText"></Label>
                  <Button text="Left" @tap="onLeftLocationTap()" class="drawerContentButton"></Button>
                  <Button text="Top" @tap="onTopLocationTap()" class="drawerContentButton"></Button>
                  <Button text="Right" @tap="onRightLocationTap()" class="drawerContentButton"></Button>
                  <Button text="Bottom" @tap="onBottomLocationTap()" class="drawerContentButton"></Button>
              </StackLayout>
          </ScrollView>
      </StackLayout>
    </RadSideDrawer>
  </Page>
  `,
  data () {
    return {
      title: description,
      currentLocation: SideDrawerLocation.Left,
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    openDrawer() {
      this.$refs.drawer.showDrawer();
    },
    repaintAndOpenDrawer() {
      this.$nextTick(() => {
        this.openDrawer();
      });
    },
    onCloseDrawerTap() {
      this.$refs.drawer.closeDrawer();
    },
    onRightLocationTap() {
      this.currentLocation = SideDrawerLocation.Right;
      this.repaintAndOpenDrawer();
    },
    onLeftLocationTap() {
      this.currentLocation = SideDrawerLocation.Left;
      this.repaintAndOpenDrawer();
    },
    onBottomLocationTap() {
      this.currentLocation = SideDrawerLocation.Bottom;
      this.repaintAndOpenDrawer();
    },
    onTopLocationTap() {
      this.currentLocation = SideDrawerLocation.Top;
      this.repaintAndOpenDrawer();
    }
  },
};

