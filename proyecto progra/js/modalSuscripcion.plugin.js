;(function ( $, window, document, undefined ) { //IIFE

	var pluginName = "modalSuscripcion",
				defaults = {
				pluginName: "modalSuscripcion",
				position:'top',
		};


	function ModalDialog ( element, options ) {
		this.element = element;			
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
		this.yourOtherFunction();
	}

	$.extend(ModalDialog.prototype, {
				init: function () {
					var self = this;
					$(this.element).click(function(){
						if(self.settings.position == 'right'){

							$(this).parent().append($('<div></div>').addClass('suscriptionDialog').addClass('col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4'));

							$('.suscriptionDialog').append($('<span></span>').addClass('glyphicon glyphicon-remove-circle close'));

							$('.suscriptionDialog').append($('<h1 class="txtTitulo">'+'SUSCRIPCIÓN'+'</h1>'));
							$('.suscriptionDialog').append($('<input type="text" placeholder="Nombre" class="txtSuscripcion">').addClass('inputSuscripcion'));
							$('.suscriptionDialog').append($('<input type="text" placeholder="Apellido" class="txtSuscripcion">').addClass('inputSuscripcion'));
							$('.suscriptionDialog').append($('<input type="text" placeholder="Correo electrónico" class="txtSuscripcion">').addClass('inputSuscripcion'));
							$('.suscriptionDialog').append($('<input type="checkbox">').addClass('inputSuscripcion'));

							$(this).parent().append($('<div></div>').addClass('suscriptionShadow')
							);

						}

					$('.close').click(function(){
						$('.suscriptionDialog').remove();
						$('.suscriptionShadow').remove();
					});

					});
					
				},
				yourOtherFunction: function () {
					
				}
		});
	$.fn[ pluginName ] = function ( options ) {
				this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new ModalDialog( this, options ) );								
						}
				});

				// chain jQuery functions
				return this;
		};

})( jQuery, window, document );