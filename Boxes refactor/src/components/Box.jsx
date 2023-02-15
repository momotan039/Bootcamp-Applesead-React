import styled from 'styled-components'
const  Box=styled.div`
width: ${(props)=>props.width};
height: 500px;
display: flex;
justify-content: center;
align-items: center;
background-color:green;

&>div{
    display: flex;
  justify-content: center;
  align-items: center;
}
`

export default Box