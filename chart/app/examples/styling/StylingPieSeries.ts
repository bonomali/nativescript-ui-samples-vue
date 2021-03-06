import * as frameModule from 'tns-core-modules/ui/frame';
import { getPieData } from '../../data';

const description = 'Styling Pie Charts Series';

export default {
  name: 'StylingPieSeries',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout orientation="vertical" rows="*, *">
      <RadPieChart height="300" allowAnimation="true" row="0">
        <PieSeries v-tkPieSeries
                   seriesName="myPieSeries"
                   selectionMode="DataPoint"
                   expandRadius="0.4"
                   outerRadiusFactor="0.7"
                   valueProperty="Amount"
                   legendLabel="Brand"
                   :items="items"></PieSeries>

        <Palette v-tkPiePalette seriesName="myPieSeries">
          <PaletteEntry v-tkPiePaletteEntry strokeWidth="5" fillColor="Orange"></PaletteEntry>
          <PaletteEntry v-tkPiePaletteEntry strokeWidth="5" fillColor="Red"></PaletteEntry>
          <PaletteEntry v-tkPiePaletteEntry strokeWidth="5" fillColor="Green"></PaletteEntry>
          <PaletteEntry v-tkPiePaletteEntry strokeWidth="5" fillColor="Blue"></PaletteEntry>
          <PaletteEntry v-tkPiePaletteEntry strokeWidth="5" fillColor="Pink" strokeColor="Gray"></PaletteEntry>
        </Palette>

		    <RadLegendView v-tkPieLegend position="Floating" offsetOrigin="TopRight" width="110"></RadLegendView>
      </RadPieChart>

      <RadPieChart height="300" allowAnimation="true" row="1">
        <DonutSeries v-tkPieSeries
                  seriesName="myDonutSeries"
                  selectionMode="DataPoint"
                  expandRadius="0.4"
                  outerRadiusFactor="0.7"
                  innerRadiusFactor="0.4"
                  valueProperty="Amount"
                  legendLabel="Brand"
                  :items="items"></DonutSeries>

        <Palette v-tkPiePalette seriesName="myDonutSeries">
          <PaletteEntry v-tkPiePaletteEntry strokeWidth="5" fillColor="Orange"></PaletteEntry>
          <PaletteEntry v-tkPiePaletteEntry strokeWidth="5" fillColor="Red"></PaletteEntry>
          <PaletteEntry v-tkPiePaletteEntry strokeWidth="5" fillColor="Green"></PaletteEntry>
          <PaletteEntry v-tkPiePaletteEntry strokeWidth="5" fillColor="Blue"></PaletteEntry>
          <PaletteEntry v-tkPiePaletteEntry strokeWidth="5" fillColor="Pink" strokeColor="Gray"></PaletteEntry>
        </Palette>

        <RadLegendView v-tkPieLegend position="Floating" offsetOrigin="TopRight" width="110"></RadLegendView>

      </RadPieChart>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getPieData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
