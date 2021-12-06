import React, {useState} from 'react';

export type LessonType = {
    title: string
}
export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    // lessons: Array<{title:string}>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food:Array<string>
    car:{model:string}
}

function useDimychState(m:string) {
    return [m, function (){}]
}

export const ManComponent: React.FC<PropsType> = ({title,man, ...props}) => {
    //const {title, man, ...restProps} = props
    // const {title} = props
    // const {name} = props.man
    const [message, setMessage] = useState('Hello')

    return(
    <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.car.model}
            {man.name}
        </div>
    </div>
        )
}