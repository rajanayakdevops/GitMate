#!/usr/bin/env node

import { Command } from "commander";
import { scanRepository, generateReport } from "./index.js";

const program = new Command();

program
  .name("git-dep-scanner")
  .description(
    "Scan Git repositories for dependency vulnerabilities and provide update suggestions"
  )
  .version("1.0.0")
  .argument("<path>", "Path to the Git repository")
  .action(async (path) => {
    try {
      console.log("Scanning repository...");
      const result = await scanRepository(path);
      const report = generateReport(result);
      console.log(report);
    } catch (error) {
      console.error("Error:", error.message);
      process.exit(1);
    }
  });

program.parse();
