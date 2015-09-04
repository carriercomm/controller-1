/*
 * Minio Cloud Storage, (C) 2015 Minio, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var Reflux = require('reflux');
var commandboxActions = require('../actions/commandbox-actions.js');

module.exports = Reflux.createStore({
  listenables: [commandboxActions],
  initialstate: {
    command: '',
    arg: ''
  },
  getInitialState() {
    return this.initialstate;
  },
  onCommandSet(command) {
    this.trigger({command});
  },
  onArgSet(arg) {
    this.trigger({arg});
  }
});
