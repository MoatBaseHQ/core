// src/index.js
const path = require("path");
const helloAgent = require("./agents/helloAgent");
const workflow = require(path.resolve(__dirname, "../workflows/helloWorkflow.json"));

async function runWorkflow(wf) {
  for (const step of wf.steps) {
    if (step.agent === helloAgent.name) {
      const output = await helloAgent.execute(step.input);
      console.log("[helloWorkflow] Step output:", output);
    } else {
      console.warn(`Agent "${step.agent}" not found.`);
    }
  }
}

(async () => {
  console.log("🚀 Starting Hello Workflow");
  await runWorkflow(workflow);
  console.log("✅ Workflow complete");
})();
