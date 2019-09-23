import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 2% 14% 0%;
`;

export const Button = styled.input`
    width: 140px;
    height: 30px;
    border: 1px solid red;
    border-radius: 30px;
    background-color: #D60000;
    color: #fff;
    margin: 10px;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;
    opacity: 0.5;
`

export const ButtonBox = styled.div`
    display: flex;
    padding: 0% 10% 0% calc(14% - 10px);
`;

export const Box = styled.div`
    display: flex;
    flex-flow: wrap;
    padding: 0% 10%;
`;

export const EventBox = styled.div`
    flex: 1;
    margin: 2%;
    margin-left: 0%;
    padding: 0% 5%;
`

export const MiddleBox = styled.div`
    flex: 2;
    margin: 2%;
    margin-left: 0%;
    padding: 0% 5%;
`;

export const RightBox = styled.div`
    flex: 3;
    margin: 2%;
    margin-left: 0%;
    padding: 0% 5%;
`;

export const FileImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 190px;
    background-color: #D60000;
    color: #fff;
    font-family: 'Archivo Black';
`;

export const Logo = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 190px;
    background-color: #D60000;
    color: #fff;
    font-family: 'Archivo Black';
`;

export const FileInput = styled.input`
    position: absolute;
    width: 180px;
    height: 190px;
    margin-top: -190px;
    opacity: 0;
    cursor: pointer;
`;

export const EventTypeText = styled.span`
    width: 160px;
    color: #D60000;
    font-size: 0.7em;
`

export const TextName = styled.textarea`
    display: block;
    width: 160px;
    height: 70px;
    font-size: 1.5em;
    resize: none;
    border: 0;
`;

export const LowBox = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    width: 158px;
    border: 1px solid #D60000;
    padding: 10px;
`;

export const TitleItem = styled.label`
    color: #424242;
`;

export const TextArea = styled.textarea`
    display: block;
    width: 300px;
    height: 70px;
    background-color: #EEEEEE;
    resize: none;
    border: 0;
    padding: 10px;
`;

export const InternalBox = styled.div`
    margin-left: 41px;
    margin-bottom: 90px;
`;

export const Downline = styled.hr`
    position: absolute;
    width: 320px;
    margin-top: 10px;
`;

export const FileInputText = styled.div`
    width: 200px;
    height: 15px;
    padding: 10px;
    color: #a9a9a9;
    background-color: #EEEEEE;
`;

export const FileInputData = styled.input`
    position: absolute;
    width: 320px;
    height: 33px;
    margin-top: 21px;
    opacity: 0;
    cursor: pointer;
    margin-left: -61px;
`

export const FileType = styled.div`
    color: #a9a9a9;
    padding: 5px 10px 0px 10px;
    font-size: 0.9em;
`;

export const Text = styled.div`
    display: inline-flex;
    width: 200px;
    color: #a9a9a9;
    padding: 5px 10px 0px 10px;
`;

export const UploadLabel = styled.div`
    position: absolute;
    margin-top: -37px;
    margin-left: 233px;
    width: 80px;
    display: inline-flex;
    color: #D60000;
    font-size: 0.9em;
    cursor: pointer;
    z-index: -1;
`;

export const CreateButton = styled.input`
    width: 155px;
    height: 40px;
    margin-top: 60px;
    margin-left: 205px;
    background-color: #00E4FF;
    border: 1px solid #00E4FF;
    border-radius: 20px;
`;