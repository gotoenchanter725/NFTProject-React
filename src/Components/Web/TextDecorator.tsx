import { styled } from '@mui/material/styles';

export const TextDecorator = styled((props: any) => (
    <span {...props} />
  ))`
    color: ${(props)=>props.mode==="light" ? '#053554' : 'white'};
`;
