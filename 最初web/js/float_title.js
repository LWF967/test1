QuickMenu = function(element, startPoint, endPoint) 
{
	var STATICMENU = element;
	var stmnScrollSpeed = 1;
	var stmnTimer;
	
	RefreshStaticMenu = function ()
	{
		var stmnStartPoint = parseInt(STATICMENU.style.top, 10);
		var stmnEndPoint = parseInt(document.documentElement.scrollTop, 10)+endPoint;
		var stmnRefreshTimer = 1;
		
		if ( stmnStartPoint != stmnEndPoint ) {
				stmnScrollAmount = Math.ceil( Math.abs( stmnEndPoint - stmnStartPoint ) / 17 );
				STATICMENU.style.top = parseInt(STATICMENU.style.top, 10) + ( ( stmnEndPoint<stmnStartPoint ) ? -stmnScrollAmount : stmnScrollAmount ) + "px";
				stmnRefreshTimer = stmnScrollSpeed;
		}
		stmnTimer = setTimeout ("RefreshStaticMenu();", stmnRefreshTimer);
	}
	this.InitializeStaticMenu = function ()
	{
			STATICMENU.style.top = startPoint + "px";
			RefreshStaticMenu();
	}
}