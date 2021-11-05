const { selection } = figma.currentPage;

selection.forEach((node) => {
	const minX = node[0].x
	const minY = node[0].y
	const maxX = node[0].width
	const maxY = node[0].height
}

const makeFrame = figma.createFrame()
makeFrame.append(selection)

for (let i = 0; i <= selection.length; i++) {
	if (i.y <= maxY) {
		if (i.x <= minX) {
			i.counterAxisLayoutAlign = "MIN"
			makeFrame.layoutMode = "VERTICAL"
		}
		if (i.x <= minX && <= maxX) {
			i.counterAxisLayoutAlign = "CENTRE"
			makeFrame.layoutMode = "VERTICAL"
		}
		if (i.x >= minX) {
			i.counterAxisLayoutAlign = "MAX"
			makeFrame.layoutMode = "VERTICAL"
		}
	} else if (i.x <= maxX) {
		if (i.y <= minY) {
			i.counterAxisLayoutAlign = "MIN"
			makeFrame.layoutMode = "HORIZONTAL"
		}
		if (i.y <= minY && <= maxY) {
			i.counterAxisLayoutAlign = "CENTRE"
			makeFrame.layoutMode = "HORIZONTAL"
		}
		if (i.y >= minY) {
			i.counterAxisLayoutAlign = "MAX"
			makeFrame.layoutMode = "HORIZONTAL"
		}
	}
}