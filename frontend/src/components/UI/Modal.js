import { useEffect, useRef } from 'react'
import {createPortal} from 'react-dom'
export default function Modal ({children, className = '', open}){
    const dialog = useRef(null)

    useEffect(() => {
        const modal = dialog.current
        if(open){
            modal.showModal()
        }
        return () => modal.close()
    }, [open])
    return createPortal(<dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>, document.getElementById('modal'))
}