import simpleGit from "simple-git";
import ncu from "npm-check-updates";
import snyk from "snyk";
import chalk from "chalk";
import fs from "fs/promises";
import path from "path";

export async function scanRepository(repoPath) {
  const git = simpleGit(repoPath);

  try {
    // Check if it's a valid Git repository
    await git.checkIsRepo();
  } catch (error) {
    throw new Error("Not a valid Git repository");
  }

  const packageJsonPath = path.join(repoPath, "package.json");

  try {
    await fs.access(packageJsonPath);
  } catch (error) {
    throw new Error("No package.json found in the repository");
  }

  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf-8"));

  // Check for updates
  const updates = await ncu.run({
    packageFile: packageJsonPath,
    upgrade: false,
    jsonUpgraded: true,
  });

  // Scan for vulnerabilities
  const vulnResult = await snyk.test(repoPath);

  return {
    updates,
    vulnerabilities: vulnResult.vulnerabilities,
  };
}

export function generateReport(result) {
  let report = "";

  report += chalk.bold.underline("Dependency Update Suggestions:\n");
  if (Object.keys(result.updates).length > 0) {
    for (const [pkg, version] of Object.entries(result.updates)) {
      report += chalk.green(`${pkg}: ${version}\n`);
    }
  } else {
    report += chalk.green("All dependencies are up to date.\n");
  }

  report += "\n" + chalk.bold.underline("Vulnerability Alerts:\n");
  if (result.vulnerabilities.length > 0) {
    for (const vuln of result.vulnerabilities) {
      report += chalk.red(
        `${vuln.packageName} (${vuln.version}): ${vuln.title}\n`
      );
      report += chalk.yellow(`Severity: ${vuln.severity}\n`);
      report += chalk.blue(`Fix: Upgrade to ${vuln.upgradePath[0]}\n\n`);
    }
  } else {
    report += chalk.green("No vulnerabilities found.\n");
  }

  return report;
}
