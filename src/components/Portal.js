import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'


const Portal = ({ children, selector }) => {

  const [dom, setDom] = useState(null)

  useEffect(() => {
    setDom(document.querySelector(selector))
  }, [])

  if (dom === null) return null
  else return ReactDOM.createPortal(children, dom)
}

export default Portal