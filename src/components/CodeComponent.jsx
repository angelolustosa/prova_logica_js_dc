import React from 'react'
import Highlight from 'react-highlight'
// https://stackoverflow.com/questions/39163068/react-react-highlight-code-highlighting
// https://github.com/highlightjs/highlight.js/tree/main/src/styles
import './CodeComponent.css'
import "../../node_modules/highlight.js/styles/tomorrow.css";

export default function CodeComponent({ code }) {
    console.log('code:', code)
    return (
        <div>
            {/* <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card> */}
            <Highlight id={'code-format'} className='js' style={{ whiteSpace: `pre-line` }}>
                {code}
            </Highlight>

            {/* <div id='background' style={{ background: '100px', width: 'fit-content' }}>
                <div id="cardSection" style={{}}>
                    <div id="background" style={{ padding: '100px', backgroundColor: '#0c1021' }}>
                        <div className="row">
                            <div className="col-sm">
                                <div id="alignLeftArea" style={{ height: '33px' }}> <span className="icon" style={{ color: '#E0443E', width: '12px', display: 'block' }}><svg className="svgicon"><use xlinkHref="#dot"></use></svg></span> <span className="icon" style={{ color: '#DEA123', width: '12px' }}><svg className="svgicon"><use xlinkHref="#dot"></use></svg></span> <span className="icon" style={{ color: '#1AAB29', width: '12px' }}><svg className="svgicon"><use xlinkHref="#dot"></use></svg></span> </div>
                            </div>
                            <div className="col-sm">
                                <div className="column is-6">
                                    <p className="has-text-centered edit-input" id="fileText" style={{ color: `rgb(149, 151, 153)`, fontSize: `14px`, display: 'block' }} contentEditable="true">hello-world.js</p>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div id="alignRigthArea" style={{ height: '33px' }}> <span className="icon" style={{ color: '#E0443E', width: '12px', display: 'block' }}><svg className="svgicon"><use xlinkHref="#dot"></use></svg></span> <span className="icon" style={{ color: '#DEA123', width: '12px' }}><svg className="svgicon"><use xlinkHref="#dot"></use></svg></span> <span className="icon" style={{ color: '#1AAB29', width: '12px' }}><svg className="svgicon"><use xlinkHref="#dot"></use></svg></span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


        </div >
    )
}
