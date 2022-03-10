export default function box({value, id}) {
	return (
		<div id={id} className="w-[20vw] h-[20vh] rounded flex justify-center items-center">
			<h1 className="text-6xl text-white py-2">{value ? value.toUpperCase() : ""}</h1>
		</div>
	);
}