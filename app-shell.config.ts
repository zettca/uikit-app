import type { HvAppShellConfig } from "@pentaho/app-shell-vite-plugin";

export default (): HvAppShellConfig => ({
  name: "uikit-app",
  logo: { name: "PENTAHO" },


  mainPanel: {
    maxWidth: "xl"  },

});
