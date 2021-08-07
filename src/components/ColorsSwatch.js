import React from 'react'


const $colors = [
	['blue', 'blue-50', 'blue-100','blue-200', 'blue-300', 'blue-400', 'blue-500', 'blue-600', 'blue-700', 'blue-800', 'blue-900'],
	['cerulean', 'cerulean-50', 'cerulean-100','cerulean-200', 'cerulean-300', 'cerulean-400', 'cerulean-500', 'cerulean-600', 'cerulean-700', 'cerulean-800', 'cerulean-900'],
	['red', 'red-50', 'red-100','red-200', 'red-300', 'red-400', 'red-500', 'red-600', 'red-700', 'red-800', 'red-900'],
	['pink', 'pink-50', 'pink-100','pink-200', 'pink-300', 'pink-400', 'pink-500', 'pink-600', 'pink-700', 'pink-800', 'pink-900'],
	['purple', 'purple-50', 'purple-100','purple-200', 'purple-300', 'purple-400', 'purple-500', 'purple-600', 'purple-700', 'purple-800', 'purple-900'],
	['gray', 'gray-50', 'gray-100','gray-200', 'gray-300', 'gray-400', 'gray-500', 'gray-600', 'gray-700', 'gray-800', 'gray-900']
]

const ColorsSwatch = () => {
	return (
		<>
			{
				$colors.map((set, index) => (
					<div style={{display: 'flex'}} key={index.toString()}>
						{
							set.map(color => <div key={color} style={{height: '60px', width: '60px', borderRadius: '5px', border: 'solid 3px' +
									' #fff', boxShadow: 'rgba(0,0,0,0.25) 0 3px 10px' , margin: 10}} className={`bg--${color}`} />)
						}
					</div>
				))
			}
		</>
	)
}

export default ColorsSwatch
