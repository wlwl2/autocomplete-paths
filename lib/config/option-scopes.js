'use babel'

export default {
  enableHtmlSupport: [
    {
      scopes: ['text.html.basic'],
      prefixes: [
        'src=[\'"]',
        'href=[\'"]'
      ],
      extensions: ['css', 'js', 'png', 'gif', 'jpeg', 'jpg', 'tiff', 'html'],
      relative: true
    }
  ]
}
