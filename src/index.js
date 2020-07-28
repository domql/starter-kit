'use strict'

import DOM from '@rackai/domql'
var { performance } = window

var start = performance.now()
var dom = DOM.create({
  style: {
    fontFamily: '"Helvetica", "Arial", --system-default'
  },
  icon: '✅',
  strong: 'domql',
  text: ` render in `,
  time: '',
  milliseconds: ' milliseconds'
})

dom.update({ time: `${performance.now() - start}` })
