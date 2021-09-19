import axios from 'axios';

export const accuweather = axios.create({
	baseURL: 'https://dataservice.accuweather.com',
	params: {
		apikey: '6cAQHMaddjbwcUNmq7eKD0zXBK216Lvn',
	},
});
// 6cAQHMaddjbwcUNmq7eKD0zXBK216Lvn
// v44g2voakObqbIJP3i3pSsoouLFXELxJ
// kvSw3yjdeGvnXU76NhhxEt2YBovLGeLh
//eLG4CrQCOGDxRAAe61oAK1v3FvlpPvfA
// 0H4RNCzLTuBcXWBJNuKwN2yagWgDghN3
