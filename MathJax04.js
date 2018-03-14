import React, { Component } from 'react'
import main from '../../common/mathjax/MathJaxMain'

class MathJax04 extends Component {
  render () {
    return (
           < div >
           < main >
           < textarea id = 'MathInput' rows = '2' cols = '60' / >
           < div id = 'MathPreview' / >
         < div id = 'MathBuffer' / >
         < /main>
         < /div>
  )
  }
}

export default MathJax04
