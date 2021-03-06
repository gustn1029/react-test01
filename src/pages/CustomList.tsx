import React from "react";
import { useRef, useState } from "react";

interface Name {
    familyName: string,
    givenName: string 
}

function CustomList() {

    const familyNameRef = useRef<HTMLInputElement>(null)
    const givenNameRef = useRef<HTMLInputElement>(null)
    
    const [name, setName] = useState<Name>({
        familyName: '',
        givenName: ''
    });

    const {familyName, givenName} = name;

    const confirm = () => {
        if((familyNameRef && familyNameRef.current) && (givenNameRef && givenNameRef.current)) {
            let getFamilyName = familyNameRef.current.value;
            let getGivenName = givenNameRef.current.value;

            const fullName = getFamilyName + getGivenName;

            window.localStorage.setItem('name', (fullName));
            
            setName({
                familyName: getFamilyName,
                givenName: getGivenName
            })
        }
    }

    return (
        <>
        <h1>My Name</h1>
            <input type="text" name="familyName" placeholder="성" ref={familyNameRef} />
            <input type="text" name="givenName" placeholder="이름" ref={givenNameRef} />
            <button onClick={confirm}>click</button>
            <p>{`name : ${window.localStorage.getItem('name')}`}</p>
            <p>새로고침 해도 값은 남아있습니다.</p>
        </>
    )
}


export default CustomList;