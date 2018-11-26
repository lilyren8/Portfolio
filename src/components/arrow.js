import React from "react"

export default function Arrow(props) {
  const { className, onClick } = props
  return (
    <div onClick={onClick}>
      <button className={className} />
    </div>
  )
}
