import { MJMLElement, helpers } from 'mjml-core'
import React, { Component } from 'react'
import cx from 'classnames'

const tagName = 'mj-container'
const parentTag = ['mj-body']
const defaultMJMLDefinition = {
  attributes: {
    'width': '600px',
    'background-color': null
  },
  inheritedAttributes: [
    'width'
  ]
}
const postRender = $ => {
  const containerWidth = $('.mj-container').data('width')

  $('.mj-container-outlook-open').each(function () {
    const $nextElem = $(this).next()
    const classes = $nextElem.attr('data-class') ? $nextElem.attr('data-class').split(' ').map(c => `${c}-outlook`).join(' ') : false
    $nextElem.removeAttr('data-class')

    $(this).replaceWith(`${helpers.startConditionalTag}
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="${containerWidth}" align="center" style="width:${containerWidth}px;">
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"${classes ? ` class="${classes}"` : ''}>
      ${helpers.endConditionalTag}`)
  })

  $('.mj-container-outlook-line').each(function () {
    const $nextElem = $(this).next()
    const classes = $nextElem.attr('data-class') ? $nextElem.attr('data-class').split(' ').map(c => `${c}-outlook`).join(' ') : false
    $nextElem.removeAttr('data-class')

    $(this).replaceWith(`${helpers.startConditionalTag}
      </td></tr></table>
      ${helpers.endConditionalTag}
      ${helpers.startConditionalTag}
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="${containerWidth}" align="center" style="width:${containerWidth}px;"${classes ? ` class="${classes}"` : ''}>
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      ${helpers.endConditionalTag}`)
  })

  $('.mj-container-outlook-close').each(function () {
    $(this).replaceWith(`${helpers.startConditionalTag}
      </td></tr></table>
      ${helpers.endConditionalTag}`)
  })

  $('body')
    .css({ background: $('.mj-container').data('background-color') })
    .each(function () {
      if ($(this).attr('style') === '') {
        $(this).removeAttr('style')
      }
    })

  $('.mj-container')
    .removeAttr('data-background-color')
    .removeAttr('data-width')
    .each(function () {
      if ($(this).attr('style') === '') {
        $(this).removeAttr('style')
      }
    })

  return $
}

@MJMLElement
class Container extends Component {

  styles = this.getStyles()

  getStyles () {
    const { mjAttribute } = this.props

    return {
      div: {
        backgroundColor: mjAttribute('background-color')
      }
    }
  }

  render () {
    const { renderWrappedOutlookChildren, mjAttribute, children } = this.props
    const { width } = helpers.widthParser(mjAttribute('width'))
    const classNames = cx('mj-container', mjAttribute('css-class'))

    return (
      <div
        className={classNames}
        data-background-color={mjAttribute('background-color')}
        data-width={width}
        style={this.styles.div}>
        {renderWrappedOutlookChildren(children)}
      </div>
    )
  }

}

Container.tagName = tagName
Container.parentTag = parentTag
Container.defaultMJMLDefinition = defaultMJMLDefinition
Container.postRender = postRender

export default Container
