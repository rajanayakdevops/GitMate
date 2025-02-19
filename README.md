# GitMate Smart Commit

**GitMate Smart Commit** is a powerful Git extension that generates smart commit messages based on your staged changes. It helps streamline your version control workflow by providing interactive, context-aware commit message suggestions.

## Features

- **Automatic Commit Message Generation:**  
  Generates a commit message based on the files that are staged. If fewer than 5 files are staged, it lists them explicitly; if more, it summarizes by file type.
- **Interactive Prompt:**  
  Lets you accept the suggested commit message, edit it, or cancel the commit altogether.
- **Globally Accessible:**  
  Once installed globally via npm, you can use it in any Git repository on your system.
- **Offline Capabilities:**  
  Works entirely offline without needing an internet connection.

## Installation

Install **GitMate Smart Commit** globally using npm:

```sh
npm install -g gitmate-smart-commit
```

## Usage

After installation, navigate to **any Git repository** on your system where you want to use the tool:

1. **Open a Terminal/Command Prompt and change directory to your Git repository:**

   ```sh
   cd /path/to/your/git/repository
   ```

2. **Stage your changes:**

   ```sh
   git add .
   ```

3. **Run the command:**

   ```sh
   git smart-commit
   ```

4. **Interactive Prompt:**  
   You'll see a suggested commit message, for example:

   ```
   Suggested Commit Message: "Updated index.js, auth.js, database.js (Bug Fix)"
   Use this message? (Y/N/Edit):
   ```

   - Type **Y** to accept and commit.
   - Type **N** to cancel.
   - Type **Edit** to modify the commit message before committing.

5. **View Help:**  
   For more details on usage, run:
   
   ```sh
   git smart-commit --help
   ```

## Example

```sh
cd /path/to/your/git/repository
git add .
git smart-commit
```

If the tool suggests a message like:

```
Updated 10 JS files, 5 HTML files (Feature Update)
```

You can choose to accept, edit, or cancel as needed.

## Contributing

Contributions are welcome! If you have ideas for improvements or bug fixes:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch and open a pull request.

## License

This project is licensed under the [Apache 2.0 License](LICENSE).

## Contact

For any questions, suggestions, or issues, please open an issue in the [GitHub repository](https://github.com/yourusername/gitmate-smart-commit) or contact me directly.

---

Happy committing! 🚀



# GitMate_AI 🚀  

**GitMate_AI** is an AI-powered Git commit message generator leveraging Google's Gemini API. It automates commit message creation, ensuring meaningful, structured, and context-aware messages while streamlining your Git workflow.  

## Features  

✅ **AI-powered commit message generation** – Uses Gemini API for smart, context-aware messages.  
✅ **Offline mode** – Generates commit messages locally without API dependency.  
✅ **Interactive commit approval** – Accept, edit, or reject AI-generated messages.  
✅ **Custom prompt support** – Guide the AI with personalized instructions.  
✅ **Multi-language support** – Generates commit messages in different languages.  
✅ **Enhanced commit history analysis** – AI learns from past commits to improve future suggestions.  
✅ **Seamless Git integration** – Works effortlessly within Git repositories.  
✅ **User-configurable settings** – Set preferred commit styles, tone, and message length.  
✅ **Secure API key management** – Uses environment variables for secure API storage.  

---

## Installation  

Install GitMate_AI globally using npm:  

```sh
npm install -g gitmate-ai
git gcommit
   ```



# git-dep-scanner

git-dep-scanner is a command-line tool that scans Git repositories for dependency vulnerabilities and provides update suggestions. It helps developers keep their projects secure and up-to-date by identifying potential security risks and outdated packages.

## Features

- Scans Git repositories for dependency vulnerabilities
- Provides update suggestions for outdated packages
- Generates a colorful, easy-to-read report in the console
- Works with Node.js projects (npm)

## Installation

To install git-dep-scanner globally, run:

\`\`\`
npm install -g git-dep-scanner
\`\`\`

## Usage

To scan a Git repository, use the following command:

\`\`\`
git-dep-scanner /path/to/your/repo
\`\`\`

Replace `/path/to/your/repo` with the actual path to the Git repository you want to scan.

## Example Output

\`\`\`
Scanning repository...

Dependency Update Suggestions:
express: ^4.17.1 → ^4.18.2
lodash: ^4.17.20 → ^4.17.21

Vulnerability Alerts:
lodash (4.17.20): Prototype Pollution in lodash
Severity: high
Fix: Upgrade to lodash@4.17.21

express (4.17.1): Open Redirect in express
Severity: moderate
Fix: Upgrade to express@4.17.3
\`\`\`

## How It Works

git-dep-scanner performs the following steps:

1. Verifies that the provided path is a valid Git repository
2. Checks for the presence of a `package.json` file
3. Uses `npm-check-updates` to identify available package updates
4. Utilizes `snyk` to scan for known vulnerabilities in the dependencies
5. Generates a comprehensive report with update suggestions and vulnerability alerts

## Dependencies

- [simple-git](https://github.com/steveukx/git-js): A lightweight interface for running git commands
- [npm-check-updates](https://github.com/raineorshine/npm-check-updates): A tool to find the latest versions of package dependencies
- [snyk](https://github.com/snyk/snyk): A tool to find, fix and monitor known vulnerabilities
- [commander](https://github.com/tj/commander.js): A complete solution for node.js command-line interfaces
- [chalk](https://github.com/chalk/chalk): Terminal string styling done right

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

[Your Name]

## Acknowledgements

- Thanks to the creators and maintainers of the open-source libraries used in this project.
- Inspired by the need for easy-to-use security scanning tools in the Node.js ecosystem.

\`\`\`


