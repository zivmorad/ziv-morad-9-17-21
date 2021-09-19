import axios from 'axios';

export const accuweather = axios.create({
	baseURL: 'http://dataservice.accuweather.com',
	params: {
		apikey: 'eLG4CrQCOGDxRAAe61oAK1v3FvlpPvfA',
	},
});

// v44g2voakObqbIJP3i3pSsoouLFXELxJ
// kvSw3yjdeGvnXU76NhhxEt2YBovLGeLh
//eLG4CrQCOGDxRAAe61oAK1v3FvlpPvfA
// 0H4RNCzLTuBcXWBJNuKwN2yagWgDghN3
