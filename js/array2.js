  var dato2 = [
    "Healthy",
    "Advice",
    "Ailment",
    "Ask",
    "Plum",
    "Workshop",
    "Seem",
    "Rash",
    "Between",
    "Matter",
    "Suddenly",
    "Born",
    "Could",
    "Still",
    "Well",
    "Burglary",
    "Steal",
    "Speech",
    "Protest",
    "Advertise",
    "Arrangement",
    "Obligation",
    "Event",
    "Suggestion",
    "Which",
    "Prize",
    "Attend",
    "Borrow",
    "Lend",
    "Invitation",
  ];
  var parts2 = [
    "adjective",
    "noun",
    "noun",
    "verb",
    "noun",
    "noun",
    "verb",
    "noun",
    "preposition",
    "noun",
    "adverb",
    "verb",
    "Modal verb",
    "adverb",
    "adverb",
    "noun",
    "verb",
    "noun",
    "noun",
    "verb",
    "noun",
    "noun",
    "noun",
    "noun",
    "pronoun, determiner",
    "noun",
    "verb",
    "verb",
    "verb",
    "noun"

  ];
  var defs2 = [
    "Not likely to become sick",
    "Suggestions about what you think someone should do",
    "An illness, usually not serious or dangerous",
    "To say something to someone as a question",
    "A soft, round fruit with red or yellow skin and a stone in the middle",
    "A meeting at which people learn about a subject through discussion and activities",
    "To appear to be or have",
    "Small red spots on the skin caused by an allergy, illness, etc.",
    "In the space that separates two places, people, or things",
    "A subject or situation that you need to think about or do something about",
    "Quickly and when not expected",
    "When a person or animal is born, they come out of their mother’s body and start to exist",
    "Used as the past form of ‘can’ to talk about what someone or something was able or allowed to do",
    "Used to say that something is continuing to happen now",
    "In a good way",
    "The crime of going into a building illegally and stealing things",
    "To secretly take something that belongs to someone else",
    "A formal talk that someone gives to a group of people",
    "An act of showing that you strongly disagree with something, often by standing somewhere and shouting, carrying signs, etc.",
    "To try to convince people to buy sth using television, magazines etc.",
    "Plans for how something will happen",
    "Something that you have to do because it is your duty",
    "Something that happens, especially something important or strange",
    "An idea or plan that someone suggests",
    "used to ask or talk about a choice between two or more things",
    "something valuable that is given to someone who wins a competition",
    "To go to an event",
    "To use something that belongs to someone else and then return it to them",
    "To give something to someone for a period of time",
    "If someone gives you an invitation, they are asking whether you would like to do a particular thing or go to a particular event or place."

  ];
  var signi2 = [
    "Saludable",
    "Consejo(s)",
    "Dolencia, achaque",
    "Preguntar",
    "Ciruela",
    "Taller",
    "Parecer",
    "Sarpullido",
    "Entre",
    "Asunto",
    "De repente",
    "Nacer",
    "Podría",
    "Todavía",
    "Bien",
    "Robo",
    "Robar",
    "Discurso",
    "Protesta, marcha",
    "Anunciar",
    "Preparativos, planes",
    "Obligación",
    "Acontecimiento",
    "Sugerencia",
    "Cuál",
    "Premio",
    "Asistir",
    "Tomar algo prestado",
    "Prestar",
    "Invitación"

  ];
  var ejemplo2 = [
    "He didn’t look very healthy to me.",
    "This book gives advice on saving money.",
    "Children often have minor ailments.",
    "I asked him about his hobbies.",
    "Plum jelly.",
    "A workshop on data management and security.",
    "She seems tense all the time.",
    "An itchy rash",
    "The town lies halfway between Florence and Rome",
    "Could I talk to you about a personal matter?",
    "I suddenly realized who she was.",
    "She was born in London in 1983.",
    "You said I could go!",
    "Do you still play basketball?",
    "He’s doing well at school.",
    "There was a burglary at the museum.",
    "Burglars broke into the house and stole a computer.",
    "I had to make a speech at my brother’s wedding.",
    "There was a protest against the war.",
    "It’s expensive to advertise on TV.",
    "I made arrangements to meet her on Saturday.",
    "Parents have an obligation to make sure their children receive a good education.",
    "Local people have been shocked by recent events in the town.",
    "Philip made a few suggestions.",
    "Which of these do you like best?",
    "To win a prize",
    "He attended a meeting.",
    "Can I borrow a pen please?",
    "I lent my bike to Sara.",
    "A party invitation.",


  ];

  var j = -1;
  function initComponents(word) {
    word.innerHTML = dato2[0];
  }
  function cambiarDatos() {
    if (j < dato.length - 1) {
      j = j + 1;
      var word = document.getElementById("word2");
      var pa = document.getElementById("partso");
      var def = document.getElementById("def2");
      var trans = document.getElementById("trans2");
      var exam = document.getElementById("exam2");
      var count= document.getElementById("count2");
      word.innerHTML = this.dato2[j];
      pa.innerHTML = this.parts2[j];
      def.innerHTML = this.defs2[j];
      trans.innerHTML = this.signi2[j];
      exam.innerHTML = this.ejemplo2[j];
      count.innerHTML= j+1;
      document.getElementById("decremento2").disabled = false;
    } else {
      document.getElementById("incremento2").disabled = true;
      document.getElementById("decremento2").disabled = false;
    }
  }

  function regresarDatos() {
    if (j == 0 || j == -1) {
      document.getElementById("decremento2").disabled = true;
      document.getElementById("incremento2").disabled = false;
    } else {
      var word = document.getElementById("word2");
      var pa = document.getElementById("partso");
      var def = document.getElementById("def2");
      var trans = document.getElementById("trans2");
      var exam = document.getElementById("exam2");
      var count= document.getElementById("count2");
      j = j - 1;
      word.innerHTML = this.dato2[j];
      pa.innerHTML = this.parts2[j];
      def.innerHTML = this.defs2[j];
      trans.innerHTML = this.signi2[j];
      exam.innerHTML = this.ejemplo2[j];
      count.innerHTML= (j+2)-1;
      document.getElementById("incremento2").disabled = false;
    }
  }
