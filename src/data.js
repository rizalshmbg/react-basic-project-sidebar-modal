import React from 'react'
import {
	FaFacebook,
	FaLinkedin,
	FaTwitter,
	FaInstagram,
	FaGithub,
	FaHome,
	FaUserFriends,
	FaFolderOpen,
	FaCalendarAlt,
	FaWpforms,
} from 'react-icons/fa'

export const links = [
	{
		id: 1,
		url: '/',
		text: 'home',
		icon: <FaHome />,
	},
	{
		id: 2,
		url: '/team',
		text: 'team',
		icon: <FaUserFriends />,
	},
	{
		id: 3,
		url: '/projects',
		text: 'projects',
		icon: <FaFolderOpen />,
	},
	{
		id: 4,
		url: '/calendar',
		text: 'calendar',
		icon: <FaCalendarAlt />,
	},
	{
		id: 5,
		url: '/documents',
		text: 'documents',
		icon: <FaWpforms />,
	},
]

export const social = [
	{
		id: 1,
		url: 'https://www.facebook.com/rizal.shmbg',
		icon: <FaFacebook />,
	},
	{
		id: 2,
		url: 'https://www.twitter.com/rizal_shmbg',
		icon: <FaTwitter />,
	},
	{
		id: 3,
		url: 'https://www.linkedin.com/in/rizalsihombing',
		icon: <FaLinkedin />,
	},
	{
		id: 4,
		url: 'https://www.instagram.com/rizal.shmbg',
		icon: <FaInstagram />,
	},
	{
		id: 5,
		url: 'https://github.com/rizalshmbg',
		icon: <FaGithub />,
	},
]
