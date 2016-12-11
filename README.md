# Ahue
## Control Philips Hue lights with an Aurelia app

> This is an experimental project while learning the Aurelia framework and its capabilities.

The app offers a UI to control the [Philips Hue](http://www2.meethue.com/en-gb/) lights.

## Technology Stack

The application uses the awesome [Aurelia Framework](http://aurelia.io/). The application was created off the Aurelia-CLI setup.

For state management I used the awesome [Redux](http://redux.js.org/), integrated in Aurelia with few facilities provided by the [aurelia-redux-plugin](https://github.com/steelsojka/aurelia-redux-plugin). You will find all that in the code.

The communication with the [Hue Bridge](http://www2.meethue.com/en-gb/productdetail/philips-hue-bridge) uses the [jsHue library](https://github.com/blargoner/jshue), which provides handy methods to interact with the bridge.

During development, we use the [SteveyO Hue Emulator](http://steveyo.github.io/Hue-Emulator/) to simulate the bridge device.

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


To run the app, open a new terminal window and from the project root run:

`npm start`

This will start the build provided out of the box with the Aurelia-CLI. Once completed, the app will be available at [http://localhost:9000](http://localhost:9000).

**You need to be running the emulator and click the Start button before you can browse the app.**

## Generating jsHue Documentation

The app uses the [jsHue library](https://github.com/blargoner/jshue). There is nothing to install in relation to this, but if you want to generate the documentation for the library follow these steps.

1. Build the documentation with: `npm run docs:build`
2. Serve the documentation with: `npm run docs:serve`
3. Browse the documentation at the URL shown in the console, usually [http://localhost:8080](http://localhost:8080)

**Happy Coding!**
