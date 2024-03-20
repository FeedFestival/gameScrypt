interface FoodDetails {
	name: string;
	ingredients: {
		name: string;
		quantity: string;
	}[];
	nutrition: {
		name: string;
		quantity: string;
	}[];
}

export const FOOD_DETAILS: FoodDetails[] = [
	{
		name: 'CIORBA DE PUI A LA GREC',
		ingredients: [
			{
				name: 'apa',
				quantity: '200 ml',
			},
			{
				name: 'smantana',
				quantity: '70 ml',
			},
			{
				name: 'galbenus ou',
				quantity: '10 g',
			},
			{
				name: 'morcovi',
				quantity: '10 g',
			},
			{
				name: 'ceapa',
				quantity: '10 g',
			},
			{
				name: 'telina',
				quantity: '10 g',
			},
			{
				name: 'ardei',
				quantity: '10 g',
			},
			{
				name: 'pastarnac',
				quantity: '10 g',
			},
			{
				name: 'cartofi',
				quantity: '10 g',
			},
			{
				name: 'carne pui',
				quantity: '50 g',
			},
			{
				name: 'sare',
				quantity: '3 g',
			},
			{
				name: 'piper',
				quantity: '1 g',
			},
			{
				name: 'zeama lamaie',
				quantity: '2 ml',
			},
		],
		nutrition: [
			{
				name: 'valoare energetica',
				quantity: '378 kcal',
			},
			{
				name: 'proteine',
				quantity: '50.7 g',
			},
			{
				name: 'lipide',
				quantity: '20.1 g',
			},
			{
				name: 'carbohidrati',
				quantity: '39.9 g',
			},
			{
				name: 'sare',
				quantity: '3 g',
			},
			{
				name: 'zaharuri',
				quantity: '0 g',
			},
		],
	},
	{
		name: 'CIORBA DE VACUTA',
		ingredients: [
			{
				name: 'apa',
				quantity: '200 ml',
			},
			{
				name: 'carne vacuta',
				quantity: '50 g',
			},
			{
				name: 'bulion',
				quantity: '30 ml',
			},
			{
				name: 'morcovi',
				quantity: '10 g',
			},
			{
				name: 'ceapa',
				quantity: '10 g',
			},
			{
				name: 'telina',
				quantity: '10 g',
			},
			{
				name: 'ardei',
				quantity: '10 g',
			},
			{
				name: 'pastarnac',
				quantity: '10 g',
			},
			{
				name: 'cartofi',
				quantity: '10 g',
			},
			{
				name: 'dovlecel',
				quantity: '5 g',
			},
			{
				name: 'mazare',
				quantity: '5 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '2 g',
			},
			{
				name: 'zeama lamaie',
				quantity: '2 g',
			},
		],
		nutrition: [
			{
				name: 'valoare energetica',
				quantity: '900 kcal',
			},
			{
				name: 'proteine',
				quantity: '10.8 g',
			},
			{
				name: 'lipide',
				quantity: '19 g',
			},
			{
				name: 'carbohidrati',
				quantity: '13.2 g',
			},
			{
				name: 'grasimi',
				quantity: '13.2 g',
			},
			{
				name: 'fibre',
				quantity: '2 g',
			},
			{
				name: 'sare',
				quantity: '3 g',
			},
		],
	},
	{
		name: 'CIORBA DE LEGUME',
		ingredients: [
			{
				name: 'apa',
				quantity: '200 ml',
			},
			{
				name: 'bulion',
				quantity: '30 ml',
			},
			{
				name: 'cartofi',
				quantity: '20 g',
			},
			{
				name: 'morcovi',
				quantity: '10 g',
			},
			{
				name: 'ardei',
				quantity: '10 g',
			},
			{
				name: 'ceapa',
				quantity: '10 g',
			},
			{
				name: 'telina',
				quantity: '10 g',
			},
			{
				name: 'pastarnac',
				quantity: '10 g',
			},
			{
				name: 'docvlecel',
				quantity: '10 g',
			},
			{
				name: 'mazare',
				quantity: '5 g',
			},
			{
				name: 'zeama lamaie',
				quantity: '2 ml',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '1 g',
			},
		],
		nutrition: [
			{
				name: 'valoare energetica',
				quantity: '82 kcal',
			},
			{
				name: 'proteine',
				quantity: '1.2 g',
			},
			{
				name: 'lipide',
				quantity: '0 g',
			},
			{
				name: 'glucide',
				quantity: '16.8 g',
			},
			{
				name: 'grasimi',
				quantity: '0.8 g',
			},
			{
				name: 'sare',
				quantity: '3.2 g',
			},
		],
	},
	{
		name: 'BRUSCHETE POMODORO',
		ingredients: [
			{
				name: 'paine alba prajita',
				quantity: '60 g',
			},
			{
				name: 'rosie',
				quantity: '50 g',
			},
			{
				name: 'ulei de masline',
				quantity: '15 ml',
			},
			{
				name: 'gran moravia',
				quantity: '10 g',
			},
			{
				name: 'usturoi',
				quantity: '3 g',
			},
			{
				name: 'patrunjel',
				quantity: '1 g',
			},
			{
				name: 'sare',
				quantity: '1 g',
			},
			{
				name: 'piper',
				quantity: '1 g',
			},
		],
		nutrition: [
			{
				name: 'valoare energetica',
				quantity: '150 kcal',
			},
			{
				name: 'grasimi',
				quantity: '6 g',
			},
			{
				name: 'glucide',
				quantity: '19.3 g',
			},
			{
				name: 'zaharuri',
				quantity: '0.78 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '2.47 g',
			},
			{
				name: 'proteine',
				quantity: '9.05 g',
			},
			{
				name: 'sare',
				quantity: '1 g',
			},
		],
	},
	{
		name: 'SALATA DE VINETE CU CEAPA SI PAINE PRAJITA',
		ingredients: [
			{
				name: 'vinete coapte',
				quantity: '150 g',
			},
			{
				name: 'paine alba',
				quantity: '60 g',
			},
			{
				name: 'ceapa',
				quantity: '50 g',
			},
			{
				name: 'ulei floarea soarelui',
				quantity: '20 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
		],
		nutrition: [
			{
				name: 'valoare energetica',
				quantity: '270.6 kcal',
			},
			{
				name: 'grasimi',
				quantity: '20.69 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '2.56 g',
			},
			{
				name: 'glucide',
				quantity: '13.17 g',
			},
			{
				name: 'zaharuri',
				quantity: '4.9 g',
			},
			{
				name: 'proteine',
				quantity: '4.37 g',
			},
			{
				name: 'sare',
				quantity: '2.09 g',
			},
		],
	},
	{
		name: 'SALATA ICRE DE CRAP FACUTA IN CASA',
		ingredients: [
			{
				name: 'ulei floarea soarelui',
				quantity: '70 g',
			},
			{
				name: 'icre crap',
				quantity: '25 g',
			},
			{
				name: 'ceapa rosie',
				quantity: '50 g',
			},
			{
				name: 'zeama lamaie',
				quantity: '3 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'paine alba prajita',
				quantity: '60 g',
			},
		],
		nutrition: [
			{
				name: 'valoare energetica',
				quantity: '745.7 kcal',
			},
			{
				name: 'grasimi',
				quantity: '66.77 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '7.34 g',
			},
			{
				name: 'glucide',
				quantity: '22.65 g',
			},
			{
				name: 'zaharuri',
				quantity: '1.28 g',
			},
			{
				name: 'proteine',
				quantity: '11.85 g',
			},
			{
				name: 'sare',
				quantity: '2.65 g',
			},
		],
	},
	{
		name: 'SPAGHETE CARBONARA',
		ingredients: [
			{
				name: 'paste fainoase cu ou',
				quantity: '100 g',
			},
			{
				name: 'gran cucina crema pentru gatit (apa, ulei de floarea soarelui17%, zer pudra indulcit, amidon modificat de porumb e1442, maltodextrina, stabilizatori: guma de guar e412, guma de caruba e410, emulsifiant: lecitina de soia e322, aroma naturala)',
				quantity: '100 g',
			},
			{
				name: 'bacon',
				quantity: '80 g',
			},
			{
				name: 'gran moravia (branza dura)',
				quantity: '40 g',
			},
			{
				name: 'vin alb demisec',
				quantity: '30 g',
			},
			{
				name: 'galbenus de ou',
				quantity: '20 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '1 g',
			},
		],
		nutrition: [
			{
				name: 'valoare energetica',
				quantity: '1253 kcal',
			},
			{
				name: 'grasimi',
				quantity: '92.3 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '41.96 g',
			},
			{
				name: 'glucide',
				quantity: '57.22 g',
			},
			{
				name: 'zaharuri',
				quantity: '47.16 g',
			},
			{
				name: 'proteine',
				quantity: '42.2 g',
			},
			{
				name: 'sare',
				quantity: '2.92 g',
			},
		],
	},
	{
		name: 'PENNE PUI CIUPERCI',
		ingredients: [
			{
				name: 'paste fainoase',
				quantity: '100 g',
			},
			{
				name: 'piept de pui dezosat',
				quantity: '90 g',
			},
			{
				name: 'ciuperci champignon',
				quantity: '80 g',
			},
			{
				name: 'suc de rosii',
				quantity: '80 g',
			},
			{
				name: 'gran cucina crema pentru gatit (apa, ulei de floarea soarelui17%, zer pudra indulcit, amidon modificat de porumb e1442, maltodextrina, stabilizatori: guma de guar e412, guma de caruba e410, emulsifiant : lecitina de soia e322, aroma naturala)',
				quantity: '60 g',
			},
			{
				name: 'gran moravia branza dura',
				quantity: '20 g',
			},
			{
				name: 'vin alb demisec',
				quantity: '20 g',
			},
			{
				name: 'ulei de floarea soarelui',
				quantity: '2 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '2 g',
			},
		],
		nutrition: [
			{
				name: 'valoare energetica',
				quantity: '685.63 kcal',
			},
			{
				name: 'grasimi',
				quantity: '31.61 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '17.44 g',
			},
			{
				name: 'glucide',
				quantity: '69.11 g',
			},
			{
				name: 'zaharuri',
				quantity: '55.o9 g',
			},
			{
				name: 'proteine',
				quantity: '42,96 g',
			},
			{
				name: 'sare',
				quantity: '2.78 g',
			},
		],
	},
	{
		name: 'PENNE QUATRO FORMAGI',
		ingredients: [
			{
				name: 'paste fainoase',
				quantity: '100 g',
			},
			{
				name: 'gran cucina crema pentru gatit',
				quantity: '100 g',
			},
			{
				name: 'branza emmentaler',
				quantity: '40 g',
			},
			{
				name: 'branza cu mucegai albastru',
				quantity: '40 g',
			},
			{
				name: 'gorbonzola dop',
				quantity: '40 g',
			},
			{
				name: 'vin alb demisec',
				quantity: '20 g',
			},
			{
				name: 'apa',
				quantity: '8 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '2 g',
			},
		],
		nutrition: [
			{
				name: 'valoare energetica',
				quantity: '1196 kcal',
			},
			{
				name: 'grasimi',
				quantity: '85.57 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '51.18 g',
			},
			{
				name: 'glucide',
				quantity: '68.31 g',
			},
			{
				name: 'zaharuri',
				quantity: '58.16 g',
			},
			{
				name: 'proteine',
				quantity: '56.19 g',
			},
			{
				name: 'sare',
				quantity: '5.15 g',
			},
		],
	},
	{
		name: 'SPAGHETE CU FRUCTE DE MARE',
		ingredients: [
			{
				name: 'paste fainoase',
				quantity: '200 g',
			},
			{
				name: 'calamar inele congelate',
				quantity: '60 g',
			},
			{
				name: 'concentrat de rosii',
				quantity: '60 g',
			},
			{
				name: 'midii congelate',
				quantity: '50 g',
			},
			{
				name: 'creveti decorticatii congelati',
				quantity: '50 g',
			},
			{
				name: 'rosii cherry',
				quantity: '20 g',
			},
			{
				name: 'vin alb demisec',
				quantity: '20 g',
			},
			{
				name: 'usturoi',
				quantity: '2 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '2 g',
			},
			{
				name: 'patrunjel',
				quantity: '2 g',
			},
			{
				name: 'ulei de masline',
				quantity: '2 g',
			},
		],
		nutrition: [
			{
				name: 'valoare energetica',
				quantity: '741.09 kcal',
			},
			{
				name: 'grasimi',
				quantity: '18.27 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '7.03 g',
			},
			{
				name: 'glucide',
				quantity: '84.59 g',
			},
			{
				name: 'zaharuri',
				quantity: '17.64 g',
			},
			{
				name: 'proteine',
				quantity: '56.27 g',
			},
			{
				name: 'sare',
				quantity: '5.23 g',
			},
		],
	},
	{
		name: 'SPAGHETE AGLIO OLIO PEPERONCINO POMODORI',
		ingredients: [
			{
				name: 'paste fainoase',
				quantity: '200 g',
			},
			{
				name: 'rosie',
				quantity: '50 g',
			},
			{
				name: 'ulei de masline',
				quantity: '20 g',
			},
			{
				name: 'gran moravia branza dura',
				quantity: '10 g',
			},
			{
				name: 'usturoi',
				quantity: '2 g',
			},
			{
				name: 'patrunjel',
				quantity: '2 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '2 g',
			},
			{
				name: 'peperoncino',
				quantity: '1 g',
			},
		],
		nutrition: [
			{
				name: 'valoare energetica',
				quantity: '628 kcal',
			},
			{
				name: 'grasimi',
				quantity: '17.6 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '4.2 g',
			},
			{
				name: 'glucide',
				quantity: '10.12 g',
			},
			{
				name: 'zaharuri',
				quantity: '12.3 g',
			},
			{
				name: 'proteine',
				quantity: '23.2 g',
			},
			{
				name: 'sare',
				quantity: '3 g',
			},
			{
				name: 'fibre',
				quantity: '15.2 g',
			},
		],
	},
	{
		name: 'SPAGHETE AGLIO OLIO PEPERONCINO E GAMBERI',
		ingredients: [
			{
				name: 'paste fainoase',
				quantity: '200 g',
			},
			{
				name: 'creveti congelati',
				quantity: '70 g',
			},
			{
				name: 'rosie',
				quantity: '50 g',
			},
			{
				name: 'ulei de masline',
				quantity: '20 g',
			},
			{
				name: 'gran moravia branza dura',
				quantity: '10 g',
			},
			{
				name: 'usturoi',
				quantity: '2 g',
			},
			{
				name: 'patrunjel',
				quantity: '2 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '2 g',
			},
			{
				name: 'peperoncino',
				quantity: '1 g',
			},
		],
		nutrition: [
			{
				name: 'valoare energetica',
				quantity: '823 kcal',
			},
			{
				name: 'grasimi',
				quantity: '17.6 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '5.2 g',
			},
			{
				name: 'glucide',
				quantity: '12.9 g',
			},
			{
				name: 'zaharuri',
				quantity: '12.3 g',
			},
			{
				name: 'proteine',
				quantity: '23.2 g',
			},
			{
				name: 'sare',
				quantity: '3 g',
			},
			{
				name: 'fibre',
				quantity: '15.2 g',
			},
		],
	},
	{
		name: 'SALATA CAESAR',
		ingredients: [
			{
				name: 'piept de pui dezosat',
				quantity: '150 g',
			},
			{
				name: 'salata iceberg',
				quantity: '100 g',
			},
			{
				name: 'maioneza',
				quantity: '40 g',
			},
			{
				name: 'parmezan',
				quantity: '50 g',
			},
			{
				name: 'usturoi',
				quantity: '3 g',
			},
			{
				name: 'mustar',
				quantity: '30 g',
			},
			{
				name: 'crutoane din paine alba',
				quantity: '20 g',
			},
			{
				name: 'anchoa in ulei vegetal',
				quantity: '20 g',
			},
		],
		nutrition: [
			{
				name: 'valoare energetica',
				quantity: '1045.64 kcal',
			},
			{
				name: 'grasimi',
				quantity: '51.33 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '13.78 g',
			},
			{
				name: 'glucide',
				quantity: '78.31 g',
			},
			{
				name: 'zaharuri',
				quantity: '50.62 g',
			},
			{
				name: 'proteine',
				quantity: '66.22 g',
			},
			{
				name: 'sare',
				quantity: '11.05 g',
			},
		],
	},
	{
		name: 'Salata Greceasca',
		ingredients: [
			{
				name: 'rosii',
				quantity: '60 g',
			},
			{
				name: 'ardei gras',
				quantity: '60 g',
			},
			{
				name: 'castraveti Fabio',
				quantity: '50 g',
			},
			{
				name: 'branza feta',
				quantity: '50 g',
			},
			{
				name: 'ceapa',
				quantity: '15 g',
			},
			{
				name: 'ulei de masline',
				quantity: '10 g',
			},
			{
				name: 'oregano',
				quantity: '5 g',
			},
		],
		nutrition: [
			{
				name: 'valoare energetica',
				quantity: '135.76 kcal',
			},
			{
				name: 'grasimi',
				quantity: '5.27 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '1.02 g',
			},
			{
				name: 'glucide',
				quantity: '5.56 g',
			},
			{
				name: 'zaharuri',
				quantity: '2.04 g',
			},
			{
				name: 'proteine',
				quantity: '16.57 g',
			},
			{
				name: 'sare',
				quantity: '0.75 g',
			},
		],
	},
	{
		name: 'SALATA FRUCTE DE MARE',
		ingredients: [
			{
				name: 'mix salata',
				quantity: '130 g',
			},
			{
				name: 'creveti congelati',
				quantity: '60 g',
			},
			{
				name: 'inele de calamar congelate',
				quantity: '60 g',
			},
			{
				name: 'midii congelate',
				quantity: '60 g',
			},
			{
				name: 'patrunjel',
				quantity: '2 g',
			},
			{
				name: 'vin alb demisec',
				quantity: '20 ml',
			},
			{
				name: 'ulei de masline',
				quantity: '10 ml',
			},
			{
				name: 'zeama de lamaie',
				quantity: '5 g',
			},
			{
				name: 'usturoi',
				quantity: '3 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '2 g',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '135.76 kcal',
			},
			{
				name: 'grasimi',
				quantity: '5.26 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '1.02 g',
			},
			{
				name: 'glucide',
				quantity: '5.56 g',
			},
			{
				name: 'zaharuri',
				quantity: '2.04 g',
			},
			{
				name: 'proteine',
				quantity: '16.57 g',
			},
			{
				name: 'sare',
				quantity: '2.4 g',
			},
		],
	},
	{
		name: 'SALATA CRISPY',
		ingredients: [
			{
				name: 'mix salata',
				quantity: '80 g',
			},
			{
				name: 'piept de pui dezosat',
				quantity: '70 g',
			},
			{
				name: 'rosii',
				quantity: '30 g',
			},
			{
				name: 'castraveti Fabio',
				quantity: '35 g',
			},
			{
				name: 'ardei gras',
				quantity: '40 g',
			},
			{
				name: 'oua de gaina',
				quantity: '30 g',
			},
			{
				name: 'maioneza',
				quantity: '30 g',
			},
			{
				name: 'capere',
				quantity: '5 g',
			},
			{
				name: 'gran Moravia',
				quantity: '5 g',
			},
			{
				name: 'pesmet',
				quantity: '15 g',
			},
			{
				name: 'fulgi porumb',
				quantity: '10 g',
			},
			{
				name: 'ceapa',
				quantity: '30 g',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '579.46 kcal',
			},
			{
				name: 'grasimi',
				quantity: '35.08 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '6.17 g',
			},
			{
				name: 'glucide',
				quantity: '40.47 g',
			},
			{
				name: 'zaharuri',
				quantity: '14.91 g',
			},
			{
				name: 'proteine',
				quantity: '26.37 g',
			},
			{
				name: 'sare',
				quantity: '6.85 g',
			},
		],
	},
	{
		name: 'PIEPT DE PUI LA GRATAR CU CARTOFI PRAJITI',
		ingredients: [
			{
				name: 'piept de pui dezosat',
				quantity: '250 g',
			},
			{
				name: 'cartofi congelati',
				quantity: '170 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '2 g',
			},
			{
				name: 'ulei de floarea soarelui',
				quantity: '2 g',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '517,85 kcal',
			},
			{
				name: 'grasimi',
				quantity: '14,35 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '4,9 g',
			},
			{
				name: 'glucide',
				quantity: '3,4 g',
			},
			{
				name: 'zaharuri',
				quantity: '1,77 g',
			},
			{
				name: 'proteine',
				quantity: '61,52 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
		],
	},
	{
		name: 'MENIU CRISPY',
		ingredients: [
			{
				name: 'piept de pui dezosat',
				quantity: '150 g',
			},
			{
				name: 'cartofi congelati',
				quantity: '170 g',
			},
			{
				name: 'pesmet panko',
				quantity: '20 g',
			},
			{
				name: 'fulgi de porumb',
				quantity: '20 g',
			},
			{
				name: 'ou',
				quantity: '30 g',
			},
			{
				name: 'sos calypso',
				quantity:
					'50 gr (maioneza 30gr(Contine oua, mustar conservanti E202-sorbat de potasiu), concentrate suc de rosii 10 gr, sweet chili )',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '223,4 kcal',
			},
			{
				name: 'grasimi',
				quantity: '13,1 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '2,05 g',
			},
			{
				name: 'glucide',
				quantity: '8,18 g',
			},
			{
				name: 'zaharuri',
				quantity: '1,38 g',
			},
			{
				name: 'proteine',
				quantity: '15,24 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
		],
	},
	{
		name: 'SNITEL DE PUI CU CARTOFI PRAJITI',
		ingredients: [
			{
				name: 'piept de pui dezosat',
				quantity: '150 g',
			},
			{
				name: 'cartofi congelati',
				quantity: '170 g',
			},
			{
				name: 'pesmet panko',
				quantity: '20 g',
			},
			{
				name: 'fulgi de porumb',
				quantity: '20 g',
			},
			{
				name: 'ou',
				quantity: '30 g',
			},
			{
				name: 'sos calypso',
				quantity: '30 g',
			},
			{
				name: 'maioneza',
				quantity:
					'30 gr (Contine oua, mustar conservanti E202-sorbat de potasiu)',
			},
			{
				name: 'concentrate suc de rosii',
				quantity: '10 g',
			},
			{
				name: 'sweet chili',
				quantity: '',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '243,4 kcal',
			},
			{
				name: 'grasimi',
				quantity: '16,1 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '2,75 g',
			},
			{
				name: 'glucide',
				quantity: '10,18 g',
			},
			{
				name: 'zaharuri',
				quantity: '2,38 g',
			},
			{
				name: 'proteine',
				quantity: '17,24 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
		],
	},
	{
		name: 'POLLO GORGONZOLA CU CARTOFI PRAJITI',
		ingredients: [
			{
				name: 'piept de pui dezosat',
				quantity: '150 g',
			},
			{
				name: 'cartofi prajiti',
				quantity: '170 g',
			},
			{
				name: 'gran cucina crema pentru gatit (apa, ulei de floarea soarelui17%, zer pudra indulcit, amidon modificat de porumb e1442, maltodextrina, stabilizatori: guma de guar e412, guma de caruba e410, emulsifiant : lecitina de soia e322, aroma naturala)',
				quantity: '100 g',
			},
			{
				name: 'branza emmentaler',
				quantity: '40 g',
			},
			{
				name: 'branza cu mucegai albastru',
				quantity: '40 g',
			},
			{
				name: 'gorbonzola dop',
				quantity: '40 g',
			},
			{
				name: 'vin alb demisec',
				quantity: '20 g',
			},
			{
				name: 'apa',
				quantity: '8 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '2 g',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '495,44 kcal',
			},
			{
				name: 'grasimi',
				quantity: '29,62 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '17 g',
			},
			{
				name: 'glucide',
				quantity: '2,32 g',
			},
			{
				name: 'zaharuri',
				quantity: '1,28 g',
			},
			{
				name: 'proteine',
				quantity: '53,07 g',
			},
			{
				name: 'sare',
				quantity: '2,57 g',
			},
		],
	},
	{
		name: 'SCALOPINA CU CARTOFI PRAJITI',
		ingredients: [
			{
				name: 'piept de pui',
				quantity: '150 g',
			},
			{
				name: 'cartofi congelati',
				quantity: '170 g',
			},
			{
				name: 'bacon',
				quantity: '40 g',
			},
			{
				name: 'ciuperci',
				quantity: '50 g',
			},
			{
				name: 'gran cucina crema pentru gatit ( apa, ulei de floarea soarelui17%, zer pudra indulcit, amidon modificat de porumb e1442, maltodextrina, stabilizatori: guma de guar e412, guma de caruba e410, emulsifiant : lecitina de soia e322, aroma naturala)',
				quantity: '100 g',
			},
			{
				name: 'gran Moravia branza dura',
				quantity: '30 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '2 g',
			},
			{
				name: 'vin alb',
				quantity: '20 g',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '650,50 kcal',
			},
			{
				name: 'grasimi',
				quantity: '32,4 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '18,3 g',
			},
			{
				name: 'glucide',
				quantity: '4,2 g',
			},
			{
				name: 'zaharuri',
				quantity: '1,32 g',
			},
			{
				name: 'proteine',
				quantity: '57,3 g',
			},
			{
				name: 'sare',
				quantity: '3 g',
			},
		],
	},
	{
		name: 'SNITEL DE PUI CU SOS CALYPSO',
		ingredients: [
			{
				name: 'piept de pui',
				quantity: '150 g',
			},
			{
				name: 'pesmet panko',
				quantity: '20 g',
			},
			{
				name: 'fulgi de porumb',
				quantity: '20 g',
			},
			{
				name: 'ou de gaina',
				quantity: '30 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '2 g',
			},
			{
				name: 'calypso',
				quantity:
					'50 gr gr (maioneza 30gr(Contine oua, mustar conservanti  E202-sorbat de potasiu), concentrate suc de rosii 10 gr, sweet chili )',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '213,4 kcal',
			},
			{
				name: 'grasimi',
				quantity: '11,1 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '1,45 g',
			},
			{
				name: 'glucide',
				quantity: '6,18 g',
			},
			{
				name: 'zaharuri',
				quantity: '1,01 g',
			},
			{
				name: 'proteine',
				quantity: '15,24 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
		],
	},
	{
		name: 'CHIFLA',
		ingredients: [
			{
				name: 'Apa',
				quantity: '',
			},
			{
				name: 'faina de grau',
				quantity: '',
			},
			{
				name: 'drojdie',
				quantity: '',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '90 kcal',
			},
			{
				name: 'grasimi',
				quantity: '5.25 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '0.5 g',
			},
			{
				name: 'glucide',
				quantity: '25 g',
			},
			{
				name: 'zaharuri',
				quantity: '2.3 g',
			},
			{
				name: 'proteine',
				quantity: '4.5 g',
			},
			{
				name: 'sare',
				quantity: '5 g',
			},
		],
	},
	{
		name: 'SALATA ROSII CU CASTRAVETI',
		ingredients: [
			{ name: 'rosie', quantity: '100 g' },
			{ name: 'castraveti', quantity: '50 g' },
			{ name: 'ulei de floarea soarelui', quantity: '3 g' },
			{ name: 'sare', quantity: '2 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '90.9 kcal' },
			{ name: 'grasimi', quantity: '50.7 g' },
			{ name: 'acizi grasi saturati', quantity: '0.5 g' },
			{ name: 'glucide', quantity: '11.3 g' },
			{ name: 'zaharuri', quantity: '2.3 g' },
			{ name: 'proteine', quantity: '2.33 g' },
			{ name: 'sare', quantity: '2 g' },
		],
	},
	{
		name: 'SALATA ROSII CU TELEMEA',
		ingredients: [
			{ name: 'Rosie', quantity: '100 g' },
			{ name: 'Telemea de vaca', quantity: '50 g' },
			{ name: 'Ulei floarea soarelui', quantity: '2 g' },
			{ name: 'Sare', quantity: '1 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '115 kcal' },
			{ name: 'Grasimi', quantity: '9 g' },
			{ name: 'Acizi grasi saturati', quantity: '4 g' },
			{ name: 'Glucide', quantity: '3 g' },
			{ name: 'Zaharuri', quantity: '2.1 g' },
			{ name: 'Proteine', quantity: '4.5 g' },
			{ name: 'Sare', quantity: '1.1 g' },
		],
	},
	{
		name: 'SALATA DE VARZA ALBA',
		ingredients: [
			{ name: 'Varza alba', quantity: '150 g' },
			{ name: 'ulei', quantity: '5 g' },
			{ name: 'marar', quantity: '2 g' },
			{ name: 'otet de mere', quantity: '2 g' },
			{ name: 'sare', quantity: '1 g' },
			{ name: 'piper', quantity: '1 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '120 kcal' },
			{ name: 'grasimi', quantity: '7 g' },
			{ name: 'acizi grasi saturati', quantity: '2 g' },
			{ name: 'glucide', quantity: '13 g' },
			{ name: 'zaharuri', quantity: '1 g' },
			{ name: 'proteine', quantity: '3 g' },
			{ name: 'sare', quantity: '1 g' },
		],
	},
	{
		name: 'SALATA DE VARA',
		ingredients: [
			{ name: 'salata verde', quantity: '40 g' },
			{ name: 'rosii', quantity: '50 g' },
			{ name: 'castraveti', quantity: '50 g' },
			{ name: 'ardei', quantity: '30 g' },
			{ name: 'ceapa', quantity: '20 g' },
			{ name: 'ridichii', quantity: '10 g' },
			{ name: 'ulei de floarea soarelui', quantity: '5 g' },
			{ name: 'sare', quantity: '2 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '146 kcal' },
			{ name: 'grasimi', quantity: '2.37 g' },
			{ name: 'acizi grasi saturati', quantity: '0.21 g' },
			{ name: 'glucide', quantity: '30.9 g' },
			{ name: 'zaharuri', quantity: '18.12 g' },
			{ name: 'proteine', quantity: '2.64 g' },
			{ name: 'sare', quantity: '2.01 g' },
		],
	},
	{
		name: 'MAMALIGA CU BRANZA SI SMANTANA',
		ingredients: [
			{ name: 'Malai', quantity: '150 g' },
			{ name: 'apa', quantity: '100 g' },
			{ name: 'smantana', quantity: '50 g' },
			{ name: 'telemea de vaca', quantity: '50 g' },
			{ name: 'ulei de floarea soarelui', quantity: '5 g' },
			{ name: 'sare', quantity: '2 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '362 kcal' },
			{ name: 'grasimi', quantity: '14 g' },
			{ name: 'acizi grasi saturati', quantity: '3 g' },
			{ name: 'glucide', quantity: '20 g' },
			{ name: 'zaharuri', quantity: '0 g' },
			{ name: 'proteine', quantity: '16 g' },
			{ name: 'sare', quantity: '2 g' },
		],
	},
	{
		name: 'Ciuperci la Gratar',
		ingredients: [
			{ name: 'Ciuperci champignon', quantity: '200 g' },
			{ name: 'sare', quantity: '2 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '54 kcal' },
			{ name: 'Grasimi', quantity: '1 g' },
			{ name: 'Acizi grasi saturati', quantity: '0.2 g' },
			{ name: 'Glucide', quantity: '2.4 g' },
			{ name: 'Zaharuri', quantity: '4.6 g' },
			{ name: 'Proteine', quantity: '4.4 g' },
			{ name: 'Sare', quantity: '0.5 g' },
		],
	},
	{
		name: 'CIUPERCI SOTE',
		ingredients: [
			{ name: 'Ciuperci Champignon', quantity: '250 g' },
			{ name: 'vin', quantity: '20 g' },
			{ name: 'unt', quantity: '20 g' },
			{ name: 'usturoi', quantity: '5 g' },
			{ name: 'marar', quantity: '2 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '97 kcal' },
			{ name: 'grasimi', quantity: '5 g' },
			{ name: 'acizi grasi saturati', quantity: '1.29 g' },
			{ name: 'glucide', quantity: '2.4 g' },
			{ name: 'zaharuri', quantity: '4.6 g' },
			{ name: 'proteine', quantity: '4.5 g' },
			{ name: 'sare', quantity: '1 g' },
		],
	},
	{
		name: 'LEGUME LA GRATAR',
		ingredients: [
			{ name: 'ciuperci', quantity: '100 g' },
			{ name: 'dovlecel', quantity: '100 g' },
			{ name: 'ardei', quantity: '50 g' },
			{ name: 'ceapa', quantity: '50 g' },
			{ name: 'sare', quantity: '2 g' },
			{ name: 'piper', quantity: '2 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '25.72 kcal' },
			{ name: 'grasimi', quantity: '0.2 g' },
			{ name: 'acizi grasi saturati', quantity: '0 g' },
			{ name: 'glucide', quantity: '5.29 g' },
			{ name: 'zaharuri', quantity: '2.5 g' },
			{ name: 'proteine', quantity: '1.29 g' },
			{ name: 'sare', quantity: '2 g' },
		],
	},
	{
		name: 'CARTOFI NATUR',
		ingredients: [
			{ name: 'Cartofi', quantity: '180 g' },
			{ name: 'Apa', quantity: '100 g' },
			{ name: 'Unt', quantity: '10 g' },
			{ name: 'Sare', quantity: '0.2 g' },
			{ name: 'Patrunjel', quantity: '0.5 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '198.82 kcal' },
			{ name: 'Grasimi', quantity: '8.38 g' },
			{ name: 'Acizi grasi saturati', quantity: '5.34 g' },
			{ name: 'Glucide', quantity: '28.37 g' },
			{ name: 'Zaharuri', quantity: '2.13 g' },
		],
	},
	{
		name: 'CARTOFI PRAJITI(100g)',
		ingredients: [
			{ name: 'cartofi', quantity: '97%' },
			{ name: 'ulei vegetal de floarea soarelui', quantity: '3%' },
			{ name: 'dextroza', quantity: '' },
			{ name: 'sare', quantity: '2 g' },
			{ name: 'ulei de palmier', quantity: '40 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '115 kcal' },
			{ name: 'grasimi', quantity: '2.4 g' },
			{ name: 'acizi grasi saturati', quantity: '0.5 g' },
			{ name: 'glucide', quantity: '20 g' },
			{ name: 'zaharuri', quantity: '0.5 g' },
			{ name: 'proteine', quantity: '2.1 g' },
			{ name: 'sare', quantity: '2.5 g' },
		],
	},
	{
		name: 'SARAMURA DE CRAP',
		ingredients: [
			{ name: 'Crap', quantity: '200 g' },
			{ name: 'malai', quantity: '150 g' },
			{ name: 'apa', quantity: '150 g' },
			{ name: 'ardei gras', quantity: '120 g' },
			{ name: 'rosii', quantity: '100 g' },
			{ name: 'usturoi', quantity: '20 g' },
			{ name: 'lamaie', quantity: '20 g' },
			{ name: 'ardei iute', quantity: '10 g' },
			{ name: 'sare', quantity: '2 g' },
			{ name: 'piper negru', quantity: '2 g' },
			{ name: 'patrunjel', quantity: '2 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '1154.76 kcal' },
			{ name: 'grasimi', quantity: '35.51 g' },
			{ name: 'acizi grasi saturati', quantity: '18.89 g' },
			{ name: 'glucide', quantity: '138.54 g' },
			{ name: 'zaharuri', quantity: '7.37 g' },
			{ name: 'proteine', quantity: '68.11 g' },
			{ name: 'sare', quantity: '2.01 g' },
		],
	},
	{
		name: 'HAMSIE',
		ingredients: [
			{
				name: 'Hamsie',
				quantity: '100 g',
			},
			{
				name: 'ulei de palmier',
				quantity: '30 g',
			},
			{
				name: 'faina alba de grau650',
				quantity: '10 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '373.67 kcal',
			},
			{
				name: 'grasimi',
				quantity: '25.06 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '11.62 g',
			},
			{
				name: 'glucide',
				quantity: '14.6 g',
			},
			{
				name: 'zaharuri',
				quantity: '1.15 g',
			},
			{
				name: 'proteine',
				quantity: '22.82 g',
			},
			{
				name: 'sare',
				quantity: '0.8 g',
			},
		],
	},
	{
		name: 'HAMSIE CU MAMALIGUTA SI MUJDEI',
		ingredients: [
			{ name: 'Hamsie', quantity: '200 g' },
			{ name: 'malai', quantity: '150 g' },
			{ name: 'apa', quantity: '100 g' },
			{ name: 'usturoi', quantity: '50 g' },
			{ name: 'faina alba de grau650', quantity: '50 g' },
			{ name: 'lamaie', quantity: '50 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '1005.64 kcal' },
			{ name: 'grasimi', quantity: '65.67 g' },
			{ name: 'acizi grasi saturati', quantity: '32.1 g' },
			{ name: 'glucide', quantity: '36.45 g' },
			{ name: 'zaharuri', quantity: '2.27 g' },
			{ name: 'proteine', quantity: '57.3 g' },
			{ name: 'sare', quantity: '2.02 g' },
		],
	},
	{
		name: 'DORADA LA PLITA',
		ingredients: [
			{ name: 'Dorada', quantity: '300 g' },
			{ name: 'lamaie', quantity: '50 g' },
			{ name: 'sare', quantity: '2 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '399.5 kcal' },
			{ name: 'grasimi', quantity: '5.96 g' },
			{ name: 'acizi grasi saturati', quantity: '2 g' },
			{ name: 'glucide', quantity: '6.45 g' },
			{ name: 'zaharuri', quantity: '1.27 g' },
			{ name: 'proteine', quantity: '74.3 g' },
			{ name: 'sare', quantity: '2 g' },
		],
	},
	{
		name: 'CRAP PRAJIT CU MAMALIGUTA SI MUJDEI',
		ingredients: [
			{ name: 'Crap', quantity: '250 g' },
			{ name: 'Malai', quantity: '150 g' },
			{ name: 'apa', quantity: '100 g' },
			{ name: 'usturoi', quantity: '50 g' },
			{ name: 'lamaie', quantity: '50 g' },
			{ name: 'ulei de palmier', quantity: '40 g' },
			{ name: 'faina alba de grau650', quantity: '20g' },
			{ name: 'sare', quantity: '2g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '1633.94 kcal' },
			{ name: 'grasimi', quantity: '78.17 g' },
			{ name: 'acizi grasi saturati', quantity: '39.77 g' },
			{ name: 'glucide', quantity: '153.68 g' },
			{ name: 'zaharuri', quantity: '4.5 g' },
			{ name: 'proteine', quantity: '79 g' },
			{ name: 'sare', quantity: '2.02 g' },
		],
	},
	{
		name: 'MIX FRUCTE DE MARE IN SOS DE VIN CU OREZ NATUR',
		ingredients: [
			{ name: 'Orez basmati', quantity: '200 g' },
			{ name: 'Midii congelate', quantity: '100 g' },
			{ name: 'Calamar congelat', quantity: '100 g' },
			{ name: 'Creveti congelati', quantity: '100 g' },
			{ name: 'Vin', quantity: '40 g' },
			{ name: 'Unt', quantity: '30 g' },
			{ name: 'Zeama lamaie', quantity: '4 g' },
			{ name: 'Oregano', quantity: '2 g' },
			{ name: 'Sare', quantity: '2 g' },
			{ name: 'Piper', quantity: '2 g' },
			{ name: 'Patrunjel', quantity: '2 g' },
			{ name: 'Lamaie', quantity: '50 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '200.73 kcal' },
			{ name: 'Grasimi', quantity: '6.23 g' },
			{ name: 'Acizi grasi saturati', quantity: '3.27 g' },
			{ name: 'Glucide', quantity: '3.3 g' },
			{ name: 'Zaharuri', quantity: '1.25 g' },
			{ name: 'Proteine', quantity: '10.8 g' },
			{ name: 'Sare', quantity: '2.4 g' },
		],
	},
	{
		name: 'MIDII IN SOS ROSU PICANT',
		ingredients: [
			{ name: 'Midii congelate', quantity: '200 g' },
			{ name: 'Concentrat din suc de rosii', quantity: '100 g' },
			{ name: 'Ceapa rosie', quantity: '30 g' },
			{ name: 'Vin alb demisec', quantity: '20 g' },
			{ name: 'Unt', quantity: '10 g' },
			{ name: 'Usturoi', quantity: '4 g' },
			{ name: 'Busuioc', quantity: '2 g' },
			{ name: 'Sare', quantity: '2 g' },
			{ name: 'Piper', quantity: '2 g' },
			{ name: 'Pepperoncino', quantity: '2 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '940.24 kcal' },
			{ name: 'Grasimi', quantity: '35.45 g' },
			{ name: 'Acizi grasi saturati', quantity: '27.47 g' },
			{ name: 'Glucide', quantity: '51.87 g' },
			{ name: 'Zaharuri', quantity: '26.49 g' },
			{ name: 'Proteine', quantity: '104.25 g' },
			{ name: 'Sare', quantity: '6.25 g' },
		],
	},
	{
		name: 'MIDII PANE CU SOS CALYPSO',
		ingredients: [
			{ name: 'Midii congelate', quantity: '200 g' },
			{ name: 'Pesmet panko', quantity: '50 g' },
			{
				name: 'calypso',
				quantity:
					'50 gr (maioneza 30gr(Contine oua, mustar conservanti E202-sorbat de potasiu), concentrate suc de rosii 10 gr,   sweet chili )',
			},
			{ name: 'Ou', quantity: '30 g' },
			{ name: 'Sare', quantity: '2 g' },
			{ name: 'Piper', quantity: '2 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '701.24 kcal' },
			{ name: 'Grasimi', quantity: '39.45 g' },
			{ name: 'Acizi grasi saturati', quantity: '18.47 g' },
			{ name: 'Glucide', quantity: '28.87 g' },
			{ name: 'Zaharuri', quantity: '12.32 g' },
			{ name: 'Proteine', quantity: '26.79 g' },
			{ name: 'Sare', quantity: '3.79 g' },
		],
	},
	{
		name: 'CALAMAR PANE',
		ingredients: [
			{ name: 'Calamar congelat', quantity: '200 g' },
			{ name: 'pesmet panko', quantity: '50 g' },
			{ name: 'calypso', quantity: '50 g' },
			{ name: 'ou', quantity: '30 g' },
			{ name: 'sare', quantity: '2 g' },
			{ name: 'piper', quantity: '2 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '602.25 kcal' },
			{ name: 'grasimi', quantity: '36.72 g' },
			{ name: 'acizi grasi saturati', quantity: '21.04 g' },
			{ name: 'glucide', quantity: '20.33 g' },
			{ name: 'zaharuri', quantity: '6.58 g' },
			{ name: 'proteine', quantity: '35.15 g' },
			{ name: 'sare', quantity: '2.3 g' },
		],
	},
	{
		name: 'CREVETI PANE CU SOS CALYPSO',
		ingredients: [
			{ name: 'Creveti Congelati', quantity: '200 g' },
			{ name: 'pesmet panko', quantity: '50 g' },
			{
				name: 'calypso',
				quantity:
					'50 gr (maioneza 30gr(Contine oua, mustar conservanti E202-sorbat de potasiu), concentrate suc de rosii 10 gr, sweet chili )',
			},
			{ name: 'ou', quantity: '30 g' },
			{ name: 'sare', quantity: '2 g' },
			{ name: 'piper', quantity: '2 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '590 kcal' },
			{ name: 'grasimi', quantity: '37.1 g' },
			{ name: 'acizi grasi saturati', quantity: '21.04 g' },
			{ name: 'glucide', quantity: '24.2 g' },
			{ name: 'zaharuri', quantity: '7.1 g' },
			{ name: 'proteine', quantity: '29.15 g' },
			{ name: 'sare', quantity: '2.3 g' },
		],
	},
	{
		name: 'MIXUL BRIZZO CU CARTOFI PRAJITI SI SOS CALYPSO',
		ingredients: [
			{ name: 'cartofi', quantity: '150 g' },
			{ name: 'Calamar congelat', quantity: '100 g' },
			{ name: 'midii congelate', quantity: '100 g' },
			{ name: 'creveti congelati', quantity: '100 g' },
			{ name: 'pesmet panko', quantity: '50 g' },
			{ name: 'ou', quantity: '30 g' },
			{ name: 'sos sweet chili', quantity: '50 g' },
			{ name: 'sos calypso', quantity: '50 g' },
			{ name: 'lamaie', quantity: '50 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '950 kcal' },
			{ name: 'grasimi', quantity: '56.1 g' },
			{ name: 'acizi grasi saturati', quantity: '29.29 g' },
			{ name: 'glucide', quantity: '32.4 g' },
			{ name: 'zaharuri', quantity: '13.48 g' },
			{ name: 'proteine', quantity: '54.68 g' },
			{ name: 'sare', quantity: '4.25 g' },
		],
	},
	{
		name: 'MICI',
		ingredients: [
			{
				name: 'carne toccata mici',
				quantity: '60 g',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '111.5 kcal',
			},
			{
				name: 'grasimi',
				quantity: '8.5 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '3.5 g',
			},
			{
				name: 'glucide',
				quantity: '1.5 g',
			},
			{
				name: 'zaharuri',
				quantity: '0.5 g',
			},
			{
				name: 'proteine',
				quantity: '7 g',
			},
			{
				name: 'sare',
				quantity: '0.5 g',
			},
		],
	},
	{
		name: 'MICI A LA BRIZZO',
		ingredients: [
			{
				name: 'carne tocata mici',
				quantity: '250 g',
			},
			{
				name: 'cartofi congelati',
				quantity: '150 g',
			},
			{
				name: 'mustar LaMinut',
				quantity: '50 g',
			},
			{
				name: 'paine alba',
				quantity: '50 g',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '605.5 kcal',
			},
			{
				name: 'grasimi',
				quantity: '51.5 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '20.5 g',
			},
			{
				name: 'glucide',
				quantity: '9.5 g',
			},
			{
				name: 'zaharuri',
				quantity: '3.5 g',
			},
			{
				name: 'proteine',
				quantity: '38 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
		],
	},
	{
		name: 'TOCHITURA DE PORC CU MAMALIGUTA',
		ingredients: [
			{
				name: 'Pulpa de porc',
				quantity: '150 g',
			},
			{
				name: 'mamaliguta',
				quantity: '100 gr ( apa  100 ml, malai  30 gr, sare 3 gr)',
			},
			{
				name: 'cabanos',
				quantity: '50 g',
			},
			{
				name: 'apa',
				quantity: '50 g',
			},
			{
				name: 'ou de gaina',
				quantity: '30 g',
			},
			{
				name: 'concentrat  din suc de rosii',
				quantity: '20 g',
			},
			{
				name: 'usturoi',
				quantity: '3 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '2 g',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '963.75 kcal',
			},
			{
				name: 'grasimi',
				quantity: '77.75 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '20.75 g',
			},
			{
				name: 'glucide',
				quantity: '1.03',
			},
			{
				name: 'zaharuri',
				quantity: '2g',
			},
			{
				name: 'proteine',
				quantity: '62.5 g',
			},
			{
				name: 'sare',
				quantity: '2g',
			},
		],
	},
	{
		name: 'Cefa de porc la gratar',
		ingredients: [
			{
				name: 'Ceafa de porc',
				quantity: '200 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '2 g',
			},
			{
				name: 'ulei floarea soarelui',
				quantity: '2 g',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '599.44 kcal',
			},
			{
				name: 'grasimi',
				quantity: '38.74 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '16.82 g',
			},
			{
				name: 'glucide',
				quantity: '0.03 g',
			},
			{
				name: 'zaharuri',
				quantity: '0.02 g',
			},
			{
				name: 'proteine',
				quantity: '58.82 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
		],
	},
	{
		name: 'SNITEL DE PUI CU SOS CALYPSO',
		ingredients: [
			{
				name: 'piept de pui',
				quantity: '150 g',
			},
			{
				name: 'pesmet panko',
				quantity: '20 g',
			},
			{
				name: 'fulgi de porumb',
				quantity: '20 g',
			},
			{
				name: 'ou de gaina',
				quantity: '30 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '2 g',
			},
			{
				name: 'calypso',
				quantity:
					'50 gr (maioneza 30gr(Contine oua, mustar conservanti  E202-sorbat de potasiu), concentrate suc de rosii 10 gr, sweet chili)',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '213.4 kcal',
			},
			{
				name: 'grasimi',
				quantity: '11.1 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '1.45 g',
			},
			{
				name: 'glucide',
				quantity: '6.18 g',
			},
			{
				name: 'zaharuri',
				quantity: '1.01 g',
			},
			{
				name: 'proteine',
				quantity: '15.24 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
		],
	},
	{
		name: 'MICI CU CARTOFI PRAJITI',
		ingredients: [
			{
				name: 'carne tocata mici',
				quantity:
					'250 gr (carne vita, carne porc, slanina, sare, agent afanare, bicarbonate de sodiu, condiment, origine carne UE)',
			},
			{
				name: 'cartofi congelati',
				quantity: '150 g',
			},
			{
				name: 'mustar LaMinut',
				quantity: '50 g',
			},
			{
				name: 'paine alba',
				quantity: '50 g',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '605.5 kcal',
			},
			{
				name: 'grasimi',
				quantity: '51.5 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '20.5 g',
			},
			{
				name: 'glucide',
				quantity: '9.5 g',
			},
			{
				name: 'zaharuri',
				quantity: '3.5 g',
			},
			{
				name: 'proteine',
				quantity: '38 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
		],
	},
	{
		name: 'CRISPY DE PUI CU CARTOFI PRAJITI',
		ingredients: [
			{
				name: 'piept de pui dezosat',
				quantity: '150 g',
			},
			{
				name: 'cartofi congelati',
				quantity: '170 g',
			},
			{
				name: 'pesmet panko',
				quantity: '20 g',
			},
			{
				name: 'fulgi de porumb',
				quantity: '20 g',
			},
			{
				name: 'ou',
				quantity: '30 g',
			},
			{
				name: 'sos calypso',
				quantity: '50 g',
			},
			{
				name: 'maioneza',
				quantity:
					'30gr (Contine oua, mustar conservanti E202-sorbat de potasiu)',
			},
			{
				name: 'concentrate suc de rosii',
				quantity: '10 g',
			},
			{
				name: 'sweet chili',
				quantity: '',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '223.4 kcal',
			},
			{
				name: 'grasimi',
				quantity: '13.1 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '2.05 g',
			},
			{
				name: 'glucide',
				quantity: '8.18 g',
			},
			{
				name: 'zaharuri',
				quantity: '1.38 g',
			},
			{
				name: 'proteine',
				quantity: '15.24 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
		],
	},
	{
		name: 'CEFA DE PORC LA GRATAR CU CARTOFI PRAJITI',
		ingredients: [
			{
				name: 'Ceafa de porc',
				quantity: '200 g',
			},
			{
				name: 'cartori congelati',
				quantity: '150 g',
			},
			{
				name: 'sare',
				quantity: '2 g',
			},
			{
				name: 'piper',
				quantity: '2 g',
			},
			{
				name: 'ulei floarea soarelui',
				quantity: '2 g',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '650.44 kcal',
			},
			{
				name: 'grasimi',
				quantity: '49.74 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '20.82 g',
			},
			{
				name: 'glucide',
				quantity: '0.2',
			},
			{
				name: 'zaharuri',
				quantity: '0.2g',
			},
			{
				name: 'proteine',
				quantity: '60.82g',
			},
			{
				name: 'sare',
				quantity: '2g',
			},
		],
	},
	{
		name: 'BURGER BRIZZO CU CARTOFI PRAJITI',
		ingredients: [
			{
				name: 'Chifla din faina de grau',
				quantity: '80 g',
			},
			{
				name: 'carne tocata vita',
				quantity: '150 g',
			},
			{
				name: 'Cartofi congelati',
				quantity: '150 g',
			},
			{
				name: 'branza cu cedar (Cedar 60%, branzeturi, lapte degresat, lapte praf degresat, unt, sare.)',
				quantity: '20 g',
			},
			{
				name: 'ceapa crispy',
				quantity:
					'5 gr (Ceapa (SULFITI), grasime vegetala de palmier nehidrogenata, faina de grau, amidon din grau, sare)',
			},
			{
				name: 'salata verde',
				quantity: '10 g',
			},
			{
				name: 'bacon',
				quantity: '30 g',
			},
			{
				name: 'rosie',
				quantity: '40 g',
			},
			{
				name: 'ou',
				quantity: '30 g',
			},
			{
				name: 'castraveti murati',
				quantity:
					'10 gr (castraveti 12-15cm , apa, otet, zahar, sare,marar, condimente: mustar boabe.)',
			},
			{
				name: 'sosul casei',
				quantity:
					'20 gr ( maioneza , sos de rosii, cognac, ceapa crispy, )',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '809.46 kcal',
			},
			{
				name: 'grasimi',
				quantity: '39.15 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '6.17 g',
			},
			{
				name: 'glucide',
				quantity: '63.55 g',
			},
			{
				name: 'zaharuri',
				quantity: '3.85 g',
			},
			{
				name: 'proteine',
				quantity: '54.96 g',
			},
			{
				name: 'sare',
				quantity: '4.08 g',
			},
		],
	},
	{
		name: 'CHEESEBURGER CU CARTOFI PRAJITI',
		ingredients: [
			{
				name: 'Chifla din faina de grau',
				quantity: '80 g',
			},
			{
				name: 'carne tocata vita',
				quantity: '150 g',
			},
			{
				name: 'Cartofi congelati',
				quantity: '150 g',
			},
			{
				name: 'branza cu cedar (Cedar 60%, branzeturi, lapte degresat, lapte praf degresat, unt, sare.)',
				quantity: '20 g',
			},
			{
				name: 'ceapa crispy',
				quantity: '5 g',
			},
			{
				name: 'dip cheese',
				quantity: '20 g',
			},
			{
				name: 'salata verde',
				quantity: '10 g',
			},
			{
				name: 'bacon',
				quantity: '30 g',
			},
			{
				name: 'rosie',
				quantity: '40 g',
			},
			{
				name: 'castraveti murati (castraveti 12-15cm , apa, otet, zahar, sare,marar, condimente: mustar boabe.)',
				quantity: '10 g',
			},
			{
				name: 'sosul casei ( maioneza , sos de rosii, cognac, ceapa crispy, )',
				quantity: '20 g',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '950 kcal',
			},
			{
				name: 'grasimi',
				quantity: '46.2 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '10.03 g',
			},
			{
				name: 'glucide',
				quantity: '78.23 g',
			},
			{
				name: 'zaharuri',
				quantity: '4.02 g',
			},
			{
				name: 'proteine',
				quantity: '65.06 g',
			},
			{
				name: 'sare',
				quantity: '4.58 g',
			},
		],
	},
	{
		name: 'HAMBURGER CU CARTOFI PRAJITI',
		ingredients: [
			{ name: 'Chifla din faina de grau', quantity: '80 g' },
			{ name: 'carne tocata vita', quantity: '150 g' },
			{ name: 'Cartofi congelati', quantity: '150 g' },
			{
				name: 'branza cu cedar (Cedar 60%, branzeturi, lapte degresat, lapte praf degresat, unt, sare.)',
				quantity: '20 g',
			},
			{ name: 'salata verde', quantity: '10 g' },
			{ name: 'rosie', quantity: '40 g' },
			{
				name: 'castraveti murati (castraveti 12-15cm , apa, otet, zahar, sare,marar, condimente: mustar boabe.)',
				quantity: '10 g',
			},
			{
				name: 'sosul casei (maioneza, sos de rosii, cognac, ceapa crispy)',
				quantity: '20 g',
			},
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '746.3 kcal' },
			{ name: 'grasimi', quantity: '37.02 g' },
			{ name: 'acizi grasi saturati', quantity: '6.3 g' },
			{ name: 'glucide', quantity: '53.05 g' },
			{ name: 'zaharuri', quantity: '2.3 g' },
			{ name: 'proteine', quantity: '49.02 g' },
			{ name: 'sare', quantity: '3.58 g' },
		],
	},
	{
		name: 'CRISPY CHICKEN BURGER & CARTOFI PRAJITI',
		ingredients: [
			{ name: 'Cartofi congelati', quantity: '150 g' },
			{ name: 'Piet de pui dezosat', quantity: '120 g' },
			{ name: 'Chifla din faina de grau', quantity: '80 g' },
			{ name: 'Pesmet panko', quantity: '30 g' },
			{ name: 'Ou', quantity: '30 g' },
			{ name: 'Fulgi de porumb', quantity: '30 g' },
			{ name: 'Faina', quantity: '20 g' },
			{ name: 'Branza cu cedar', quantity: '20 g' },
			{ name: 'Salata verde', quantity: '10 g' },
			{ name: 'Rosie', quantity: '40 g' },
			{ name: 'Castraveti murati', quantity: '10 g' },
			{ name: 'Sosul casei', quantity: '20 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '805.2 kcal' },
			{ name: 'Grasimi', quantity: '56.26 g' },
			{ name: 'Acizi grasi saturati', quantity: '10.3 g' },
			{ name: 'Glucide', quantity: '62.1 g' },
			{ name: 'Zaharuri', quantity: '4.3 g' },
			{ name: 'Proteine', quantity: '42.9 g' },
			{ name: 'Sare', quantity: '4.24 g' },
		],
	},
	{
		name: 'PUI CU BACON & CARTOFI PRAJITI',
		ingredients: [
			{ name: 'Cartofi congelati', quantity: '150 g' },
			{ name: 'Piept de pui dezosat', quantity: '120 g' },
			{ name: 'Chifla din faina de grau', quantity: '80 g' },
			{ name: 'Bacon', quantity: '40 g' },
			{ name: 'Branza cu cedar', quantity: '20 g' },
			{ name: 'Salata verde', quantity: '10 g' },
			{ name: 'Rosie', quantity: '40 g' },
			{ name: 'Castraveti murati', quantity: '10 g' },
			{ name: 'Sosul casei', quantity: '20 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '603 kcal' },
			{ name: 'Grasimi', quantity: '32.46 g' },
			{ name: 'Acizi grasi saturati', quantity: '7.3 g' },
			{ name: 'Glucide', quantity: '45.3 g' },
			{ name: 'Zaharuri', quantity: '2.3 g' },
			{ name: 'Proteine', quantity: '35.8 g' },
			{ name: 'Sare', quantity: '2.35 g' },
		],
	},
	{
		name: 'PAINE PRAJITA',
		ingredients: [
			{
				name: 'Paine neptun',
				quantity: '150 gr prajita',
			},
			{
				name: 'faina alba de grau',
				quantity: '650 g',
			},
			{
				name: 'apa',
				quantity: '',
			},
			{
				name: 'drojdie',
				quantity: '',
			},
			{
				name: 'sare iodata',
				quantity: '',
			},
			{
				name: 'conservanti (propionate de calciu, acid sorbic)',
				quantity: '',
			},
			{
				name: 'otet din alcool',
				quantity: '',
			},
			{
				name: 'emulsifiant (esteri ai acizilor mono si diacetiltric cu mono si digliceridele acizilor grasi)',
				quantity: '',
			},
			{
				name: 'agenti de tartare a fainii (acid ascorbic, L-cisteina)',
				quantity: '',
			},
			{
				name: 'poate contine urme de soia si seminte de susan',
				quantity: '',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '375 kcal',
			},
			{
				name: 'grasimi',
				quantity: '1.5 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '0.45 g',
			},
			{
				name: 'glucide',
				quantity: '75.45 g',
			},
			{
				name: 'zaharuri',
				quantity: '3 g',
			},
			{
				name: 'proteine',
				quantity: '12.6 g',
			},
			{
				name: 'sare',
				quantity: '1.65 g',
			},
		],
	},
	{
		name: 'SOS CALYPSO',
		ingredients: [
			{
				name: 'maioneza',
				quantity:
					'30gr (Contine oua, mustar conservanti E202-sorbat de potasiu)',
			},
			{
				name: 'concentrate suc de rosii',
				quantity: '10g',
			},
			{
				name: 'sweet chili',
				quantity: '10g',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '167.8 kcal',
			},
			{
				name: 'grasimi',
				quantity: '15.5 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '2.05 g',
			},
			{
				name: 'glucide',
				quantity: '4.3 g',
			},
			{
				name: 'zaharuri',
				quantity: '1 g',
			},
			{
				name: 'proteine',
				quantity: '2.5 g',
			},
			{
				name: 'sare',
				quantity: '0.25 g',
			},
		],
	},
	{
		name: 'SOS USTUROI',
		ingredients: [
			{ name: 'usturoi', quantity: '50 g' },
			{ name: 'ulei', quantity: '10 g' },
			{ name: 'sare', quantity: '2 g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '44 kcal' },
			{ name: 'grasimi', quantity: '2 g' },
			{ name: 'acizi grasi saturati', quantity: '1.05 g' },
			{ name: 'glucide', quantity: '4.6 g' },
			{ name: 'zaharuri', quantity: '1 g' },
			{ name: 'proteine', quantity: '2.55 g' },
			{ name: 'sare', quantity: '0.25 g' },
		],
	},
	{
		name: 'SWEET CHILI',
		ingredients: [
			{ name: 'zahar', quantity: '' },
			{ name: 'ardei chili rosu (18%)', quantity: '' },
			{ name: 'usturoi', quantity: '' },
			{ name: 'sare', quantity: '' },
			{ name: 'amidon modificat de porumb', quantity: '' },
			{ name: 'corector de aciditate( E260 )', quantity: '' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '90.15 kcal' },
			{ name: 'Grasimi', quantity: '0g' },
			{ name: 'din care acizi grasi saturati', quantity: '0 g' },
			{ name: 'Glucide', quantity: '22.5 g' },
			{ name: 'zahar', quantity: '20.5 g' },
			{ name: 'Proteine', quantity: '0g' },
			{ name: 'Sare', quantity: '1.45 g' },
		],
	},
	{
		name: 'SMANTANA',
		ingredients: [
			{
				name: 'Smantana din lapte(20% grasime)',
				quantity: '100%',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '206 kcal',
			},
			{
				name: 'Grasimi',
				quantity: '10g',
			},
			{
				name: 'Acizi grasi saturati',
				quantity: '6g',
			},
			{
				name: 'Glucide',
				quantity: '1.9 g',
			},
			{
				name: 'Zahar',
				quantity: '1.9 g',
			},
			{
				name: 'Proteine',
				quantity: '1.35 g',
			},
			{
				name: 'Sare',
				quantity: '0.05 g',
			},
		],
	},
	{
		name: 'MUSTAR',
		ingredients: [
			{
				name: 'Apa',
				quantity: '',
			},
			{
				name: 'boabe de mustar',
				quantity: '16%',
			},
			{
				name: 'otet din vin',
				quantity: '',
			},
			{
				name: 'zahar',
				quantity: '',
			},
			{
				name: 'sare',
				quantity: '',
			},
			{
				name: 'acidifiant',
				quantity: 'acid citric',
			},
			{
				name: 'agent de ingrosare',
				quantity: 'guma de xantan',
			},
			{
				name: 'condimente',
				quantity: '',
			},
			{
				name: 'colorant',
				quantity: 'beta-caroten',
			},
		],
		nutrition: [
			{
				name: 'Valoare energetica',
				quantity: '46 kcal',
			},
			{
				name: 'Grasimi',
				quantity: '2.3 g',
			},
			{
				name: 'acizi grasi saturati',
				quantity: '0.15 g',
			},
			{
				name: 'Glucide',
				quantity: '4.3 g',
			},
			{
				name: 'zahar',
				quantity: '2 g',
			},
			{
				name: 'Proteine',
				quantity: '2 g',
			},
			{
				name: 'Sare',
				quantity: '1 g',
			},
		],
	},
	{
		name: 'KETCHUP',
		ingredients: [
			{ name: 'piure de rosii', quantity: '46%' },
			{ name: 'apa', quantity: '' },
			{ name: 'amidon modificat', quantity: '' },
			{ name: 'otet din alcool', quantity: '' },
			{ name: 'sare', quantity: '' },
			{ name: 'acidifiant (acid citric)', quantity: '' },
			{ name: 'condimente', quantity: '' },
			{
				name: 'conservanti (benzoat de sodiu, sorbat de potasiu)',
				quantity: '',
			},
			{ name: 'aroma de tomate', quantity: '' },
			{ name: 'indulcitor (sucraloza)', quantity: '' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '15.6 kcal' },
			{
				name: 'Grasimi',
				quantity: '0g din care acizi grasi saturati 0g',
			},
			{ name: 'Glucide', quantity: '3.4 g' },
			{ name: 'zahar', quantity: '1.2 g' },
			{ name: 'Proteine', quantity: '0.45 g' },
			{ name: 'Sare', quantity: '21.0g' },
		],
	},
	{
		name: 'MAIONEZA',
		ingredients: [
			{ name: 'ulei bedetal de rapita', quantity: '40%' },
			{ name: 'apa', quantity: '40%' },
			{ name: 'praf de ou integral', quantity: '0.19%' },
			{
				name: 'mustar(apa, otet, boabe de mustar, zahar, sare)',
				quantity: '',
			},
			{ name: 'zahar', quantity: '' },
			{ name: 'otet', quantity: '' },
			{ name: 'amidon modificat de cartof', quantity: '' },
			{ name: 'sare', quantity: '' },
			{ name: 'acidifiant(acid lactic)', quantity: '' },
			{ name: 'stabilizator(guma de xantan)', quantity: '' },
			{
				name: 'conservanti(benzonat de sodiu, sorbat de potasiu)',
				quantity: '',
			},
			{ name: 'colorant(beta-caroten)', quantity: '' },
			{ name: 'antioxidant(calciu-disodic- EDTA)', quantity: '' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '198.5 kcal' },
			{ name: 'grasimi', quantity: '20 g' },
			{ name: 'acizi grasi saturati', quantity: '1.5 g' },
			{ name: 'glucide', quantity: '4.15 g' },
			{ name: 'zahar', quantity: '2.5 g' },
			{ name: 'proteine', quantity: '0.25 g' },
			{ name: 'sare', quantity: '0.5 g' },
		],
	},
	{
		name: 'CLATITA BRIZZO',
		ingredients: [
			{ name: 'Inghetata', quantity: '50 gr' },
			{ name: 'Lapte', quantity: '50 gr' },
			{ name: 'faina de grau', quantity: '30 gr' },
			{ name: 'ou de gaina', quantity: '30 gr' },
			{ name: 'mar', quantity: '30 gr' },
			{ name: 'zahar', quantity: '30 gr' },
			{ name: 'biscuiti digestivi', quantity: '30 gr' },
			{ name: 'scortisoara', quantity: '2 gr' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '325kcal' },
			{ name: 'Grasimi', quantity: '22 gr' },
			{ name: 'Acizi grasi saturati', quantity: '2.5 gr' },
			{ name: 'Glucide', quantity: '5.15 gr' },
			{ name: 'Zahar', quantity: '4 gr' },
			{ name: 'Proteine', quantity: '3 gr' },
			{ name: 'Sare', quantity: '0.5 gr' },
		],
	},
	{
		name: 'Inghetata Asortata',
		ingredients: [
			{ name: 'apa', quantity: '' },
			{ name: 'zahar', quantity: '' },
			{ name: 'ulei vegetal de cocos', quantity: '' },
			{ name: 'zer praf din LAPTE', quantity: '' },
			{ name: 'proteine din LAPTE', quantity: '' },
			{ name: 'LAPTE praf degresat', quantity: '' },
			{ name: 'sirop de glucoza', quantity: '' },
			{ name: 'dextroza', quantity: '' },
			{
				name: 'stabilizatori (guma de carruba, guma de guar)',
				quantity: '',
			},
			{
				name: 'emulsifiant (mono- si digliceride ale acizilor grasi)',
				quantity: '',
			},
			{ name: 'aroma naturala de vanilie', quantity: '' },
			{ name: 'colorant (caroteni)', quantity: '' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '746 kJ/178 kcal' },
			{ name: 'Grasimi', quantity: '8.4g' },
			{ name: 'Acizi grasi saturati', quantity: '7.4g' },
			{ name: 'Glucide', quantity: '23.2g' },
			{ name: 'Zahar', quantity: '21.7g' },
			{ name: 'Proteine', quantity: '2.3g' },
			{ name: 'Sare', quantity: '0.2g' },
		],
	},
	{
		name: 'CLATITE CU DULCEATA',
		ingredients: [
			{ name: 'Lapte', quantity: '50gr' },
			{ name: 'faina de grau', quantity: '30gr' },
			{ name: 'ou de gaina', quantity: '30gr' },
			{
				name: 'dulceata capsuni(capsuni, sirop de glucoza-fructoza, zahar, acidifiant: acid citric )/dulceata visine(Visine, sirop de glucoza-fructoza, zahar, acidifiant, acid citric.)/ dulceata caise (Caise 65%, zahar, sirop de glucoza-fructoza, acidifiant: acid citric, agent gelifiant: pectina)',
				quantity: '',
			},
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '600kcal' },
			{ name: 'Grasimi', quantity: '30gr' },
			{ name: 'acizi grasi saturati', quantity: '7.4g' },
			{ name: 'Glucide', quantity: '72gr' },
			{ name: 'zahar', quantity: '21.7g' },
			{ name: 'Proteine', quantity: '3gr' },
			{ name: 'Sare', quantity: '0.2gr' },
		],
	},
	{
		name: 'CLATITE CU FINETTI',
		ingredients: [
			{
				name: 'Clatite',
				quantity:
					'(Lapte 50gr, faina de grau 30 gr, ou de gaina 30 gr)',
			},
			{
				name: 'Finetti(zahăr, ulei de palmier, lapte praf degresat 8%, cacao pudră cu conținut redus de grăsime 5%, alune de pădure 3%, emulsifiant (lecitină din floarea soarelui), vanilină. emulsifiant (E 322 Lecitină))',
				quantity: '50 gr',
			},
			{
				name: 'crème patiserie (lapte)[stabilizatori (E 420 Sorbitol, E 463 Hidroxipropilceluloză), emulgatori (E 472e Esteri ai acizilor mono- și diacetil tartric cu mono- și digliceridele acizilor grași, E 322 Lecitine, E 472b Esteri ai acidului lactic cu mono- și digliceridele acizilor grași)]',
				quantity: '100 gr',
			},
			{ name: 'ulei floarea soarelui', quantity: '5 gr' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '901.1kcal' },
			{ name: 'Grasimi', quantity: '41.1gr' },
			{ name: 'acizi grasi saturati', quantity: '9.2gr' },
			{ name: 'Glucide', quantity: '112.9gr' },
			{ name: 'zahar', quantity: '39gr' },
			{ name: 'Proteine', quantity: '21.7gr' },
			{ name: 'Sare', quantity: '0.2gr' },
		],
	},
	{
		name: 'CREPE SUZETTE BANANE',
		ingredients: [
			{ name: 'Lapte', quantity: '50g' },
			{ name: 'faina de grau', quantity: '30g' },
			{ name: 'ou de gaina', quantity: '30g' },
			{ name: 'banana', quantity: '70g' },
			{
				name: 'suc de portocale (cu pulpă obţinut din piure concentrat de portocale 50 gr (50%), apă, zahăr, acidifiant: acid citric, antioxidant: acid ascorbic)',
				quantity: '',
			},
			{ name: 'unt', quantity: '10g' },
			{ name: 'cognac', quantity: '10g' },
			{ name: 'zahar', quantity: '10g' },
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '1015' },
			{ name: 'Grasimi', quantity: '52.3g' },
			{ name: 'acizi grasi saturati', quantity: '10.2g' },
			{ name: 'Glucide', quantity: '121.6g' },
			{ name: 'zahar', quantity: '47g' },
			{ name: 'Proteine', quantity: '49.3g' },
			{ name: 'Sare', quantity: '1g' },
		],
	},
	{
		name: 'SUFLE DE CIOCOLATA CU INGHETATA DE VANILIE',
		ingredients: [
			{ name: 'oua', quantity: '22%' },
			{
				name: 'ciocolata',
				quantity:
					'zahar, masa de cacao, unt de cacao, emulsifiant: lecitina de soia, aroma de vanilie',
			},
			{ name: 'zahar', quantity: "" },
			{ name: 'apa', quantity: "" },
			{ name: 'unt', quantity: 'contin lapte' },
			{ name: 'faina de grau', quantity: 'gluten' },
			{ name: 'ulei vegetal nehidrogenat de cocos', quantity: "" },
			{ name: 'pudra de cacao', quantity: '1,9%' },
			{ name: 'lapte praf integral', quantity: "" },
			{
				name: 'inghetata de vanilie(apa, zahar, ulei vegetal de cocos, zer praf din LAPTE, proteine din LAPTE, LAPTE praf degresat, sirop de glucoza, dextroza, stabilizatori (guma de carruba, guma de guar), emulsifiant (mono- si digliceride ale acizilor grasi), aroma naturala de vanilie, colorant (caroteni))',
				quantity: '70gr',
			},
		],
		nutrition: [
			{ name: 'Valoare energetica', quantity: '596 kcal' },
			{ name: 'Grasimi', quantity: '29,9 gr' },
			{ name: 'acizi grasi saturati', quantity: '19,4 gr' },
			{ name: 'Glucide', quantity: '53gr' },
			{ name: 'zahar', quantity: '56 gr' },
			{ name: 'Proteine', quantity: '7,8 gr' },
			{ name: 'Sare', quantity: '0,20 gr' },
		],
	},
];
