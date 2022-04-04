export function compareTwoArrays(arr1, arr2) {
	try {
		for (let r of arr2) {
			if (arr1.filter((res) => res.id === r.id).length === 0) {
				arr1.push(r);
			}
		}
		return arr1;
	} catch (error) {
		console.log(error);
	}
}
