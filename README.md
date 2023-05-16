# BeCourage App

an insurance app built in RN ❤️


## Presquites:

- Typescript
- Android/iOS development tools installed
- React Native >0.64

## How to run the project

**Step 1:**

Download or clone this repo by using the link below:

```
git clone https://github.com/iampato/BeCourage.git
```

**Step 2:**

Ensure you have react native cli install 


**Step 3:**

Cd into the project directory and install packages using `npm` or `yarn`

```
yarn install
```
or

```
npm i
```


**Step 5:**

Run the project, depending on the `React Native CLI` installed, run metro:

```
yarn start
``

or 

```
npm run start
``

If it gives you the option to either run android or ios press `a` for android and `i` for ios if not
run :

- Android
```
yarn android
```
- iOS
```
yarn ios
```
### Libraries & Tools Used

1. ### State management
    * [Redux](https://redux.js.org/) - a predictable state container for managing the application state
    * [React Redux](https://react-redux.js.org/) - official React bindings for Redux
    * [redux-thunk](https://github.com/reduxjs/redux-thunk) - a middleware for handling asynchronous actions in Redux
    * [redux-persist](https://github.com/rt2zz/redux-persist) - for persisting and rehydrating the Redux store
    
2. ### Code generation
   * [react-native-codegen](https://github.com/microsoft/react-native-codegen) - a tool for generating type-safe bridge code between JavaScript and native code
   
3. ### Navigation
    * [React Navigation](https://reactnavigation.org/) - a library for handling navigation in React Native apps
     
4. ### Testing
    * [Jest](https://jestjs.io/) - a JavaScript testing framework

5. ### Others
   * [react-native-svg](https://github.com/react-native-svg/react-native-svg) - a library for SVG support in React Native
   * [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) - a library for using custom icons in React Native
   * [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) - a library for handling safe area insets in React Native
   * [react-native-chart-kit](https://github.com/indiespirit/react-native-chart-kit) - a library for creating charts in React Native
   * [react-native-picker-select](https://github.com/lawnstarter/react-native-picker-select) - a library for creating cross-platform picker select components in React Native
   * [lottie-react-native](https://github.com/lottie-react-native/lottie-react-native) - a library for rendering Lottie animations in React Native

### Folder Structure
This application uses a multi-module architecture though the packages are not in seperate packages this can easily be done. for purposes of simplicity I under them under `src` 


Here is the folder structure we have been using in this project inside of `src`

```
.
├── app
...
├── components
...
├── core
...
└── features
...
```


1. The **app*** module holds app related things example the app entry component, main routes etc
Ideally high level components that are need by an app

```
├── app
│   ├── App.tsx
│   └── rootNavigation.tsx
```

2. The **core*** module are common things that an app needs, and various features a can depend on this module example of things found on the core module include:
   - assets - a central place for maanaging assets instead of directly using them in the app, makes it easy to change assets
   - config - Set up your config; things like `APIURL`, sentry url etc
   - constants - constants used in your application
   - theme - the app uses a custom theme to provide theming
   - styles - includes extensions on various colors, textstyles, durations, Corners
   - And many more

For this app here were my core modules; constansts to hold my immutable variables, sizes for dynamic and responsive designs, textTopography for my custom text topography and lastly theme that exposed an hook for getting theme colors based on the theme of the device 
```
├── core
│   ├── constants.ts
│   ├── sizes.ts
│   ├── textTopography.ts
│   └── theme.ts
```

3. The **Feature*** module houses all the features and in this app they include

```
└── features
    ├── authentication
    │   ├── components
    │   ├── navigation
    │   │   └── authenticationNavigation.tsx
    │   └── screens
    │       ├── forgotPasswordScreen.tsx
    │       ├── landingScreen.tsx
    │       ├── loginScreen.tsx
    │       └── registerScreen.tsx
    ├── commission
    │   ├── navigation
    │   │   └── commissionNavigation.tsx
    │   └── screens
    │       └── commissionScreen.tsx
    ├── home
    │   ├── components
    │   │   ├── policyCard.tsx
    │   │   ├── policyTabs.tsx
    │   │   └── priceFilter.tsx
    │   ├── navigation
    │   │   └── homeNavigation.tsx
    │   └── screens
    │       └── homeScreen.tsx
    ├── main
    │   ├── components
    │   ├── navigation
    │   │   └── mainNavigation.tsx
    │   └── screens
    │       └── mainScreen.ts
    ├── policy
    │   ├── components
    │   │   └── policyCard.tsx
    │   ├── navigation
    │   │   ├── policyNavigation.tsx
    │   │   └── policyTabs.tsx
    │   └── screens
    │       ├── claimsScreen.tsx
    │       └── policyScreen.tsx
    └── quatation
        ├── components
        │   ├── medicalInsuranceForm.tsx
        │   ├── quotationCard.tsx
        │   ├── quotationForm.tsx
        │   └── quotationType.tsx
        ├── navigation
        │   └── quatationNavigation.tsx
        └── screens
            ├── addQuatationScreen.tsx
            └── quatationScreen.tsx
```

## Improvements that could be made
1. Adding of more tests (time constraints)

The final app looks like this:

<img src="https://github.com/iampato/BeCourage/blob/main/screenshots/Screenshot_1684272630.png" width="240"/>
<img src="https://github.com/iampato/BeCourage/blob/main/screenshots/Screenshot_1684272643.png" width="240"/> 
<img src="https://github.com/iampato/BeCourage/blob/main/screenshots/Screenshot_1684272646.png" width="240"/>
<img src="https://github.com/iampato/BeCourage/blob/main/screenshots/Screenshot_1684272650.png" width="240"/>
<img src="https://github.com/iampato/BeCourage/blob/main/screenshots/Screenshot_1684272652.png" width="240"/>
<img src="https://github.com/iampato/BeCourage/blob/main/screenshots/Screenshot_1684272658.png" width="240"/>
<img src="https://github.com/iampato/BeCourage/blob/main/screenshots/Screenshot_1684272662.png" width="240"/>
<img src="https://github.com/iampato/BeCourage/blob/main/screenshots/Screenshot_1684272728.png" width="240"/>
<img src="https://github.com/iampato/BeCourage/blob/main/screenshots/Screenshot_1684272732.png" width="240"/>
<img src="https://github.com/iampato/BeCourage/blob/main/screenshots/Screenshot_1684272735.png" width="240"/> 
<img src="https://github.com/iampato/BeCourage/blob/main/screenshots/Screenshot_1684272738.png" width="240"/>
<img src="https://github.com/iampato/BeCourage/blob/main/screenshots/Screenshot_1684272742.png" width="240"/>
<img src="https://github.com/iampato/BeCourage/blob/main/screenshots/Screenshot_1684272745.png" width="240"/>
<img src="https://github.com/iampato/BeCourage/blob/main/screenshots/Screenshot_1684272749.png" width="240"/>
<img src="https://github.com/iampato/BeCourage/blob/main/screenshots/Screenshot_1684272755.png" width="240"/>

## Video demo 
https://github.com/iampato/BeCourage/assets/32388339/50bf106b-b80f-4c09-a1d2-9c7e3c4d08bc


