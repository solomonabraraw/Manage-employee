import styled, { css } from 'styled-components';

import { Pencil } from '@styled-icons/bootstrap';
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width:400px;
  height:20px;
  color: black;
  background: white;
  border: 2px solid black;
  border-radius: 3px;
`;

export const InputGroup = styled.div`
  position: relative;
`;
export const InputField = styled.input`
font-size: 18px;
padding: 10px 10px 10px 5px;
display: block;
width: 300px;
border: none;
border-bottom: 1px solid #757575;
&:focus {
  outline: none;
  border-bottom: 3px solid green;
}
`;
export const InputLabel = styled.label`
color: #999;
font-size: 18px;
font-weight: normal;
position: absolute;
pointer-events: none;
left: 5px;
top: 10px;
transition: 0.2s ease all;
${InputField}:focus ~ & {
  top: -18px;
  font-size: 14px;
  color: #5264ae;
}
`;
export const Container = styled.div`
  width :1500px;
  border: 2px solid black;
  border-radius: 3px;

`;
export const Button = styled.button`


  
  ${props => props.primary && css`

 

    background-color: #0078d0;
    border: 0;
    border-radius:10px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: system-ui,-apple-system,system-ui,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;
    font-size: 18px;
    font-weight: 600;
    outline: 0;
    padding: 10px 30px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: all .3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  
  
 :before {

    background-image: linear-gradient(-180deg, #37AEE2 0%, #1E96C8 100%);
    border-radius: .5rem;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-size: 16px;
    justify-content: center;
    padding: 1rem 1.75rem;
    text-decoration: none;
    width: 100%;
    border: 0;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  
  
  
  
  :hover {
    box-shadow: rgba(255, 255, 255, .2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px;
    transform: scale(1.05);
  }
  
  @media (min-width: 768px) {
    .button-71 {
      padding: 16px 48px;
    }`}
   ${props => props.secondary && css`

 
   margin-left:380px;
    background-color: green;
    border: 0;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: system-ui,-apple-system,system-ui,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;
    font-size: 18px;
    font-weight: 600;
    outline: 0;
    padding: 10px 30px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: all .3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  
  
 :before {
    background-color: initial;
    background-image: linear-gradient(#fff 0, rgba(255, 255, 255, 0) 100%);
    border-radius: 125px;
    content: "";
    height: 50%;
    left: 4%;
    opacity: .5;
    position: absolute;
    top: 0;
    transition: all .3s;
    width: 92%;
  }
  
  :hover {
    box-shadow: rgba(255, 255, 255, .2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px;
    transform: scale(1.05);
  }
  
  @media (min-width: 768px) {
    .button-71 {
      padding: 16px 48px;
    }
  
  `} 
  ${props => props.danger && css`

 

    background-color: red;
    border: 0;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: system-ui,-apple-system,system-ui,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;
    font-size: 18px;
    font-weight: 600;
    outline: 0;
   
    padding: 10px 30px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: all .3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  
  
 :before {
    background-color: initial;
    background-image: linear-gradient(-180deg, #FF7E31, #E62C03);
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
    height: 40px;
    line-height: 40px;
    outline: 0;
    overflow: hidden;
    padding: 0 20px;
    pointer-events: auto;
    position: relative;
    text-align: center;
    touch-action: manipulation;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: top;
    white-space: nowrap;
    width: 100%;
    z-index: 9;
    border: 0;
    transition: box-shadow .2s;
  }
  
  
  }
  
  :hover {
    box-shadow: rgba(255, 255, 255, .2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px;
    transform: scale(1.05);
  }
  
  @media (min-width: 768px) {
    .button-71 {
      padding: 16px 48px;
    }
  
  `}
 
`;
export const StyledTable = styled.table`
  caption-side: top;
  border-radius:50%;
  border: none;
  border-collapse: collapse;
  min-width: 1500px;
  margin-left:250px;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

//   vertical-align: baseline | sub | super | text-top | 
//                 text-bottom | middle | top | bottom | 
//                 <percentage> | <length> ;

  tbody {
    vertical-align: top;
  }              
  td,
  th {
    border: none;
  }
   td,
  th {
   
 
    padding: 10px 10px;
  } 

  

  tbody tr {
    
      background-color: white;
    
    :hover {
      background-color: #d5f4e6;
    }
  }
  thead > tr {
    background:#1E96C8;
    color: white;
    font-size:25px;
   
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
export const Icon=styled.div``
Icon.Pencil=styled(Pencil)`
color:white
`



  