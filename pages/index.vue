<template>
  <v-row no-gutters>
    <v-col cols="12">
      <app-hero />
      <app-features />
      <app-features-bar />
      <app-contact-us />
      <app-affiliates />
      <app-social />
      <app-info-alt />
      <app-contact-us2 />
      <app-pro-features />
      <app-info-alt2 />
    </v-col>
  </v-row>

  <!-- <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row> -->
</template>

<script>
import AppHero from "@/components/Hero";
import AppFeatures from "@/components/Features";
import AppFeaturesBar from "@/components/FeaturesBar";
import AppContactUs from "@/components/ContactUs";
import AppAffiliates from "@/components/Affiliates";
import AppSocial from "@/components/Social";
import AppInfoAlt from "@/components/InfoAlt";
import AppContactUs2 from "@/components/ContactUs2";
import AppProFeatures from "@/components/ProFeatures";
import AppInfoAlt2 from "@/components/InfoAlt2";

export default {
  components: {
    AppHero,
    AppFeatures,
    AppFeaturesBar,
    AppContactUs,
    AppAffiliates,
    AppSocial,
    AppInfoAlt,
    AppContactUs2,
    AppProFeatures,
    AppInfoAlt2
  }
};
</script>
