/* eslint-disable */
import { Meteor } from 'meteor/meteor';
/* eslint-enable */
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});
