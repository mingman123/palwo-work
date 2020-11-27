var lolCommon = {
  /**
   * load scripts asynchronously
   * @param {string | {src:? string, charset:? string} | Array<{src:? string, charset:? string}>} scripts
   * @param {function} callback
   * @return {boolean}
   */
  loadScripts: function(scripts, callback) {
    callback = callback || function() {}
    if (!scripts) return false
    if (typeof scripts === 'string') {
      scripts = [{ src: scripts }]
    } else if (scripts instanceof Array) {
      for (var i = 0; i < scripts.length; i++) {
        if (!(scripts[i] instanceof Object)) {
          scripts[i] = { src: scripts[i] }
        }
      }
    } else if (scripts instanceof Object) {
      scripts = [scripts]
    } else {
      return false
    }

    var count = scripts.length
    var loaded = 0
    for (var i = 0; i < scripts.length; i++) {
      if (!scripts[i].src) {
        loaded++
        continue
      }
      ;(function(i) {
        var head = document.getElementsByTagName('head')[0]
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.charset = scripts[i].charset || 'gbk'
        script.src = scripts[i].src
        script.onload = function() {
          head.removeChild(script)
          loaded++
          if (loaded === count) {
            callback(true)
          }
        }
        head.appendChild(script)
      })(i)
    }
    return true
  },

  isPC: function() {
    return /(iPhone|iPad|iPod|iOS|Android|Windows Phone|BlackBerry|SymbianOS)/i.test(
      navigator.userAgent
    )
      ? false
      : true
  },

  init: function(callback) {
    callback = callback || function() {}
    this.isPC()
      ? this.loadScripts(
          [
            // { src: '//ossweb-img.qq.com/images/lol/title/lol.js' },
            { src: '//game.gtimg.cn/images/js/2018foot/foot.js' },
            {
              src: '//ossweb-img.qq.com/images/js/jquery/jquery-1.11.3.min.js'
            },
            { src: '//ossweb-img.qq.com/images/js/milo_bundle/milo.js' }
          ],
          function() {
            callback()
          }
        )
      : this.loadScripts(
          [
            { src: '//pub.idqqimg.com/qqmobile/qqapi.js?_bid=152' },
            { src: '//game.gtimg.cn/images/js/2018foot/foot.js' },
            { src: '//ossweb-img.qq.com/images/js/zepto/zepto.min.js' },
            { src: '//ossweb-img.qq.com/images/js/mobile_bundle/milo.js' }
          ], callback
        )
  }
}