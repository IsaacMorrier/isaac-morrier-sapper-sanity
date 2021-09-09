import React from 'react'
import PropTypes from 'prop-types'
import { CgExternal } from 'react-icons/cg'

const LinkRenderer = props => (
  <span>
    {props.children}<CgExternal />
  </span>
)

LinkRenderer.propTypes = {
  children: PropTypes.node.isRequired
}

export default LinkRenderer