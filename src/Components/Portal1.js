import ReactDom from 'react-dom'

function Portal1() {
  return ReactDom.createPortal(
    <div>
    Portal 1 Cntent....
    </div>,
    document.getElementById('first')
  )
}

export default Portal1
