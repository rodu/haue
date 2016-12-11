# Ahue
## Control Philips Hue lights with an Aurelia app

> This is an experimental project while learning the Aurelia framework and its capabilities.

The app offers a UI to control the Philips Hue lights.

During development we use the [SteveyO Emulator](http://steveyo.github.io/Hue-Emulator/).

## Getting Started

Clone the repository and from the project folder run:

`npm install`

## HUE Emulator - Java Setup

You will need the Java Runtime Environment installed on your machine to run the emulator. To check if you have java installed open a terminal window and run:

`java --version`

If you get the corresponding version you are good to go, otherwise follow the next steps to install the JRE.

### Installing the JRE

You will need to [install the Java JRE](https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html) in your environment to run the Java based emulator. You don't need the JDK, just the JRE should do.

This is only necessary the very first time.

### Running the HUE Emulator

Once you have Java JRE sorted, you can go into your project folder and run:

`npm run emulator`

This will start the HUE emulator. **You need to click the Start button in the emulator window**.

The default configuration will make the emulator API endpoints available on `http://localhost:8000`.

## Running the Ahue App

To run the app, from the project root, run:

`npm start`

This will start the build provided out of the box with the Aurelia-CLI. Once completed, the app will be available at [http://localhost:9000](http://localhost:9000).

## Generating jsHue Documentation

The app uses the [JSHue library](https://github.com/blargoner/jshue). There is nothing to install in relation to this, but if you want to generate the documentation for the library follow these steps.

1. Build the documentation with: `npm run docs:build`
2. Serve the documentation with: `npm run docs:serve`
3. Browse the documentation at the URL shown in the console, usually [http://localhost:8080](http://localhost:8080)

**Happy Coding!**
