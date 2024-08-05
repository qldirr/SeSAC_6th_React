import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TextProps extends Component {
  render() {
    const {text, valid} = this.props
    return (
      <div>
        <div>{text}</div>
        <button onClick={() => {console.log(valid);}}>콘솔 메세지</button>
      </div>
    )
  }
}

TextProps.defaultProps = {
    text:'이건 기본 text props입니다'
}

TextProps.propTypes = {
    text:PropTypes.string.isRequired
}

export default TextProps