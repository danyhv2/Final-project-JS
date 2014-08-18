var myApp = angular.module("MyApp", []);
myApp.controller("empCtrl", function($scope) {
  Object.defineProperty($scope, "queryFilter", {
      get: function() {
          var out = {};
          out[$scope.queryBy || "$"] = $scope.query;
          return out;
      }
  });
  $scope.currentPage = 0;
  $scope.pageSize = 3;
  $scope.activities = [{
      "activity": "Rafting",
      "description": "A continuación vamos a dar el paso he ir río abajo. Vamos a disfrutar del paisaje espectacular y un emocionante paseo. A mitad de nuestro recorrido vamos a recostarnos en la orilla del río y disfrutar de unas deliciosas frutas tropicales mientras se empapa en el entorno tropical. Al final de nuestro viaje, una bebida fría y una toalla seca le esperarán antes de un viaje corto en el cuál se podrán cambiar de ropa y tener un delicioso almuerzo típico costarricense",
      "price": "$85",
      "place": "Alajuela",
      "details":["Ropa facil de secar",
                  "Traje de baño",
                  "Zapatos de seguridad",
                  "Protector solar"],
      "image": "img/rafting2.jpg"
  }, {
      "activity": "Canopy",
      "description": "Sky Trek fue de los primeros “canopy’s” de Monteverde, nuestros pioneros buscaban provocar una experiencia inolvidables en la selva tropical desde otra perspectiva. Usted estará equipado con todo lo necesario (arnés, casco, guantes), que los guías se encargaran de ajustar correctamente. Después le darán una charla de seguridad de la forma apropiada del tour y el innovador sistema de frenado. Volara a lo largo de casi dos millas (tres kilómetros) de cables, podrás observar el bosque Nuboso, durante el recorrido de diez cables que se extienden en alturas desde 40 hasta 100 metros y longitudes de 100 hasta 750 metros.",
      "price": "$45",
      "place": "Puntarenas",
      "details": ["Repelente para insectos",
                  "Se recomienda usar zapatos cerrados",
                  "Ropa cómoda",
                  "Protector solar"],
      "image": "img/canopy2.jpg"
  }, {
      "activity": "Canopy",
      "description": "Disfrute el Canopy Tour, el más cercano, seguro y emocionante del Valle Central. Esta travesía por el bosque nuboso se realiza en un sistema de cables, plataformas y senderos entre las copas de los árboles, que permiten la observación de la observación de especies y un mayor contacto con la naturaleza. Contamos con pesca recreativa de trucha: cultivadas con modernas técnicas y agua de manantiales que aseguran su pureza y exquisito sabor.",
      "price": "$35",
      "place": "Alajuela",
      "details": ["Pantalones largos o cortos",
                  "Durante la estación lluviosa se recomienda llevar capa",
                  "Zapatos deportivos",
                  "Ropa liviana"],
      "image": "img/canopy1.jpg"
  }, {
      "activity": "Buceo",
      "description": "Deep Blue Diving Adventures está localizado en Playas del Coco en el golfo de papagayo. Este golfo es ampliamente conocido como principal destino de buceo en Costa Rica. Con sus soleadas playas e islas rocosas este área ofrece una gran variedad de aventuras de buceo para todos los niveles. El buceo en pináculos volcánicos ofrece: tiburones de aleta blanca, tiburones toro, mantas, rayas, rayas águila, rayas diamante, pulpos y grandes bancos de peces tropicales. Las ricas aguas de Costa Rica proveen el habitat ideal para una gran variedad de vida marina desde grandes pelagies hasta los delicados nudibranquios. Con mas de 40 lugares de buceo para elegir, nuestras embarcaciones lo transportarán hasta los inovidables puntos de buceo de nuestro fascinante mundo subacuático, lugares con los que muchos buzos sueñan.",
      "price": "$180",
      "place": "Guanacaste",
      "details": ["Traje de ibuprofeno",
                  "Protector solar",
                  "Gafas de buceo"],
      "image": "img/buceo2.jpg"
  }, {
      "activity": "Snorkeling",
      "description": "El tour de snorkelin es una gran manera de explorar los arrecifes de coral de Cahuita que rodea la punta del parque nacional conocido como Punta Cahuita. El parque fue establecido en 1978 y ha seguido siendo el único parque nacional en Costa Rica que depender solamente de donaciones. Las donaciones recibidas se ponen a mantener el parque en la mayor condición, libre de basura y el mantenimiento de la seguridad de la vida silvestre y los visitantes en el parque. El arrecife en el Parque Nacional se llena con más de 240 especies marinas, incluyendo animales como peces tropicales, moluscos, tiburones y langostas.",
      "price": "$55",
      "place": "Limon",
      "details":["Vestido de baño",
                "Protector Solar",
                "Toalla para secarse"],
      "image": "img/snorkeling3.jpg"
  }, {
      "activity": "Rappel",
      "description": "El tour de rappell en cataratas de Monteverde consiste en una caminata de 2 cortos senderos con un guia para llegar al punto de inicio donde estan las cataratas de Monteverde. Todas las cataratas son diferentes y la mas alta tiene una altura aproximada de 131 pies de alto. Despues de descender las cataratas regresaran a los senderos con vistas increibles y hermosas, donde los turistas podran apreciar el golfo y el lago de Nicaragua en un dia despejado. Luego llegaran a la recepcion, todos los guias hablan perfecto ingles y español.",
      "price": "$40",
      "place": "Puntarenas",
      "details": ["Ropa extra",
                  "Zapatos cerrados",
                  "Toalla propia"],
      "image": "img/canyoning3.jpg"
  }, {
      "activity": "Rock Climbing",
      "description": "A pesar de que Costa Rica no es el mejor lugar de escalada en el mundo, tiene riscos adecuados para las personas que quieren aprender el deporte de escalada o bien existen gran variedad de rutas difíciles para los que cuentan con alguna experiencia. En nuestra aventura visitaremos una roca cerca de Cachi, Cartago, provincia de Costa Rica que en los inicios de la colonización fue la Capital del país. La pared de basalto tiene alrededor de 35 rutas que varían en dificultad desde 5,6 (un buen lugar para los principiantes) y van todo el camino hasta 5.13a de dificultad. El bloque de roca gris se encuentra cerca de la exuberancia del cauce del río Reventazón, el cual cruza la finca donde nos encontramos. La primera ruta es una 5,6, ideal para calentar, es aquí en donde empieza a aumentar (derecha a izquierda) cada vez más la dificultad, donde la última ruta (la primera de izquierda a derecha) es una 5.13a. La roca es muy limpia y si llueve la misma roca funciona como un techo que no permite que uno se moje mientras asciende.",
      "price": "$105",
      "place": "Cartago",
      "details": ["Zapatos para caminar",
                  "Traje de baño",
                  "Se recomienda llevar unas segunda mudada completa"],
      "image": "img/rock2.jpg"
  }, {
      "activity": "Paracaidismo",
      "description": "Para el primer salto se imparte un curso teórico de 7 u 8 horas el día antes del salto. Durante la lección se presentan las características del paracaídas, sus componentes, aerodinámica, manejo del equipo, cuidados y procedimientos a seguir al aproximarse y dentro de la aeronave, procedimiento de salida del avión, procedimientos en caso que falle el paracaídas o la aeronave, aterrizaje y procedimientos luego de aterrizar. La meta de este curso es dar la oportunidad al estudiante de avanzar hasta ser un paracaidista independiente, para que luego pueda seguir creciendo dentro de las diferentes modalidades del deporte",
      "price": "$350",
      "place": "San Jose",
      "details": ["Ropa cómoda",
                  "Zapatos cerrados"],
      "image": "img/paracaidismo1.jpg"
  }, {
      "activity": "Tour a caballo",
      "description": "En familia o con sus amigos, como usted lo desee; montar a caballo sigue siendo una de las experiencias favoritas de la gente que nos visita. Que le parece subir acompañado de un baquiano hasta un mirador, donde sus vistas lo dejarán asombrado de la belleza escénica y natural que posee la zona de Turrialba, incluyendo por supuesto el Lago de Angostura que rodea nuestro hotel: para luego descender por caminos que le permitiran admirar las plantaciones características del lugar, como caña de azúcar, café y macadamia.",
      "price": "$25",
      "place": "Cartago",
      "details": ["Repelente conta insectos",
                  "Zapatos cerrados"],
      "image": "img/horse3.jpg"
  },{
      "activity": "Tour a caballo",
      "description": "Por años los dueños y operarios de Hacienda Pozo Azul, la familia Quintana, han sido amantes de los caballos y participantes activos de montas a través de todo el país. Ellos le ofrecen su conocimiento, experiencia y sus caballos de alta calidad para garantizarle una experiencia inolvidable y la mejor manera de conocer este hermoso país de verdad y disfrutar de su gente. Administramos un negocio de aventura, sin embargo los caballos son nuestra especialidad. Hemos criado caballos por tres generaciones utilizando razas como el criado en Costa Rica, de suave monta, así como el fuerte caballo andaluz de España y; últimamente, caballos de cuarta.",
      "price": "$35",
      "place": "Limon",
      "image": "img/horse4.jpg"
  }, {
      "activity": "Globo Aerostático",
      "description": "El Vuelo se realiza una vez diariamente en la zona de San Carlos.  Los despegues son específicamente desde el Hotel Tilajari, en Muelle de San Carlos. La actividad en su totalidad tiene una duración entre 2.5 y 3.5 horas.  Esto incluye el proceso del inflado, charla de seguridad, vuelo en si, aterrizaje y traslado de vuelta (en vehículos nuestros) al Tilajari.  Tiempo promedio en el aire es de 45 minutos a 1 hora. Se recomienda pasar la noche en la zona ya que la actividad es muy temprano.  Nuestra politica de seguridad es estricta y si el cliente no llega a tiempo, pierde su vuelo y el costo en su totalidad.",
      "price": "$345",
      "place": "Alajuela",
      "image": "img/globo1.jpg"
  
  }];


  $scope.numberOfPages=function(){
        return Math.ceil($scope.activities.length/$scope.pageSize);   

    }
    for (var i=0; i< 1; i++) {
       // $scope.activities.push("Item "+i);
                  console.log($scope.activities[0].place);

    }

});



    myApp.filter('startFrom', function() {
      return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
    });