function solve(str1) {
	// let str_arr = str1.split("");
	let freq = {};
	let freq_ch = [];
	for (i = 0; i < str1.length; i++) {
		let ch = str1.charAt(i);
		if (freq[ch]) {
			freq[ch]++;
		} else {
			freq[ch] = 1
		}
		//freq_ch.push(freq[ch]);
	}
	return Object.values(freq);
}

let res = solve("arfardarb");
console.log(res);