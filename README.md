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

**Run the command:**

   ```sh
   git smart-commit
   ```

