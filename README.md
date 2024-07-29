# WhatsApp Business API Integration

This repository demonstrates the integration of WhatsApp Business API, including generating tokens, creating approved Meta templates, and sending test messages.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project showcases the integration of WhatsApp Business API to send messages using approved Meta templates. It includes generating tokens, creating templates, and sending a test message.

## Features

- WhatsApp Business API integration
- Token generation
- Meta template creation
- Sending test messages

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js
- npm (Node Package Manager)
- WhatsApp Business Account
- Approved Meta templates

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/888Shubham/WhatsappBusinessAPI.git
    ```
2. Navigate to the project directory:
    ```bash
    cd WhatsappBusinessAPI
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Usage

1. Generate tokens:
   Follow the instructions provided in the WhatsApp Business API documentation to generate the necessary tokens.

2. Create approved Meta templates:
   Ensure you have the approved Meta templates ready to use for sending messages.

3. Configure the environment variables:
   Create a `.env` file in the root directory and add the following variables:
    ```env
    PORT=your_port_number_here
    SECRET_KEY=your_secret_key_here
    TO=recipient_phone_number_here
    ```

4. Run the application:
    ```bash
    npm start
    ```

5. Send a test message:
   Follow the prompts or the implementation details to send a test message using the approved Meta template.

## Project Structure

    ├── package.json
    ├── package-lock.json
    ├── server.js
    ├── .env
    ├── README.md

- `package.json`: Project dependencies and scripts.
- `package-lock.json`: Lockfile for project dependencies.
- `server.js`: Main application entry point.
- `.env`: Environment variables configuration (modify with your own settings).
- `README.md`: Project documentation.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
