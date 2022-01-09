import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components'

//types
export interface FormInputProps {
    placeholder: string
    name: string
    defaultValue?: string
    type?: string
}

    //styled-components

    const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin: 1rem 0rem;
    `
    const Input = styled.input.attrs((props: { fontSize: number }) => ({
        size: props.fontSize || "1em",
    }))
        `
        display: inline-block;
        border-radius: 3px;
        padding: 0.5rem 0;
        margin: 0.5rem 0rem;
          height:40px;
          border: 2px solid white;
          font-size: 14px;
          width: 100%;
          max-width:500px;
          min-width:250px;
          outline:transparent;
        `
    const Label = styled.label`
    `

const FormInput: React.FC<FormInputProps> = ({ name = "", placeholder = "", defaultValue = "", type = "text" }) => {
    const [fs, setFs] = useState<string>("");
    return (
        <InputContainer>
            <Label>{name}</Label>
            <Input type={type} name={name} autoComplete={name} placeholder={placeholder} defaultvalue={defaultValue} onChange={({ target: { value } }: { target: { value: string } }) => setFs(value)} />
        </InputContainer>
    );
};

export default FormInput;