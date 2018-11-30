//#region Document access

//#endregion Document access
const aspect = {
	SuperUltraWide: 3.6,
	Silver: 2.414,
	WideCinemaStandard: 2.39,
	WidePC: 2.37,
	Univisium: 2,
	Standard4kIMAX: 1.9,
	WideCommon: 1.85,
	Standard: 16/9,
	Gold: 1.618,
	Common: 1.6,
	Square: 1,
	PhoneCommon: 1/1.6,
	PhoneGold: 1/1.618,
	PhoneStandard: 9/16,
	PhoneWideCommon: 1/1.85,
	PhoneStandard4kIMAX: 1/1.9,
	PhoneUnivisium: 0.5,
	PhoneWidePC: 1/2.37,
	PhoneWideCinemaStandard: 1/2.39,
	PhoneSilver: 1/2.414,
	PhoneSuperUltraWide: 1/3.6
}

//#region Standards


//#region Get or set resolution


const resolution = {
	aspectRatio: this.width/this.height,
	type: () => {
		if(aspectRatio > aspect.Silver)
		{return aspect.SuperUltraWide}
		else if(aspectRatio > aspect.WideCinemaStandard)
		{return aspect.Silver}
		else if(aspectRatio > aspect.WidePC)
		{return aspect.WideCinemaStandard}
		else if(aspectRatio > aspect.Univisium)
		{return aspect.WidePC}
		else if(aspectRatio > aspect.Standard4kIMAX)
		{return aspect.Univisium}
		else if(aspectRatio > aspect.WideCommon)
		{return aspect.Standard4kIMAX}
		else if(aspectRatio > aspect.Standard)
		{return aspect.WideCommon}
		else if(aspectRatio > aspect.Gold)
		{return aspect.Standard}
		else if(aspectRatio > aspect.Common)
		{return aspect.Gold}
		else if(aspectRatio > aspect.Square)
		{return aspect.Gold}
		//TODO
	}
}