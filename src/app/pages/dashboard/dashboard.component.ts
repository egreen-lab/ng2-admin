import {Component, ViewEncapsulation} from '@angular/core';

import {PopularApp} from './popularApp';
import {QuickMonitor} from './quick-monitor';
import {TrafficChart} from './trafficChart';
import {UsersMap} from './usersMap';
import {LineChart} from './lineChart';
import {Feed} from './feed';
import {Todo} from './todo';
import {Calendar} from './calendar';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'dashboard',
  pipes: [],
  directives: [PopularApp, QuickMonitor, TrafficChart, UsersMap, LineChart, Feed, Todo, Calendar, BaCard],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor() {
  }

}
