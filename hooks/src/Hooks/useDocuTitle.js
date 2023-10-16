import React,{useEffect} from 'react'

function useDocuTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    },[count])
}

export default useDocuTitle
