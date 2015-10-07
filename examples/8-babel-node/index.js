function stringifyObjectKeys(obj) {
	return Object.keys(obj).reduce((l,c)=>`${l} ${c}: ${obj[c]}\n`);
}


console.log(`Your environment looks like:

	${stringifyObjectKeys(process.env)}

`);
