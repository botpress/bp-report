import { boot } from "quasar/wrappers";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

export default boot(({ app }) => {
  app.component("json-tree", VueJsonPretty);
});
