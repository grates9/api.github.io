const kMaterial = {} 

kMaterial.bottomMenu = function(data, space = '1'){
	
  newStyle(`
  		
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
    
  `);

	var lp = div().id('k-bottom-menu')
  .css({
  	position: 'fixed',
  	bottom: '0',
  	width: '100%',
  	background: '#ddf',
  	padding: '10px',
    color: '#333',
    boxShadow: '0 0 20px rgba(125,125,125,0.3)',
    display: 'flex',
    justifyContent: 'center',
    overflowX: 'auto'
  })
  
  
  globalThis['menu-bottom'] = {}
  
  data.forEach(function(els){
  	
    var typeIcon = "fas";
  
  	if(els.tipeIcon != undefined){
    	typeIcon = els.tipeIcon;
    }
  
  	globalThis['menu-bottom'][els.id] = span().html(' <i style="font-size: 20px;" style="font-size: 20px;" class="'+typeIcon+' fa-'+els.icon+'"></i> <br> '+els.text).cursor('pointer').padding('0 calc(10px + '+space+'%)').id(els.id).align('center').font("Roboto").size("12px")
  
  	lp.child(
      globalThis['menu-bottom'][els.id]
    )
    
  })
  
  return lp;
  
}
