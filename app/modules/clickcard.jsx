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

import React from 'react'
import classnames from 'classnames'

class ClickCard extends React.Component {
  constructor(props) {
    super(props);
    this.onDoubleClick = this.onDoubleClick.bind(this);
  }
  onDoubleClick() {
    this.props.onTouch(this.props.route)
  }
  getClassName() {
    return classnames('card', this.props.className)
  }
  render() {
    return (
      <div className={this.getClassName()} onDoubleClick={this.onDoubleClick}>
        <h6> {this.props.title} </h6>
      </div>
    )
  }
}

ClickCard.propTypes = {
  title: React.PropTypes.string,
  className: React.PropTypes.string,
  route: React.PropTypes.string.isRequired,
  onTouch: React.PropTypes.func.isRequired
}

export default ClickCard
