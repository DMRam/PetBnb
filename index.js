import './gesture-handler';
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppWrapper from '../PetBnb/src/wrapper/AppWrapper';

AppRegistry.registerComponent(appName, () => AppWrapper);
