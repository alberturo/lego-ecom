# lego-ecom-test




:star: [Requirement of test](https://doc.clickup.com/3063428/p/h/2xfm4-25345/e3bf53053b8ebbc)

This is a sample application that demonstrates how to list data previusly loaded from an API, manage the state (locale and Redux toolkit), using of navigation, style, components and Firebase. The application authenticate users and loads products from a API and displays them. Users can select the products and add to cart. The application uses hooks (useEffect, useState, useNavigation, useReduce) it is built in React Native.



## Import Data
I have import the data from [link](https://documenter.getpostman.com/view/25149686/2s8Z73zWXA) as it was required.


## Demonstration


Here we can see the app running.

[![A4A Bookstore](https://ibb.co/SrKRkSy)]



## Getting Started
To get started  you can simply clone this `lego-ecom` repository and install the dependencies.

Clone the `lego-ecom-test` repository using git:

```bash
git clone git@github.com:alberturo/lego-ecom.git
cd lego-ecom
```

Installed dependencies Frontend with this command:
```bash
yarn install
yarn install @react-native-async-storage/async-storage
yarn install @react-navigation/bottom-tabs
yarn install @react-navigation/native
yarn install @react-navigation/stack
yarn install @reduxjs/toolkit
yarn install expo
yarn install expo-status-bar
yarn install firebase
yarn install react-native-gesture-handler
yarn install react-native-safe-area-context
yarn install react-redux

```


Run the application with this command:
```bash
yarn npx expo start

```

## Tech Stack
* React Native
* Expo

## Code Scalable
* Organization by components, Screens, Navigator, Theme and Utils
* Reusable component Card, functions, styles
