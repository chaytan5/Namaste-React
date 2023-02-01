export const filterData = (restaurants, searchText) => {
	const data = restaurants.filter((restaurant) =>
		restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
	);
	return data;
};
