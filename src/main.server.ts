import { App } from './app/app';
import { config } from './app/app.config.server';
import { bootstrapApplication } from '@angular/platform-browser';

const bootstrap = () => bootstrapApplication(App, config);

export default bootstrap;
