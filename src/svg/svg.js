export const SVGstar=(props) => {
  return (
    <svg onClick={props.handleFavorite} xmlns="http://www.w3.org/2000/svg" width="10" height="10" style={props.style} viewBox="0 0 23.28 26.85"><g id="a"/><g id="b"><g id="c"><polygon class="d" points="16.35 5.29 23.28 6.73 21.04 13.44 23.25 20.16 16.32 21.57 11.62 26.85 6.93 21.56 0 20.12 2.24 13.41 .02 6.69 6.95 5.28 11.66 0 16.35 5.29"/></g></g></svg>
    
  )
}
export const SVGpen=(props) => {
	const {width, height,  fill} = props

	return (
	<svg xmlns="http://www.w3.org/2000/svg" width={width || "16"} height={height || "16"} fill={fill || "white"} class="bi bi-pencil-square" viewBox="0 0 16 16">
		<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
		<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
	</svg>
  )
}