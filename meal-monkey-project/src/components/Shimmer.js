const n = 12;

function Shimmer() {
	return [...Array(n)].map((el, idx) => {
		return <ShimmerCard key={idx}></ShimmerCard>;
	});
}

const ShimmerCard = () => {
	return <div className="shimmer-card"></div>;
};

export default Shimmer;
