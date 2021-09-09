import React from 'react'
import PropTypes from 'prop-types'
import { GoLinkExternal } from 'react-icons/go'

const LinkRenderer = props => (
  <span>
    {props.children}<GoLinkExternal />
  </span>
)

LinkRenderer.propTypes = {
  children: PropTypes.node.isRequired
}

export default LinkRenderer