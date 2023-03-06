import { AllureRuntime, CucumberJSAllureFormatter } from "allure-cucumberjs";

export default class Reporter extends CucumberJSAllureFormatter {
  constructor(options: any) {
    super(options, new AllureRuntime({ resultsDir: "./allure-results" }), {});
  }
}