'use client'

import { useEffect, useState} from 'react'

export default function Page() {
    const [data, setData] = useState({ name : '初期値'})

    useEffect(()=> {
        console.log('デバッグログ:')
        const change = {name : '変更'}
        setData(change)
    }, [])

    return <h1>next Helloo, {data.name}!</h1>
}