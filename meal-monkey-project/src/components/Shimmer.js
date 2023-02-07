const n = 12;

function Shimmer() {
	return Array(n)
		.fill("")
		.map((el, idx) => {
			return <ShimmerCard key={idx}></ShimmerCard>;
		});
}

const ShimmerCard = () => {
	return (
		<div className="w-[200px] h-[250px] border-white border-2 m-5 p-2 ">
			<div className="w-[100%] h-[110px] bg-gray-200 rounded-md mb-3"></div>
			<div className="w-[90%] h-[10px] bg-gray-200 rounded-md mb-3 ml-0.5"></div>
			<div className="w-[70%] h-[10px] bg-gray-200 rounded-md mb-3 ml-0.5"></div>
		</div>
	);
};

export default Shimmer;
