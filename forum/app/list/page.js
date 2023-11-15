'use client'

import { useState } from "react"

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  let [수량, 수량변경] = useState(0)
  return (
    상품.map((a, i) => {
      return (
        <div className="food" key={i}>
          <img src={`/food${i}.png`} />
          <h4>{a} $40</h4>
          <span> {수량} </span>
          <button onClick={()=>{ 수량변경(수량+1) }}>+</button> 
        </div>
      )
    })
  )
} 