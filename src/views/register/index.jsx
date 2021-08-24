import styled from "styled-components";
import { useForm } from 'react-hook-form';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #6d6d6d;
`;

const Registration = () => {
    const { register, handleSubmit, errors } = useForm();
    const [errorStatus, setErrorStatus] = useState(null);

    return (
        <Container>Register!</Container>
    )
}

export default Registration