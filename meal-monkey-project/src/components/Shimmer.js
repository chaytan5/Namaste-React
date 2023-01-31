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
		<div className="shimmer-card">
			<div className="shimmer shimmer-img"></div>
			<div className="shimmer shimmer-h1"></div>
			<div className="shimmer shimmer-cuisines"></div>
			<div className="shimmer shimmer-rating"></div>
		</div>
	);
};

export default Shimmer;
