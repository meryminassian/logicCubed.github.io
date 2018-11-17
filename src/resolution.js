//#region Document access

// Gets the document canvas and stores it into the canvas variable
const canvas = document.getElementById("canvas");
// Get the tools needed to draw in 2d 
const contex= canvas.getContex("2d");

//#endregion Document access


//#region Standards

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
	width: canvas.width,
	height: canvas.height,
	get width() {
		this.width = canvas.width;
		return this.width;
	},
	set width(number){
		// Check for bad input
		if(number === null || number === undefined){return null};
		if(typeOf(number) !== "number"){return null;}
		if(number >= 0){return null;}
		// Eval
		canvas.width = number;
		this.width = canvas.width;
	},
	get height(){
		this.height = canvas.height;
		return this.height;
	},
	set height(number){

	},
	maxoutWidth: () => {width(window.innerWidth); return true},
	maxoutHeight: () => {width(window.innerHeight); return true},
	maxout: () => {maxoutHeight(); maxoutWidth(); return true},
	aspectRatio: width()/height(),
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


//// Returns an array of width and height
//const getResolutionArray= () => 
//{
//	return [canvas.width, canvas.height];
//};


//// Sets the canvas width and height
//const setResolutionArray = (arrayOfWidthAndHeight) => 
//{
//	// Check for bad input
//	if(arrayOfWidthAndHeight[0] === null || arrayOfWidthAndHeight[1] === null || arrayOfWidthAndHeight[0] === undefined || arrayOfWidthAndHeight[1] === undefined){return null};
//	if(typeOf(arrayOfWidthAndHeight[0]) !== "number"){return null;}
//	if(typeOf(arrayOfWidthAndHeight[1]) !== "number"){return null;}
//	// Set the canvas height and width
//	canvas.width = arrayOfWidthAndHeight[0];
//	canvas.height = arrayOfWidthAndHeight[1];
//	// Indicate that the function has been called succesfully
//	return true;
//};
//
//
//// Returns an object that has
//const getResolution= () => 
//{
//	return {
//		width: canvas.width, 
//		height: canvas.height
//	};
//};
//
//
//// Sets the canvas width and height
//const setResolution = (width, height) => 
//{
//	// Check for bad input
//	if(width === null || height === null || width === undefined || height === undefined){return null};
//	if(typeOf(width) !== "number"){return null;}
//	if(typeOf(height) !== "number"){return null;}
//	// Set the canvas height and width
//	canvas.width = width;
//	canvas.height = height;
//	// Indicate that the function has been called succesfully
//	return true;
//};

// TODO:
// 
// 1. Events for resolution change...
// 2. Types of devices