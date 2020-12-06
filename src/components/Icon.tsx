import React from 'react';
import styled from 'styled-components';
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
  return (<Icons>
    <svg className="icon">
      <use xlinkHref={'#'+props.name}/>
    </svg>
  </Icons>)
};
const Icons=styled.div`
    .icon{
      width:24px;
      height:24px;
    }


`;
export default Icon;
