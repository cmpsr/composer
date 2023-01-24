import * as React from "react";

function IconBrandLinkedin({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={16} height={16} rx={2} /><line x1={8} y1={11} x2={8} y2={16} /><line x1={8} y1={8} x2={8} y2={8.01} /><line x1={12} y1={16} x2={12} y2={11} /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>;
}

export default IconBrandLinkedin;