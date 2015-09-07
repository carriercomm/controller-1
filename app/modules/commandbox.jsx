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

import React from 'react';
import Reflux from 'reflux';

var CmdBoxActions = Reflux.createActions(['commandSet', 'argSet']);
var CmdBoxStore = Reflux.createStore({
  listenables: [CmdBoxActions],
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

var CmdBoxComponent = React.createClass({
  mixins: [Reflux.connect(CmdBoxStore)],
  onChange(e) {
    var command = this.state.command + ' '
    CmdBoxActions.argSet(e.target.value.replace(command, ''));
  },
  render() {
    return (
        <div id='top-search-wrap'>
          <input type='text' value={this.state.command + ' ' + this.state.arg}  placeholder='Command Box' onChange={this.onChange} />
        </div>
    );
  }
});

export default { CmdBoxActions, CmdBoxStore, CmdBoxComponent };
