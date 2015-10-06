import add from './add';


export default function(...args) {
	return add(...args) / args.length;
}
