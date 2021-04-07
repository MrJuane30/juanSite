  var dato = [
    "Gadget",
    "Survey",
    "Expensive",
    "Delivery",
    "Advertisement",
    "Purse",
    "Magazine",
    "Until",
    "Housekeeper",
    "Uncle",
    "Aunt",
    "Nightstand",
    "Couch",
    "Whose",
    "Who",
    "Underground",
    "Town",
    "Downtown",
    "Windy",
    "Heatwave",
    "Outside",
    "Yard",
    "Microwave",
    "Suburb",
    "Building",
    "Convenient",
    "Warm",
    "Bring",
    "Rearrange",
    "Furniture",
  ];
  var defs = [
    "A small useful piece of equipment",
    "An examination of people’s opinions or behaviour done by asking people questions",
    "Costing a lot of money",
    "The act of taking letters or things to a person or place",
    "A picture, short film, etc. that is designed to persuade people to buy something",
    "A small container for money, usually used by a woman",
    "A type of thin book with large pages and a paper cover that contains articles and photographs and is published every week or month",
    "Continuing to happen before a particular time or event and then stopping",
    "Someone who is paid to clean and cook in someone else’s house",
    "The brother of someone’s mother or father, or the husband of someone’s aunt or uncle",
    "The sister of someone’s mother or father, or the wife of someone’s uncle or aunt",
    "A small table that is kept at the side of a bed",
    "A long, comfortable piece of furniture that two or more people can sit on",
    "Used to ask who something belongs to or who someone or something is connected with",
    "Used to ask about someone’s name or which person or group someone is talking about",
    "Under the surface of the ground",
    "A place where people live and work that is larger than a village",
    "In or to the central part or main business area of a city",
    "A windy day",
    "A period of very hot weather",
    "Near a building or room but not in it",
    "An area of land in front of or behind a house",
    "An electric oven that uses waves of energy to quickly cook food or make it warmer",
    "An area where people live outside the centre of a city",
    "A structure with walls and a roof, such as a house or school",
    "Near or easy to get to",
    "Having a temperature between cool and hot",
    "To take someone or something with you when you go somewhere",
    "To change the order or position of things",
    "Things such as chairs, tables, and beds that you put into a room or building"

  ];
  var signi = [
    "Dispositivo o artilugio",
    "Encuesta",
    "Caro/ra",
    "Reparto, entrega",
    "Anuncio",
    "Monedero",
    "Revista",
    "Hasta",
    "Empleado, -a del hogar",
    "Tío",
    "Tía",
    "Mesa de noche",
    "Sofá",
    "De quién",
    "Quién",
    "Subterráneo, bajo tierra",
    "Ciudad, pueblo grande",
    "Al/del centro de la ciudad",
    "Ventoso/sa",
    "Ola de calor",
    "Fuera de",
    "Jardín",
    "Microondas",
    "Zona residencial en las afueras de una ciudad",
    "Edificio",
    "Bien situado",
    "Cálido",
    "Traer",
    "Cambiar de lugar",
    "Muebles"

  ];
  var ejemplo = [
    "A new gadget for my computer",
    "A recent survey showed that 58 percent of people do not exercise enough.",
    "An expensive car",
    "A truck that makes hundreds of deliveries a day",
    "An advertisement for a new car",
    "I left my purse on the bus",
    "She buys all the latest fashion magazines",
    "The show will be on until the end of the month.",
    "My mom is a housekeeper",
    "This is my uncle Charlie",
    "I’m going to visit my aunt next week",
    "My nightstand is next to my bed",
    "The black couch is in my living room",
    "Whose gloves are these?",
    "Who’s that?",
    "An animal that lives underground",
    "It’s a small town in the north of England",
    "I work downtown",
    "A windy day",
    "The country was in the middle of a heatwave",
    "It’s cold outside today",
    "We had a barbecue in the yard",
    "I don’t like to microwave meat",
    "A suburb of New York",
    "So much building around our neighborhood",
    "The new supermarket is very convenient for me",
    "It’s nice and warm in here",
    "Did you bring an umbrella with you?",
    "He rearranged the furniture in his bedroom",
    "Office furniture",


  ];

  var i = -1;
  function initComponents(word) {
    word.innerHTML = dato[0];
  }
  function cambiarDato() {
    if (i < dato.length - 1) {
      i = i + 1;
      var word = document.getElementById("word");
      var def = document.getElementById("def");
      var trans = document.getElementById("trans");
      var exam = document.getElementById("exam");
      var count= document.getElementById("count");
      word.innerHTML = this.dato[i];
      def.innerHTML = this.defs[i];
      trans.innerHTML = this.signi[i];
      exam.innerHTML = this.ejemplo[i];
      count.innerHTML= i+1;
      document.getElementById("decremento").disabled = false;
    } else {
      document.getElementById("incremento").disabled = true;
      document.getElementById("decremento").disabled = false;
    }
  }

  function regresarDato() {
    if (i == 0 || i == -1) {
      document.getElementById("decremento").disabled = true;
      document.getElementById("incremento").disabled = false;
    } else {
      var word = document.getElementById("word");
      var def = document.getElementById("def");
      var trans = document.getElementById("trans");
      var exam = document.getElementById("exam");
      var count= document.getElementById("count");
      i = i - 1;
      word.innerHTML = this.dato[i];
      def.innerHTML = this.defs[i];
      trans.innerHTML = this.signi[i];
      exam.innerHTML = this.ejemplo[i];
      count.innerHTML= (i+2)-1;
      document.getElementById("incremento").disabled = false;
    }
  }
