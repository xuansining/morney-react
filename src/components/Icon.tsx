import React from 'react';
let importAll=(requireContext: __WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
try{
  importAll(require.context('../icons',true,/\.svg$/));
}catch (err) {
  console.log(err);
}

type Props={
  name: string
}
const Icon=(props : Props)=>{
  return (
    <svg className="icon">
      <use xlinkHref={'#'+props.name}/>
    </svg>
  )
};

export default Icon;
