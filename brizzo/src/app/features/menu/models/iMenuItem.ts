export interface ICategory {
	id: number,
	name: string,
	sheetName: string;
	sheetId: number;
	menuItems: IMenuItem[];
	photoName?: string;
	_isFirst?: boolean;
};

export interface IMenuItem {
	active: number;
	category?: string;
	//
	name: string;
	quantity: number;
	qType: string;
	alcohol?: any;
	price: number;
	currency: string;
	extra?: string;
	extra_en?: string;
	isFrozen?: boolean;
	_alergens?: string;
	_isFirstItem?: boolean;
	_showAlcohol?: boolean;
	_showAlcoholIcon?: boolean;
	_showEnglish?: boolean;
	_hasAllergens?: boolean;
	photo_name?: string;
}

export const attributesMapping = [
	{
		sheet: 'ACTIVE',
		model: 'active',
		pos: -1
	},
	{
		sheet: 'NUME',
		model: 'name',
		pos: 2
	},
	{
		sheet: 'CANTITATE',
		model: 'quantity',
		pos: 3
	},
	{
		sheet: 'TIPUL CANTITATII',
		model: 'qType',
		pos: 4
	},
	{
		sheet: 'ALCOL',
		model: 'alcohol',
		pos: 5
	},
	{
		sheet: 'PRET',
		model: 'price',
		pos: 6
	},
	{
		sheet: 'MONEDA',
		model: 'currency',
		pos: 7
	},
	{
		sheet: 'EXTRA INFORMATII',
		model: 'extra',
		pos: 8
	},
	{
		sheet: 'EXTRA EN',
		model: 'extra_en',
		pos: 9
	},
	{
		sheet: 'FROZEN',
		model: 'isFrozen',
		pos: 10
	},
	{
		sheet: 'ALERGENI',
		model: '_alergens',
		pos: 11
	},
	{
		sheet: 'photo name',
		model: 'photo_name',
		pos: 12
	}
];
