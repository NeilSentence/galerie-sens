import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageTitle = (props) => {
	const navigate = useNavigate()
	return (<h1 className={props.classes} onClick={() => navigate(props.href)}>{props.text}</h1>)
}

export default PageTitle