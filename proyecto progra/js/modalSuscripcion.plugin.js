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

							$(this).parent().append($('<div></div>').addClass('suscriptionDialog').addClass('col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4 clearfix'));

							$('.suscriptionDialog').append($('<span></span>').addClass('glyphicon glyphicon-remove-circle close'));

							$('.suscriptionDialog').append($('<div>'+'<h2 class="txtTitulo">'+'NEWSLETTER'+'</h2>'+'</div>').addClass('text-center'));

							$('.suscriptionDialog').append($('<input type="text" placeholder="Nombre">').addClass('txtSuscripcion').addClass('form-control input-lg'));
							$('.suscriptionDialog').append($('<input type="text" placeholder="Apellido">').addClass('txtSuscripcion').addClass('form-control input-lg'));
							$('.suscriptionDialog').append($('<input type="text" placeholder="Correo electrónico">').addClass('txtSuscripcion').addClass('form-control input-lg'));
							$('.suscriptionDialog').append($('<label>'+'<input type="checkbox">'+'  Acepto recibir información por email.'+'</label>').addClass('txtAceptacion'));

							$('.suscriptionDialog').append($('<button class="btnSuscripcion" type="button">'+'Suscribirme'+'</button>').addClass('btn btn-success btn-lg pull-right'));

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