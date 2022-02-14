export const anagram = (array: string[]): string[][] => {
	let ans: string[][] = [];
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		const text = array[i].split('').sort((a, b) => a > b ? 1 : b > a ? -1 : 0).join('').trim();
		newArray.push(array[i])
		for (let j = i + 1; j < array.length; j++) {
			const nextText = array[j].split('').sort((a, b) => a > b ? 1 : b > a ? -1 : 0).join('').trim();
			if (text === nextText) {
				newArray.push(array[j]);
				array.splice(j, 1);
				j--;
			}
		}
		ans.push(newArray);
		newArray = [];
	}
	return ans;
}