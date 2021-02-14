import React from 'react'
import PropTypes from 'prop-types'
import { useSetting } from '../lib/useSetting'
import { withStyles } from '@material-ui/core/styles'

function getThemeCssEl (style) {
  function ThemeCssEl () {
    return null
  }
  ThemeCssEl.propTypes = { classes: PropTypes.object.isRequired }
  return style(ThemeCssEl)
}

const ProvisonedStylesBaseline = function () {
  const [settings] = useSetting()
  const el = getThemeCssEl(withStyles(() => ({
    '@global': {
      ':root': {
        '--secondary-main': settings.theme.secondaryColor,
      },
    },
  })))

  return React.createElement(el)
}

export default ProvisonedStylesBaseline
