import React from 'react'

export default function Alert(props) {
  return (
    props.Alrt && <div class={`alert alert-${props.Alrt.typ} alert-dismissible fade show`} role="alert">
    <strong> {props.Alrt.typ == "danger"?"":"success"} </strong> {props.Alrt.msg}
    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div>
  )
}
