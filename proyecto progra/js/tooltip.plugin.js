;(function ( $, window, document, undefined ) { //IIFE

	var pluginName = "tooltip",
				defaults = {
				pluginName: "tooltip",
				message:'',
				position:'top'
		};


	function Tooltip ( element, options ) {
		this.element = element;			
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	$.extend(Tooltip.prototype, {
				init: function () {
					var self = this;
					$(this.element).mouseover(function(){
						if(self.settings.position == 'right'){
							$(this).parent().append($('<div>'+self.settings.message+'</div>').addClass('tooltip').css('background-color','rgb(214, 214, 211)').css('width','5%'));
						}
						if (('.tooltip').length >1){
							console.log($('.tooltip').parent())
							$('.tooltip').parent().remove('.tooltip');
						}
					});
					
				},
				yourOtherFunction: function () {
						// some logic
				}
		});
	$.fn[ pluginName ] = function ( options ) {
				this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Tooltip( this, options ) );								
						}
				});

				// chain jQuery functions
				return this;
		};

})( jQuery, window, document );